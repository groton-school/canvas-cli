import { Workflow } from '@msar/workflow';
import { hydrate } from '@qui-cli/plugin';

export function ignoreErrors() {
  return Workflow.ignoreErrors();
}

let _assignments = true;

export function setAssignments(value?: boolean) {
  _assignments = hydrate(value, _assignments);
}

export function assignments() {
  return _assignments;
}

let _bulletinBoard = true;

export function setBulletinBoard(value?: boolean) {
  _bulletinBoard = hydrate(value, _bulletinBoard);
}

export function bulletinBoard() {
  return _bulletinBoard;
}

let _topics = true;

export function setTopics(value?: boolean) {
  _topics = hydrate(value, _topics);
}

export function topics() {
  return _topics;
}

export type DuplicateHandling =
  | 'overwrite'
  | 'update'
  | 'reset'
  | 'skip'
  | 'browse';

let _duplicates: DuplicateHandling | undefined = undefined;

export function setDuplicates(value?: DuplicateHandling) {
  _duplicates = hydrate(value, _duplicates);
}

export function duplicates() {
  return _duplicates;
}

let _skipTeacherless = true;

export function setSkipTeacherless(value?: boolean) {
  _skipTeacherless = hydrate(value, _skipTeacherless);
}

export function skipTeacherless() {
  return _skipTeacherless;
}

let _prefixes: string[] | undefined = undefined;

export function setPrefixes(value?: string[]) {
  _prefixes = hydrate(value, _prefixes);
}

export function prefixes() {
  return _prefixes;
}

let _canvasStudioIndex: string | undefined;

export function setCanvasStudioIndex(value?: string) {
  _canvasStudioIndex = hydrate(value, _canvasStudioIndex);
}

export function canvasStudioIndex() {
  return _canvasStudioIndex;
}

let _groupIds: string[] | undefined = undefined;

export function setGroupIds(value?: string[]) {
  _groupIds = hydrate(value, _groupIds);
}

export function groupIds() {
  return _groupIds;
}
