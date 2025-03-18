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
  section.assignment_groups = section.assignment_groups || [];
  for (const assignmentType of Snapshot.AssignmentTypes.extract(assignments)) {
    const args = Snapshot.AssignmentTypes.toCanvasArgs(assignmentType);
    if (section.assignment_groups && Preferences.duplicates() === 'update') {
      const prev = section.assignment_groups.findIndex(
        (g) => g.blackbaud_id == assignmentType.type_id
      );
      if (
        prev &&
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
    } else {
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
        console.log({ old: assignments[order].canvas!.args, new: args });
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
