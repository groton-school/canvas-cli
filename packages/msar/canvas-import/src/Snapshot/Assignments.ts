import { Log } from '@battis/qui-cli.log';
import { ArrayElement } from '@battis/typescript-tricks';
import { Canvas } from '@groton/canvas-cli.client.qui-cli';
import * as Imported from '@msar/types.import';
import { stripHtml } from 'string-strip-html';
import { Preferences } from '../App/index.js';
import * as Templates from '../Templates/index.js';
import * as Files from './Files.js';

type SnapshotModel = ArrayElement<NonNullable<Imported.Data['Assignments']>>;

type GradebookModel = ArrayElement<
  ArrayElement<
    NonNullable<Imported.Data['Gradebook']>
  >['gradebook']['Assignments']
>;

export type Model = Omit<SnapshotModel, 'ExtraCredit' | 'IncCumGrade'> &
  Partial<GradebookModel>;

export async function hydrate(snapshot: Imported.Data) {
  const assignments: Model[] = [];
  for (const snapshotAssignment of snapshot.Assignments || []) {
    const gradebookAssignment = snapshot.Gradebook?.reduce(
      (gradebookAssignment: GradebookModel | undefined, markingPeriod) => {
        if (!gradebookAssignment) {
          return markingPeriod.gradebook.Assignments.reduce(
            (markingPeriodAssignment: GradebookModel | undefined, entry) => {
              if (entry.AssignmentId == snapshotAssignment.id) {
                return entry;
              }
              return markingPeriodAssignment;
            },
            undefined
          );
        }
        return gradebookAssignment;
      },
      undefined
    );
    if (snapshotAssignment) {
      assignments.push({
        ...snapshotAssignment,
        ExtraCredit: undefined,
        IncCumGrade: undefined,
        ...gradebookAssignment
      });
    } else {
      const message = `Assignment unmatched: ${Log.syntaxColor({ snapshotAssignment, gradebookAssignment })}`;
      if (Preferences.ignoreErrors()) {
        Log.warning(message);
      } else {
        throw new Error(message);
      }
    }
  }
  return assignments.sort(
    (a, b) => new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime()
  );
}

type ToCanvasArgsOptions = {
  course: Canvas.Courses.Course;
  assignmentGroup: Canvas.AssignmentGroups.AssignmentGroup;
  assignment: Model;
  order: number;
};

export async function toCanvasArgs({
  course,
  assignmentGroup,
  assignment,
  order
}: ToCanvasArgsOptions): Promise<
  Partial<Canvas.v1.Courses.Assignments.createFormParameters>
> {
  // @ts-expect-error 2322 assignment is no longer a pure model, but we don't need to know that
  assignment = await Files.uploadLocalFiles({ course, entry: assignment });
  const args: Partial<Canvas.v1.Courses.Assignments.createFormParameters> = {
    'assignment[name]': stripHtml(
      assignment.ShortDescription.split('<br/>').pop()!
    ).result,
    'assignment[position]': order,
    'assignment[due_at]': new Date(assignment.DueDate).toISOString(),

    'assignment[description]': await Templates.render(
      Templates.Podium.Assignment,
      { assignment }
    ),
    'assignment[published]': assignment.PublishInd,
    'assignment[assignment_group_id]': assignmentGroup.id,
    'assignment[submission_types]': []
  };
  if (assignment.OnPaperSubmission) {
    args['assignment[submission_types]']?.push('on_paper');
  }
  if (assignment.DropboxInd) {
    args['assignment[submission_types]']?.push('online_upload');
  }
  if (assignment.MaxPoints) {
    args['assignment[points_possible]'] = assignment.MaxPoints;
  } else {
    args['assignment[omit_from_final_grade]'] = true;
  }

  return args;
}
