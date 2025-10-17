import { JSONObject } from '@battis/typescript-tricks';
import { Canvas } from '@groton/canvas-api.client.qui-cli';
import * as Imported from '@msar/types.import';
import { Colors } from '@qui-cli/colors';
import '@qui-cli/env';
import { Log } from '@qui-cli/log';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Courses.Course;
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
          const result = await Canvas.v1.Courses.AssignmentGroups.update({
            pathParams: {
              course_id: course.id.toString(),
              assignment_group_id:
                section.assignment_groups[prev].id!.toString()
            },
            params
          });
          if (result) {
            section.assignment_groups[prev].args = params as JSONObject;
          }
        } else {
          Log.info(
            `Assignment group ${Colors.value(params.name)} is up-to-date`
          );
        }
        processed = true;
      }
    }
    if (!processed) {
      const group = await Canvas.v1.Courses.AssignmentGroups.create({
        pathParams: { course_id: course.id.toString() },
        params
      });
      section.assignment_groups.push({
        id: group.id.toString(),
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
      } as Canvas.AssignmentGroups.AssignmentGroup,
      assignment: assignments[order],
      order
    });
    let assignment: Canvas.Assignments.Assignment | undefined = undefined;
    if (
      assignments[order].canvas?.id &&
      Preferences.duplicates() === 'update'
    ) {
      if (!Imported.isEqual(params, assignments[order].canvas!.args)) {
        assignment = await Canvas.v1.Courses.Assignments.update({
          pathParams: {
            course_id: course.id.toString(),
            id: assignments[order].canvas!.id!.toString()
          },
          params:
            params as Partial<Canvas.v1.Courses.Assignments.updateFormParameters>
        });
      } else {
        Log.info(
          `Assignment ${Colors.value(params['assignment[name]'])} is up-to-date`
        );
      }
    } else {
      assignment = await Canvas.v1.Courses.Assignments.create({
        pathParams: { course_id: course.id.toString() },
        params
      });
    }
    if (assignment) {
      if (assignments[order].Rubric && assignments[order].RubricId) {
        const cached = await Snapshot.Rubrics.getCached(
          course.id.toString(),
          assignment,
          assignments[order].RubricId,
          assignments[order].Rubric!
        );
        if (cached) {
          let params =
            cached.args as Partial<Canvas.v1.Courses.RubricAssociations.createFormParameters>;
          if (
            cached.rubric_association.association_id !== assignment.id &&
            cached.rubric_association.association_type !== 'Assignment'
          ) {
            params = {
              'rubric_association[rubric_id]': cached.rubric.id,
              'rubric_association[association_type]': 'Assignment',
              'rubric_association[association_id]': assignment.id,
              'rubric_association[hide_points]': false,
              'rubric_association[hide_score_total]': false,
              'rubric_association[hide_outcome_results]': false,
              'rubric_association[use_for_grading]': true,
              'rubric_association[purpose]': 'grading'
            } as Partial<Canvas.v1.Courses.RubricAssociations.createFormParameters>;
            cached.rubric_association =
              await Canvas.v1.Courses.RubricAssociations.create({
                pathParams: { course_id: course.id.toString() },
                params
              });
          }
          assignments[order].Rubric!.canvas = {
            id: cached.rubric.id.toString(),
            course_id: course.id.toString(),
            rubric_association_id: cached.rubric_association.id,
            rubric_association_type: cached.rubric_association.association_type,
            args: params!
          };
        }
      }
      const i = section.Assignments?.findIndex(
        (a) => a.id == assignments[order].id
      );
      section.Assignments![i!].canvas = {
        id: assignment.id.toString(),
        args: params,
        created_at: assignment.created_at
      };
    }
  }
}
