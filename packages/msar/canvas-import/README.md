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
