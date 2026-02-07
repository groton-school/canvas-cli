import { PathString } from '@battis/descriptive-types';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import { hydrate } from '@qui-cli/plugin';
import { Root } from '@qui-cli/root';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';
import * as Workspace from './App/Workspace.js';

type TermImportRecord = {
  'Term ID': number;
  Length: number;
  term_id: string;
  name: string;
};

type DepartmentAccountMapRecord = {
  'Department Id': number;
  'Canvas Account ID': number;
};

type CoursesWithDepartmentsRecord = {
  'Course ID': number;
  'Department Id': number;
};

type SisIdMapRecord = {
  AssociationId: number;
  Prefix?: string;
  'SIS Account ID'?: string;
};

let _instance: string | number;
export function instance() {
  return _instance;
}
export function setInstanceId(value?: string | number) {
  _instance = hydrate(value, _instance);
  Log.debug(`Blackbaud instance ${Colors.value(_instance)}`);
}

let _termsPath: PathString | undefined = undefined;
export function setTermsPath(value?: PathString) {
  _termsPath = hydrate(value, _termsPath);
  Log.debug(
    `Referring to terms list at ${Colors.path(_termsPath || 'undefined')}`
  );
}

let _departmentAccountMapPath: PathString | undefined = undefined;
export function setDepartmentAccountMapPath(value?: PathString) {
  _departmentAccountMapPath = hydrate(value, _departmentAccountMapPath);
  Log.debug(
    `Referring to department-account map at ${Colors.path(_departmentAccountMapPath || 'undefined')}`
  );
}

let _coursesWithDepartmentsPath: PathString | undefined = undefined;
export function setCoursesWithDepartmentsPath(value?: PathString) {
  _coursesWithDepartmentsPath = hydrate(value, _coursesWithDepartmentsPath);
  Log.debug(
    `Referring to courses with departments at ${Colors.path(_coursesWithDepartmentsPath || 'undefined')}`
  );
}

let _sisIdMapPath: PathString | undefined = undefined;
export function setSisIdMapPath(value?: PathString) {
  _sisIdMapPath = hydrate(value, _sisIdMapPath);
  Log.debug(
    `Referring to SIS ID map at ${Colors.path(_sisIdMapPath || 'undefined')}`
  );
}

let _terms: TermImportRecord[] | undefined = undefined;
function terms(): TermImportRecord[] {
  if (!_terms) {
    if (!_termsPath) {
      throw new Error(`termsPath uninitialized`);
    }
    _terms = parse(fs.readFileSync(path.resolve(Root.path(), _termsPath)), {
      columns: true
    }) as TermImportRecord[];
  }
  return _terms;
}

let _departmentAccountMap: DepartmentAccountMapRecord[] | undefined = undefined;
function departmentAccountMap() {
  if (!_departmentAccountMap) {
    if (!_departmentAccountMapPath) {
      throw new Error(`departmentAccountMapPath uninitialized`);
    }
    _departmentAccountMap = parse(
      fs.readFileSync(path.resolve(Root.path(), _departmentAccountMapPath)),
      { columns: true }
    ) as DepartmentAccountMapRecord[];
  }
  return _departmentAccountMap;
}

let _coursesWithDepartments: CoursesWithDepartmentsRecord[] | undefined =
  undefined;
function coursesWithDepartments() {
  if (!_coursesWithDepartments) {
    if (!_coursesWithDepartmentsPath) {
      throw new Error(`coursesWithDepartmentsPath uninitialized`);
    }
    _coursesWithDepartments = parse(
      fs.readFileSync(path.resolve(Root.path(), _coursesWithDepartmentsPath)),
      { columns: true }
    ) as CoursesWithDepartmentsRecord[];
  }
  return _coursesWithDepartments;
}

let _sisIdMap: SisIdMapRecord[] | undefined = undefined;
function sisIdMap() {
  if (!_sisIdMap) {
    if (!_sisIdMapPath) {
      _sisIdMap = [];
    } else {
      _sisIdMap = parse(
        fs.readFileSync(path.resolve(Root.path(), _sisIdMapPath)),
        { columns: true }
      ) as SisIdMapRecord[];
    }
  }
  return _sisIdMap;
}

const accounts: Record<
  Canvas.Accounts.Account['sis_account_id'],
  Canvas.Accounts.Account
> = {};

export function sis_course_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }
  const prefix = sisIdMap().reduce((pfx, map) => {
    if (
      snapshot.SectionInfo?.AssociationId == map.AssociationId &&
      map.Prefix
    ) {
      return map.Prefix;
    }
    return pfx;
  }, 'cls');
  return `${prefix}-${instance()}-${snapshot.SectionInfo?.Id}`;
}

export function sis_term_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }

  return terms().find((term) => {
    return (
      term['Term ID'] == snapshot.SectionInfo!.DurationId &&
      term.Length == snapshot.SectionInfo!.Length
    );
  })?.term_id;
}

export function termName(sis_term_id: string) {
  return terms().find((term) => term.term_id == sis_term_id)?.name;
}

/** Sis_user_id for (head) teacher */
export function sis_user_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }
  return `usr-${instance()}-${snapshot.SectionInfo.TeacherId}`;
}

export async function account_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }

  const departmentId = coursesWithDepartments().find(
    (offering) => offering['Course ID'] == snapshot.SectionInfo!.OfferingId
  )?.['Department Id'];
  let account_id: number | string | undefined = departmentAccountMap().find(
    (department) => department['Department Id'] == departmentId
  )?.['Canvas Account ID'];
  if (!account_id) {
    const sis_account_id = sisIdMap().reduce(
      (sis_account_id: string | undefined, map) => {
        if (
          snapshot.SectionInfo?.AssociationId == map.AssociationId &&
          map['SIS Account ID']
        ) {
          return map['SIS Account ID'];
        }
        return sis_account_id;
      },
      undefined
    );
    if (sis_account_id) {
      if (!(sis_account_id in accounts)) {
        accounts[sis_account_id] = await Canvas.v1.Accounts.get({
          pathParams: { id: `sis_account_id:${sis_account_id}` }
        });
      }
      account_id = accounts[sis_account_id].id;
    }
  }
  if (!account_id) {
    account_id = await Workspace.getAccountId();
  }
  return account_id;
}

export async function accountName(id: string) {
  let account = Object.values(accounts).reduce(
    (result: Canvas.Accounts.Account | undefined, a) =>
      a.id == id ? a : result,
    undefined
  );
  if (!account) {
    try {
      account = await Canvas.v1.Accounts.get({ pathParams: { id } });
      accounts[account.sis_account_id] = account;
    } catch (error) {
      Log.debug({ error });
    }
  }
  return account?.name || 'unknown';
}

export function name(snapshot: Imported.Data) {
  if (snapshot.SectionInfo) {
    return `${snapshot.SectionInfo?.GroupName} - ${snapshot.SectionInfo?.Identifier} (${
      snapshot.SectionInfo?.Block
    })`;
  } else {
    return 'Unnamed Course'; // https://canvas.instructure.com/doc/api/courses.html#method.courses.create
  }
}
