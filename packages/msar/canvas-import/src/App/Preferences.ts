import { hydrate } from '@battis/qui-cli.plugin';
import { Workflow } from '@msar/workflow';

export const WORKSPACE_TERM = 'groton-canvas-import-workspace';

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

export type DuplicateHandling = 'update' | 'reset' | 'skip' | 'browse';

let _duplicates: DuplicateHandling | undefined = undefined;

export function setDuplicates(value?: DuplicateHandling) {
  _duplicates = hydrate(value, _duplicates);
}

export function duplicates() {
  return _duplicates;
}
