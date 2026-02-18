# @msar/canvas-import

[![npm version](https://badge.fury.io/js/@msar%2Fcanvas-import.svg)](https://www.npmjs.com/package/@msar/canvas-import)

[Known Issues](https://github.com/groton-school/canvas-cli/issues?q=is%3Aissue%20state%3Aopen%20label%3A%40msar%2Fcanvas-import)

## Notes

- Assignments --> Assignments
  - Assignment Types --> Assignment Groups (assignments without types are put in the "Assignments" assignment group)
  - Rubrics --> Rubrics
- Bulletin Board --> Page (set to front page, with default course view defaulting to Pages)
  - RSS Reader --> Announcements External Feed (not shown on Bulletin Board page)
  - Photo Album --> Page (with original widget replaced with cover image and caption and link to page)
- Topic --> Page
  - Photo Album --> Page (with original widget replaced with cover image and caption and link to page)
- All files uploaded to `Imported Files` subfolder of course files
  - Files are de-duped before being uploaded, preferring images with `orig` or `large` in their filename if duplicates are encountered

## Usage:

```bash
  canvas-import -h --o=<outputPath> --ignoreErrors --logRequests --commands --silent --logging --pretty --assignments --bulletinBoard --topics --skipTeacherless --logFilePath=<logFilePath> --stdoutLevel=<all|trace|debug|info|warning|error|fatal|off> --fileLevel=<all|trace|debug|info|warning|error|fatal|off> --opAccount=<example.1password.com> --opItem=<1Password unique identifier> --opToken=<token value> --blackbaudInstanceId=<###> --termsPath=<"path/to/terms.csv"> --departmentAccountMapPath=<"path/to/dept-acct-map.csv"> --coursesWithDepartmentsPath=<"path/to/courses-dept.csv"> --sisIdMapPath=<"path/to/sis-id-map.csv"> --duplicates=<overwrite|update|reset|skip> --skipTo=<skipTo> snapshotPath
```

## Arguments

#### `-h --help`

Get usage information

### Workflow behavior options

#### `--ignoreErrors`

Continue run even if errors are encountered (Default: true, use --no-ignoreErrors to disable)

#### `--logRequests`

Log fetch requests and responses for analysis and debugging (Default: false)

### Logging options

#### `--logFilePath=<logFilePath>`

Path to log file (optional)

#### `--stdoutLevel=<all|trace|debug|info|warning|error|fatal|off>`

Log level to console stdout (Default: "info")

#### `--fileLevel=<all|trace|debug|info|warning|error|fatal|off>`

Log level to log file if --logFilePath provided (Default: "all")

#### `--commands`

Include shell commands in log (Default: true, use --no-commands to disable)

#### `--silent`

Hide command output (Default: false)

#### `--logging`

Log commands and output at level debug (Default: true, use --no-logging to disable)

### 1Password environment integration

If 1Password secret references are stored in the environment, a 1Password service account token is required to access the secret values.

#### `--opAccount=<example.1password.com>`

1Password account to use (if signed into multiple); will use environment variable OP_ACCOUNT if present

#### `--opItem=<1Password unique identifier>`

Name or ID of the 1Password API Credential item storing the 1Password service account token; will use environment variable OP_ITEM if present. Requires the 1Password CLI tool (https://developer.1password.com/docs/cli)

#### `--opToken=<token value>`

1Password service account token; will use environment variable OP_TOKEN if present

### Output options

#### `-o<outputPath> --outputPath=<outputPath>`

Path to output directory or file to save command output, will use the value in environment variable OUTPUT_PATH if present

#### `--pretty`

Pretty print output to file (if --outputPath option is used)

### Canvas options

The OpenID issuer URL is set from the environment variable CANVAS_ISSUER, if present. The CANVAS_ISSUER is also used as a base URL for any relative URL in API requests, unless BASE_URL is defined. (e.g. "https://example.instructure.com")

The OAuth 2.0 client_id is set from the environment variable CANVAS_CLIENT_ID, if present. See https://developerdocs.instructure.com/services/canvas/oauth2/file.oauth#oauth2-flow-0 for more information.

The OAuth 2.0 client_secret is set from the environment variable CANVAS_CLIENT_SECRET, if present.

The OAuth 2.0 redirect_uri, which must at least redirect to localhost, is set from the environment variable CANVAS_REDIRECT_URI, if present. (e.g. "http://localhost:3000/redirect")

Once authorized, the app will store the Canvas refresh token for reuse in the local environment as CANVAS_REFRESH_TOKEN.

### Canvas Studio options

The OpenID issuer URL is set from the environment variable STUDIO_ISSUER, if present. The STUDIO_ISSUER is also used as a base URL for any relative URL in API requests, unless BASE_URL is defined. (e.g. "https://example.instructuremedia.com")

The OAuth 2.0 client_id is set from the environment variable STUDIO_CLIENT_ID, if present.

The OAuth 2.0 client_secret is set from the environment variable STUDIO_CLIENT_SECRET, if present.

The OAuth 2.0 redirect_uri, which must at least redirect to localhost, is set from the environment variable STUDIO_REDIRECT_URI, if present. (e.g. "http://localhost:3000/redirect")

Once authorized, the app will store the Canvas Studio refresh token for reuse in the local environment as STUDIO_REFRESH_TOKEN.

### Import options

#### `--assignments`

Create assignments (Default: true, use --no-assignments to disable)

#### `--bulletinBoard`

Create bulletin board (Default: true, use --no-bulletinBoard to disable)

#### `--topics`

Create topics (Default: true, use --no-topics to disable)

#### `--skipTeacherless`

Include sections that have no teachers (likely community groups) (Default: true, use --no-skipTeacherless to disable)

#### `--blackbaudInstanceId=<###>`

MySchoolApp instance identifier, may be inferred by OneRoster sourcedId values, where the first numeric component is the instance identifier (e.g. cls-123-12345678 identifies the instance ID as 123). Defaults to environment variable BLACKBAUD_INSTANCE_ID, if present.

#### `--termsPath=<"path/to/terms.csv">`

Path to All Terms CSV file, must contain at least Term ID, Length, term_id, name columns, where Term ID and Length are Blackbaud term/duration IDs and Length is a duration (number of terms) and term_id and name are as defined in the https://developerdocs.instructure.com/services/canvas/sis/file.sis_csv#terms.csv. Defaults to environment variable TERMS_CSV, if present.

#### `--departmentAccountMapPath=<"path/to/dept-acct-map.csv">`

Path to Department Account Map CSV file, must contain at least Department Id and Canvas Account ID columns which refer to a Blackbaud academic department ID value and a Canvas sub-account ID respectively. Defaults to environment variable DEPARTMENT_ACCOUNT_MAP_CSV, if present.

#### `--coursesWithDepartmentsPath=<"path/to/courses-dept.csv">`

Path to Courses with Departments CSV file, must contain at least Course ID and Department ID, referring to Blackbaud course and academic department ID values. Defaults to environment variable COURSES_WITH_DEPARTMENTS_CSV, if present.

#### `--sisIdMapPath=<"path/to/sis-id-map.csv">`

Optional path to SIS ID Map CSV file, must contain at least AssociationId column and optionally either or both prefix and SIS Account ID columns. Used for generating custom SIS course IDs and assigning courses to sub-account by department. The default prefix is cls and the departments are mapped at --departmentAccountMapPath. AccountId values are interpreted here: https://github.com/groton-school/msar/blob/7bf001d100b25e5c9c5d23cf765f85cfb5d3c6a4/packages/datadirect/src/api/datadirect/SectionInfoView/Response.ts#L8-L21. Defaults to environment variable SIS_ID_MAP_CSV, if present.

#### `--duplicates=<overwrite|update|reset|skip>`

Specify a duplicate course handling option

#### `--skipTo=<n>`

Skip forward to a specific Group ID in the snapshot index
