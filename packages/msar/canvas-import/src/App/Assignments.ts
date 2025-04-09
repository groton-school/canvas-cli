import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import { JSONObject } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-cli.api';
import * as Imported from '@msar/types.import';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Resources.Course;
  section: Imported.Data;
};

export async function importAssignments({ course, section }: Options) {
  const assignments = await Snapshot.Assignments.hydrate(section);
  section.assignment_groups =
    (Preferences.duplicates() === 'update' ? section.assignment_groups : []) ||
    [];
  for (const assignmentType of Snapshot.AssignmentTypes.extract(assignments)) {
    const params = Snapshot.AssignmentTypes.toCanvasArgs(assignmentType);
    let processed = false;
    if (Preferences.duplicates() === 'update') {
      const prev = section.assignment_groups.findIndex(
        (g) => g.blackbaud_id == assignmentType.type_id
      );
      if (prev >= 0) {
        if (
          !Imported.isEqual(
            params as JSONObject,
            section.assignment_groups[prev].args as JSONObject
          )
        ) {
          const result = await Canvas.V1.Courses.AssignmentGroups.update({
            pathParams: {
              course_id: course.id.toString(),
              assignment_group_id: section.assignment_groups[prev].id!.toString()
            },
            params
          });
          if (result) {
            section.assignment_groups[prev].args = params as JSONObject;
          }
        } else {
          Log.info(`Assignment group ${Colors.value(params.name)} is up-to-date`);
        }
        processed = true;
      }
    }
    if (!processed) {
      const group = await Canvas.V1.Courses.AssignmentGroups.create({
        pathParams: { course_id: course.id.toString() },
        params
      });
      section.assignment_groups.push({
        id: group.id,
        blackbaud_id: assignmentType.type_id,
        args: params as JSONObject
      });
    }
  }

  for (let order = 0; order < assignments.length; order++) {
    const params = await Snapshot.Assignments.toCanvasArgs({
      course,
      assignmentGroup: {
        id: section.assignment_groups.find(
          (g) => g.blackbaud_id == assignments[order].type_id
        )!.id!
      } as Canvas.Resources.AssignmentGroup,
      assignment: assignments[order],
      order
    });
    let assignment: Canvas.Resources.Assignment | undefined = undefined;
    if (
      assignments[order].canvas?.id &&
      Preferences.duplicates() === 'update'
    ) {
      if (!Imported.isEqual(params, assignments[order].canvas!.args)) {
        assignment = await Canvas.V1.Courses.Assignments.update({
          pathParams: {
            course_id: course.id.toString(),
            id: assignments[order].canvas!.id!.toString()
          },
          params
        });
      } else {
        Log.info(
          `Assignment ${Colors.value(params['assignment[name]'])} is up-to-date`
        );
      }
    } else {
      assignment = await Canvas.V1.Courses.Assignments.create({
        pathParams: { course_id: course.id.toString() },
        params
      });
    }
    if (assignment) {
      if (assignments[order].Rubric && assignments[order].RubricId) {
        const rubric = await Snapshot.Rubrics.getCached(
          course.id,
          assignment,
          assignments[order].RubricId,
          assignments[order].Rubric!
        );
        if (rubric) {
          let params = rubric.args;
          if (
            rubric.rubric_association.association_id !== assignment.id &&
            rubric.rubric_association.association_type !== 'Assignment'
          ) {
            params = {
              'rubric_association[rubric_id]': rubric.rubric.id,
              'rubric_association[association_type]': 'Assignment',
              'rubric_association[association_id]': assignment.id,
              'rubric_association[hide_points]': false,
              'rubric_association[hide_score_total]': false,
              'rubric_association[hide_outcome_results]': false,
              'rubric_association[use_for_grading]': true,
              'rubric_association[purpose]': 'grading'
            } as Canvas.V1.Courses.RubricAssociations.createFormParameters;
            rubric.rubric_association =
              await Canvas.V1.Courses.RubricAssociations.create({
                pathParams: { course_id: course.id.toString() },
                params
              });
          }
          assignments[order].Rubric!.canvas = {
            id: rubric.rubric.id,
            course_id: course.id,
            rubric_association_id: rubric.rubric_association.id,
            rubric_association_type: rubric.rubric_association.association_type,
            args: params!
          };
        }
      }
      const i = section.Assignments?.findIndex(
        (a) => a.id == assignments[order].id
      );
      section.Assignments![i!].canvas = {
        id: assignment.id,
        args,
        created_at: assignment.created_at
      };
    }
  }
}
