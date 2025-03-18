import '@battis/qui-cli.env';
import { JSONObject } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import * as Snapshot from '../Snapshot/index.js';

type Options = {
  course: Canvas.Courses.Model;
  section: Imported.Data;
};

export async function importAssignments({ course, section }: Options) {
  const assignments = await Snapshot.Assignments.hydrate(section);
  const assignmentGroups: Canvas.AssigmentGroups.Model[] = [];
  section.assignment_groups = [];
  for (const assignmentType of Snapshot.AssignmentTypes.extract(assignments)) {
    const args = Snapshot.AssignmentTypes.toCanvasArgs(assignmentType);
    const group = await Canvas.AssigmentGroups.create({ course, args });
    assignmentGroups.push(group);
    section.assignment_groups.push({
      id: group.id,
      args: args as JSONObject
    });
  }
  for (let order = 0; order < assignments.length; order++) {
    const args = await Snapshot.Assignments.toCanvasArgs({
      course,
      assignmentGroups,
      assignment: assignments[order],
      order
    });
    const assignment = await Canvas.Assignments.create({ course, args });
    const secAss = section.Assignments?.find(
      (a) => a.AssignmentId == assignments[order].id
    );
    if (secAss) {
      secAss.canvas = {
        id: assignment.id,
        args,
        created_at: assignment.created_at
      };
    }
  }
}
