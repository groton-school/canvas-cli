import { URLString } from '@battis/descriptive-types';
import { Log } from '@battis/qui-cli.log';
import { isError } from '@groton/canvas-cli.client/dist/Utilities/isError.js';
import fetch, { fileFromSync, FormData } from 'node-fetch';
import fs from 'node:fs';
import { client } from './Client.js';
import { V1 as v1 } from './Endpoints/index.js';
import * as Resources from './Resources/index.js';

type UploadOptions = {
  pathParams: UploadPathParameters;
  params: UploadFormParameters;
  localFilePath: string;
};

type UploadPathParameters =
  | v1.Courses.Assignments.Submissions.Files.uploadPathParameters
  | v1.Courses.Files.uploadPathParameters
  | v1.Courses.Quizzes.Submissions.Self.Files.uploadPathParameters
  | v1.Folders.Files.uploadPathParameters
  | v1.Groups.Files.uploadPathParameters
  | v1.Users.Files.uploadPathParameters;

type UploadFormParameters =
  | v1.Courses.Assignments.Submissions.Files.uploadFormParameters
  | v1.Courses.Files.uploadFormParameters
  | v1.Courses.Quizzes.Submissions.Self.Files.uploadFormParameters
  | v1.Folders.Files.uploadFormParameters
  | v1.Groups.Files.uploadFormParameters
  | v1.Users.Files.uploadFormParameters;

export type UploadResponse = {
  upload_url: URLString;
  upload_params: {
    key: string;
    [param: string]: string;
  };
};

export async function upload({
  pathParams,
  localFilePath,
  params
}: UploadOptions) {
  params.size = fs.statSync(localFilePath).size;
  let next: UploadResponse;
  if (isCourseFile(pathParams)) {
    if (isAssignmentSubmission(pathParams)) {
      next = await v1.Courses.Assignments.Submissions.Files.upload({
        pathParams,
        params
      });
    } else if (isQuizSubmission(pathParams)) {
      next = await v1.Courses.Quizzes.Submissions.Self.Files.upload({
        pathParams,
        params
      });
    } else {
      next = await v1.Courses.Files.upload({ pathParams, params });
    }
  } else if (isFolderUpload(pathParams)) {
    next = await v1.Folders.Files.upload({ pathParams, params });
  } else if (isGroupUpload(pathParams)) {
    next = await v1.Groups.Files.upload({ pathParams, params });
  } else {
    next = await v1.Users.Files.upload({ pathParams, params });
  }

  const body = new FormData();
  for (const key in next.upload_params) {
    body.append(key, next.upload_params[key]);
  }
  body.append('file', fileFromSync(localFilePath));
  const confirm = await fetch(next.upload_url, {
    method: 'POST',
    body
  });
  let result: Resources.Files.File;
  switch (confirm.status) {
    case 301:
    case 201:
      if (confirm.headers.has('location')) {
        result = await client().fetchAs<Resources.Files.File>(
          confirm.headers.get('location')!
        );
        if (!isError(result)) {
          return result;
        }
      }
    // eslint-disable-next-line no-fallthrough
    default:
      throw new Error(
        `Error uploading file: ${Log.syntaxColor({
          params,
          localFilePath,
          confirm,
          error: await confirm.json()
        })}`
      );
  }
}

type CoursePathParams =
  | v1.Courses.Files.uploadPathParameters
  | v1.Courses.Assignments.Submissions.Files.uploadPathParameters
  | v1.Courses.Quizzes.Submissions.Self.Files.uploadPathParameters;

function isCourseFile(
  params: UploadPathParameters
): params is CoursePathParams {
  return 'course_id' in params;
}

function isAssignmentSubmission(
  params: CoursePathParams
): params is v1.Courses.Assignments.Submissions.Files.uploadPathParameters {
  return 'assignment_id' in params && 'user_id' in params;
}

function isQuizSubmission(
  params: CoursePathParams
): params is v1.Courses.Quizzes.Submissions.Self.Files.uploadPathParameters {
  return 'quiz_id' in params;
}

function isFolderUpload(
  params: UploadPathParameters
): params is v1.Folders.Files.uploadPathParameters {
  return 'folder_id' in params;
}

function isGroupUpload(
  params: UploadPathParameters
): params is v1.Groups.Files.uploadPathParameters {
  return 'group_id' in params;
}
