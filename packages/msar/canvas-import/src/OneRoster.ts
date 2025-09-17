import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { hydrate } from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import * as Imported from '@msar/types.import';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';

let _instance: string | number;
export function setInstanceId(value?: string | number) {
  _instance = hydrate(value, _instance);
}
export function instance() {
  return _instance;
}

type TermImportRecord = {
  'Term ID': number;
  'School Year': string;
  'Term Description': string;
  Length: number;
  term_id: string;
};

let _termsPath: PathString | undefined = undefined;
export function setTermsPath(value?: PathString) {
  _termsPath = hydrate(value, _termsPath);
}

type DepartmentAccountMapRecord = {
  'Department Id': number;
  Department: string;
  'Canvas Account ID': number;
};

let _departmentAccountMapPath: PathString | undefined = undefined;
export function setDepartmentAccountMapPath(value?: PathString) {
  _departmentAccountMapPath = hydrate(value, _departmentAccountMapPath);
}

type CoursesWithDepartmentsRecord = {
  'Course ID': number;
  'Department Id': number;
};

let _coursesWithDepartmentsPath: PathString | undefined = undefined;
export function setCoursesWithDepartmentsPath(value?: PathString) {
  _coursesWithDepartmentsPath = hydrate(value, _coursesWithDepartmentsPath);
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

export function sis_course_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }
  return `cls-${instance()}-${snapshot.SectionInfo?.Id}`;
}

export function sis_term_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }

  return terms().find((term) => {
    return (
      term['School Year'] == snapshot.SectionInfo!.SchoolYear &&
      term['Term Description'] == snapshot.SectionInfo!.Duration &&
      term.Length == snapshot.SectionInfo!.Length
    );
  })?.term_id;
}

/** Sis_user_id for (head) teacher */
export function sis_user_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }
  return `usr-${instance()}-${snapshot.SectionInfo.TeacherId}`;
}

export function account_id(snapshot: Imported.Data) {
  if (!snapshot.SectionInfo) {
    throw new Error('Missing SectionInfo');
  }

  const departmentId = coursesWithDepartments().find(
    (offering) => offering['Course ID'] == snapshot.SectionInfo!.OfferingId
  )?.['Department Id'];
  const account_id = departmentAccountMap().find(
    (department) => department['Department Id'] == departmentId
  )?.['Canvas Account ID'];
  if (!account_id) {
    throw new Error(
      `Could not map ${Colors.value('account_id')} for section: ${Log.syntaxColor({ SectionInfo: snapshot.SectionInfo })}`
    );
  }
  return account_id;
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
