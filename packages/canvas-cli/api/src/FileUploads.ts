import { URLString } from '@battis/descriptive-types';
import { Log } from '@battis/qui-cli.log';
import { isError } from '@groton/canvas-cli.client/dist/Utilities/isError.js';
import fetch, { fileFromSync, FormData } from 'node-fetch';
import fs from 'node:fs';
import { client } from './Client.js';
import * as Endpoints from './Endpoints/index.js';
import * as Resources from './Resources/index.js';

type UploadOptions = {
  pathParams: UploadPathParameters;
  params: UploadFormParameters;
  localFilePath: string;
};

type UploadPathParameters =
  | Endpoints.V1.Courses.Assignments.Submissions.Files.uploadPathParameters
  | Endpoints.V1.Courses.Files.uploadPathParameters
  | Endpoints.V1.Courses.Quizzes.Submissions.Self.Files.uploadPathParameters
  | Endpoints.V1.Folders.Files.uploadPathParameters
  | Endpoints.V1.Groups.Files.uploadPathParameters
  | Endpoints.V1.Users.Files.uploadPathParameters;

type UploadFormParameters =
  | Endpoints.V1.Courses.Assignments.Submissions.Files.uploadFormParameters
  | Endpoints.V1.Courses.Files.uploadFormParameters
  | Endpoints.V1.Courses.Quizzes.Submissions.Self.Files.uploadFormParameters
  | Endpoints.V1.Folders.Files.uploadFormParameters
  | Endpoints.V1.Groups.Files.uploadFormParameters
  | Endpoints.V1.Users.Files.uploadFormParameters;

export type UploadResponse = {
  upload_url: URLString;
  upload_params: {
    key: string;
    [param: string]: string;
  };
};

/** TODO expand capability to upload to account or user files as well */
export async function upload({
  pathParams,
  localFilePath,
  params
}: UploadOptions) {
  params.size = fs.statSync(localFilePath).size;
  let next: UploadResponse;
  if (isCourseFile(pathParams)) {
    if (isAssignmentSubmission(pathParams)) {
      next = await Endpoints.V1.Courses.Assignments.Submissions.Files.upload({
        pathParams,
        params
      });
    } else if (isQuizSubmission(pathParams)) {
      next = await Endpoints.V1.Courses.Quizzes.Submissions.Self.Files.upload({
        pathParams,
        params
      });
    } else {
      next = await Endpoints.V1.Courses.Files.upload({ pathParams, params });
    }
  } else if (isFolderUpload(pathParams)) {
    next = await Endpoints.V1.Folders.Files.upload({ pathParams, params });
  } else if (isGroupUpload(pathParams)) {
    next = await Endpoints.V1.Groups.Files.upload({ pathParams, params });
  } else {
    next = await Endpoints.V1.Users.Files.upload({ pathParams, params });
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
  let result: Resources.File;
  switch (confirm.status) {
    case 301:
    case 201:
      if (confirm.headers.has('location')) {
        result = await client().fetchAs<Resources.File>(
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
  | Endpoints.V1.Courses.Files.uploadPathParameters
  | Endpoints.V1.Courses.Assignments.Submissions.Files.uploadPathParameters
  | Endpoints.V1.Courses.Quizzes.Submissions.Self.Files.uploadPathParameters;

function isCourseFile(
  params: UploadPathParameters
): params is CoursePathParams {
  return 'course_id' in params;
}

function isAssignmentSubmission(
  params: CoursePathParams
): params is Endpoints.V1.Courses.Assignments.Submissions.Files.uploadPathParameters {
  return 'assignment_id' in params && 'user_id' in params;
}

function isQuizSubmission(
  params: CoursePathParams
): params is Endpoints.V1.Courses.Quizzes.Submissions.Self.Files.uploadPathParameters {
  return 'quiz_id' in params;
}

function isFolderUpload(
  params: UploadPathParameters
): params is Endpoints.V1.Folders.Files.uploadPathParameters {
  return 'folder_id' in params;
}

function isGroupUpload(
  params: UploadPathParameters
): params is Endpoints.V1.Groups.Files.uploadPathParameters {
  return 'group_id' in params;
}
