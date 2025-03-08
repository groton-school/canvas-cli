import { Log } from '@battis/qui-cli.log';
import { ArrayElement } from '@battis/typescript-tricks';
import { Item } from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import * as Assignment from '../Canvas/Assignment.js';
import { AssignmentGroup } from '../Canvas/AssignmentGroup.js';
import { Course } from '../Canvas/Course.js';
import * as Flags from '../Flags.js';
import { OneRoster } from '../OneRoster.js';

export type CompleteAssignment = Omit<
  ArrayElement<NonNullable<Item['Assignments']>>,
  'ExtraCredit' | 'IncCumGrade'
> &
  ArrayElement<
    ArrayElement<NonNullable<Item['Gradebook']>>['gradebook']['Assignments']
  >;

function mergeAssignments(section: OneRoster) {
  const assignments: CompleteAssignment[] = [];
  for (const markingPeriod of section.snapshot.Gradebook || []) {
    for (const assignment of markingPeriod.gradebook.Assignments) {
      const match = section.snapshot.Assignments?.find(
        (a) =>
          a.DueDate == assignment.SortDateDue &&
          a.AssignmentDate == assignment.SortDateAssigned &&
          a.ShortDescription == assignment.AssignShort
      );
      if (match) {
        assignments.push({ ...match, ...assignment });
      } else {
        const message = `Assignment unmatched: ${Log.syntaxColor(assignment)}`;
        if (Flags.ignoreErrors()) {
          Log.warning(message);
        } else {
          throw new Error(message);
        }
      }
    }
  }
  return assignments;
}

type CreateOptions = {
  section: OneRoster;
  course: Course;
  assignmentGroups?: AssignmentGroup[];
};

export async function create({
  section,
  course,
  assignmentGroups = []
}: CreateOptions) {
  let order = 0;
  // FIXME mergeAssignments is only getting the graded assignments (the others are thus _UN_graded)
  for (const assignment of mergeAssignments(section).sort(
    (a, b) => new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime()
  )) {
    await Assignment.create({
      assignment,
      course,
      assignmentGroups,
      order
    });
    order++;
  }
}
