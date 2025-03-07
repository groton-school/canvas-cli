import { PathString } from '@battis/descriptive-types';
import { Root } from '@battis/qui-cli.root';
import * as SnapshotMultiple from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';

type InitOptions = {
  blackbaudInstanceId: string | number;
  termsPath: PathString;
  departmentAccountMapPath: PathString;
  coursesWithDepartmentsPath: PathString;
};

type AllTermsCsvRecord = {
  'Term ID': number;
  'School Year': string;
  'Term Description': string;
};

type DepartmentAccountMapRecord = {
  'Department Id': number;
  Department: string;
  'Canvas Account ID': number;
};

type CoursesWithDepartmentsRecord = {
  'Course ID': number;
  'Department Id': number;
};

export class OneRoster {
  private static instance: string | number;
  private static termsPath: PathString;
  private static departmentAccountMapPath: PathString;
  private static coursesWithDepartmentsPath: PathString;

  private static _terms: AllTermsCsvRecord[];
  private static get terms() {
    if (!OneRoster._terms) {
      OneRoster._terms = parse(
        fs.readFileSync(path.resolve(Root.path(), OneRoster.termsPath)),
        { columns: true }
      );
    }
    return OneRoster._terms;
  }

  private static _departmentAccountMap: DepartmentAccountMapRecord[];
  private static get departmentAccountMap() {
    if (!OneRoster._departmentAccountMap) {
      OneRoster._departmentAccountMap = parse(
        fs.readFileSync(
          path.resolve(Root.path(), OneRoster.departmentAccountMapPath)
        ),
        { columns: true }
      );
    }
    return OneRoster._departmentAccountMap;
  }

  private static _coursesWithDepartments: CoursesWithDepartmentsRecord[];
  private static get coursesWithDepartments() {
    if (!OneRoster._coursesWithDepartments) {
      OneRoster._coursesWithDepartments = parse(
        fs.readFileSync(
          path.resolve(Root.path(), OneRoster.coursesWithDepartmentsPath)
        ),
        { columns: true }
      );
    }
    return OneRoster._coursesWithDepartments;
  }

  public static init({
    blackbaudInstanceId,
    termsPath,
    departmentAccountMapPath,
    coursesWithDepartmentsPath
  }: InitOptions) {
    OneRoster.instance = blackbaudInstanceId;
    OneRoster.termsPath = termsPath;
    OneRoster.departmentAccountMapPath = departmentAccountMapPath;
    OneRoster.coursesWithDepartmentsPath = coursesWithDepartmentsPath;
  }

  public constructor(public readonly snapshot: SnapshotMultiple.Item) {}

  public get sis_course_id() {
    return `crs-${OneRoster.instance}-${this.snapshot.SectionInfo?.Id}`;
  }

  public get sis_term_id() {
    return `as-trm-${OneRoster.instance}-${
      OneRoster.terms.find((term) => {
        return (
          term['School Year'] == this.snapshot.SectionInfo?.SchoolYear &&
          term['Term Description'] == this.snapshot.SectionInfo.Duration
        );
      })?.['Term ID']
    }`;
  }

  public get account_id() {
    const departmentId = OneRoster.coursesWithDepartments.find(
      (offering) =>
        offering['Course ID'] == this.snapshot.SectionInfo?.OfferingId
    )?.['Department Id'];
    return OneRoster.departmentAccountMap.find(
      (department) => department['Department Id'] == departmentId
    )?.['Canvas Account ID'];
  }

  public get name() {
    if (this.snapshot.SectionInfo) {
      return `${this.snapshot.SectionInfo?.GroupName} - ${this.snapshot.SectionInfo?.Identifier} (${
        this.snapshot.SectionInfo?.Block
      })`;
    } else {
      return 'Unnamed Course'; // https://canvas.instructure.com/doc/api/courses.html#method.courses.create
    }
  }
}
