import { Log } from '@battis/qui-cli.log';
import { ArrayElement } from '@battis/typescript-tricks';
import { Item } from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import * as AssignmentGroup from '../Canvas/AssignmentGroup.js';
import { Course } from '../Canvas/Course.js';
import * as Debug from '../Debug.js';
import * as Flags from '../Flags.js';
import { OneRoster } from '../OneRoster.js';

type IdentifyAssignmentGroupsOptions = {
  course: Course;
  markingPeriod: ArrayElement<NonNullable<Item['Gradebook']>>;
  assignmentGroups?: AssignmentGroup.AssignmentGroup[];
};

async function identifyAssignmentGroups({
  course,
  markingPeriod,
  assignmentGroups = []
}: IdentifyAssignmentGroupsOptions) {
  for (const assignment of markingPeriod.gradebook.Assignments) {
    const match = assignmentGroups.find(
      (g) => g.name == assignment.AssignmentType
    );
    if (!match) {
      assignmentGroups.push(
        await AssignmentGroup.create({
          course,
          data: {
            name: assignment.AssignmentType,
            group_weight: assignment.Weight
          }
        })
      );
    } else if (match.group_weight != assignment.Weight) {
      const message = `Assignment group weight mismatch: ${Log.syntaxColor({
        ...Debug.course(course),
        assignmentGroup: match,
        assignment: {
          AssignmentId: assignment.AssignmentId,
          AssignmentType: assignment.AssignmentType,
          Weight: assignment.Weight,
          DateDue: assignment.DateDue
        }
      })}`;
      if (Flags.ignoreErrors()) {
        Log.warning(message);
      } else {
        throw new Error(message);
      }
    }
  }
  return assignmentGroups;
}

type CreateOptions = {
  section: OneRoster;
  course: Course;
};

export async function create({ section, course }: CreateOptions) {
  let assignmentGroups: AssignmentGroup.AssignmentGroup[] = [];
  for (const markingPeriod of section.snapshot.Gradebook || []) {
    assignmentGroups = await identifyAssignmentGroups({
      course,
      markingPeriod,
      assignmentGroups
    });
  }
  return assignmentGroups;
}
