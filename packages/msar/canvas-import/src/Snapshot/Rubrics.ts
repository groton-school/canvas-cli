import '@battis/qui-cli.env';
import { Canvas } from '@groton/canvas-cli.client.qui-cli';
import * as Imported from '@msar/types.import';
import { EventEmitter } from 'node:events';

type CacheItem = Awaited<
  ReturnType<typeof Canvas.v1.Courses.Rubrics.create>
> & {
  args?:
    | Canvas.v1.Courses.Rubrics.createFormParameters
    | Canvas.v1.Courses.RubricAssociations.createFormParameters;
};

const AWAITING = true;
const cache: Record<number, Record<number, CacheItem | typeof AWAITING>> = {};
const ready = new EventEmitter();
ready.setMaxListeners(1000);

function toCanvasArgs(
  assignment: Canvas.Assignments.Assignment,
  rubric: NonNullable<Imported.Assignments.Item['Rubric']>
): Canvas.v1.Courses.Rubrics.createFormParameters {
  return {
    'rubric[title]': rubric.Name,
    'rubric[hide_points]': false,
    'rubric[free_form_criterion_comments]': false,
    ...Client.Utilities.flatten(
      rubric.Skills.sort((a, b) => a.SortOrder - b.SortOrder).map(
        (skill): Canvas.Rubrics.CreateRubricCriterionParameters => ({
          description: skill.Name,
          long_description: '',
          criterion_use_range: false,
          points: skill.Levels.reduce(
            (points, level) => Math.max(points, parseInt(level.Value)),
            0
          ),
          ratings: skill.Levels.sort((a, b) => a.SortOrder - b.SortOrder).map(
            (level): Canvas.Rubrics.CreateRubricRatingParameters => ({
              description: level.Name,
              long_description: level.Description,
              points: parseInt(level.Value)
            })
          )
        })
      ),
      'rubric[criteria]',
      undefined,
      true
    ),
    'rubric_association[association_id]': assignment.id,
    'rubric_association[association_type]': 'Assignment',
    'rubric_association[purpose]': 'grading',
    'rubric_association[hide_points]': false,
    'rubric_association[hide_outcome_results]': false,
    'rubric_association[hide_score_total]': false,
    'rubric_association[use_for_grading]': true
  };
}

export async function getCached(
  course_id: number,
  assignment: Canvas.Resources.Assignment,
  blackbaudId: number,
  rubric: NonNullable<Imported.Assignments.Item['Rubric']>
): Promise<CacheItem> {
  if (!(course_id in cache)) {
    cache[course_id] = {};
  }
  if (blackbaudId in cache[course_id]) {
    if (cache[course_id][blackbaudId] === AWAITING) {
      return new Promise((resolve) => {
        ready.on(`${course_id}:${blackbaudId}`, () => {
          resolve(cache[course_id][blackbaudId] as CacheItem);
        });
      });
    }
    return cache[course_id][blackbaudId] as CacheItem;
  } else {
    cache[course_id][blackbaudId] = AWAITING;
    const args = toCanvasArgs(assignment, rubric);
    cache[course_id][blackbaudId] = {
      ...(await Canvas.v1.Courses.Rubrics.create({
        pathParams: { course_id },
        params: args
      })),
      args
    };
    ready.emit(`${course_id}:${blackbaudId}`);
    return cache[course_id][blackbaudId] as CacheItem;
  }
}
