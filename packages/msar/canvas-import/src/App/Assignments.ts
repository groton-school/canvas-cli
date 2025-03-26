import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import { JSONObject } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Courses.Model;
  section: Imported.Data;
};

export async function importAssignments({ course, section }: Options) {
  const assignments = await Snapshot.Assignments.hydrate(section);
  section.assignment_groups =
    (Preferences.duplicates() === 'update' ? section.assignment_groups : []) ||
    [];
  for (const assignmentType of Snapshot.AssignmentTypes.extract(assignments)) {
    const args = Snapshot.AssignmentTypes.toCanvasArgs(assignmentType);
    let processed = false;
    if (Preferences.duplicates() === 'update') {
      const prev = section.assignment_groups.findIndex(
        (g) => g.blackbaud_id == assignmentType.type_id
      );
      if (prev >= 0) {
        if (
          !Imported.isEqual(
            args as JSONObject,
            section.assignment_groups[prev].args as JSONObject
          )
        ) {
          const result = await Canvas.AssigmentGroups.update({
            course,
            assignmentGroup: {
              id: section.assignment_groups[prev].id!
            } as Canvas.AssigmentGroups.Model,
            args
          });
          if (result) {
            section.assignment_groups[prev].args = args as JSONObject;
          }
        } else {
          Log.info(`Assignment group ${Colors.value(args.name)} is up-to-date`);
        }
        processed = true;
      }
    }
    if (!processed) {
      const group = await Canvas.AssigmentGroups.create({ course, args });
      section.assignment_groups.push({
        id: group.id,
        blackbaud_id: assignmentType.type_id,
        args: args as JSONObject
      });
    }
  }

  for (let order = 0; order < assignments.length; order++) {
    const args = await Snapshot.Assignments.toCanvasArgs({
      course,
      assignmentGroup: {
        id: section.assignment_groups.find(
          (g) => g.blackbaud_id == assignments[order].type_id
        )!.id!
      } as Canvas.AssigmentGroups.Model,
      assignment: assignments[order],
      order
    });
    let assignment: Canvas.Assignments.Model | undefined = undefined;
    if (
      assignments[order].canvas?.id &&
      Preferences.duplicates() === 'update'
    ) {
      if (!Imported.isEqual(args, assignments[order].canvas!.args)) {
        assignment = await Canvas.Assignments.update({
          course,
          assignment: {
            id: assignments[order].canvas!.id!
          } as Canvas.Assignments.Model,
          args
        });
      } else {
        Log.info(
          `Assignment ${Colors.value(args['assignment[name]'])} is up-to-date`
        );
      }
    } else {
      assignment = await Canvas.Assignments.create({ course, args });
    }
    if (assignment) {
      if (assignments[order].Rubric && assignments[order].RubricId) {
        const rubric = await Snapshot.Rubrics.getCached(
          course.id,
          assignment,
          assignments[order].RubricId,
          assignments[order].Rubric!
        );
        if (
          rubric &&
          rubric.rubric_association.association_id !== assignment.id &&
          rubric.rubric_association.association_type !== 'Assignment'
        ) {
          await Canvas.Rubrics.createAssociation({
            course_id: course.id,
            args: {
              'rubric_association[rubric_id]': rubric.rubric.id,
              'rubric_association[association_type]': 'Assignment',
              'rubric_association[association_id]': assignment.id,
              'rubric_association[hide_points]': false,
              'rubric_association[hide_score_total]': false,
              'rubric_association[hide_outcome_results]': false,
              'rubric_association[use_for_grading]': true,
              'rubric_association[purpose]': 'grading'
            }
          });
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
