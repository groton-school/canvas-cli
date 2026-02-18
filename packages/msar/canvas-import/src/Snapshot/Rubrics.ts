import { 
  JSONObject } from '@battis/typescript-tricks';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { api } from 'datadirect';
import { EventEmitter } from 'node:events';

// FIXME Canvas.v1.Courses.Rubrics.create _does_ return a rubric!
/*type CacheItem = Awaited<
  ReturnType<typeof Canvas.v1.Courses.Rubrics.create>
>*/
type CacheItem = {
  rubric: Canvas.Rubrics.Rubric;
  rubric_association: Canvas.Rubrics.RubricAssociation;
} & {
  args?:
    | Canvas.v1.Courses.Rubrics.createFormParameters
    | Canvas.v1.Courses.RubricAssociations.createFormParameters;
};

const AWAITING = true;
const cache: Record<string, Record<number, CacheItem | typeof AWAITING>> = {};
const ready = new EventEmitter();
ready.setMaxListeners(1000);

function indexedHash(
  hash: Record<number, JSONObject>,
  item: JSONObject,
  i: number
) {
  hash[i] = item;
  return hash;
}

function toCanvasArgs(
  assignment: Canvas.Assignments.Assignment,
  rubric: NonNullable<Imported.Assignments.Item['Rubric']>
): Canvas.v1.Courses.Rubrics.createFormParameters {
  return {
    'rubric[title]': rubric.Name,
    // TODO check documentation for errors
    // @ts-expect-error 2353
    'rubric[hide_points]': false,
    'rubric[free_form_criterion_comments]': false,
    'rubric[criteria]': rubric.Skills.sort(
      (
        a: api.Rubric.AssignmentRubric.Skill,
        b: api.Rubric.AssignmentRubric.Skill
      ) => a.SortOrder - b.SortOrder
    )
      .map((skill: api.Rubric.AssignmentRubric.Skill) => ({
        description: skill.Name,
        long_description: '',
        criterion_use_range: false,
        points: skill.Levels.reduce(
          (points, level) => Math.max(points, parseInt(level.Value)),
          0
        ),
        ratings: skill.Levels.sort((a, b) => a.SortOrder - b.SortOrder)
          .map((level) => ({
            description: level.Name,
            long_description: level.Description,
            points: parseInt(level.Value)
          }))
          .reduce(indexedHash, {})
      }))
      .reduce(indexedHash, {}),
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
  course_id: string,
  assignment: Canvas.Assignments.Assignment,
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
      // TODO documentation is wrong, create returns a Rubric object
      // @ts-expect-error 2698
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
