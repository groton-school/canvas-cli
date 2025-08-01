# @groton/canvas-api.swagger-renderer

Render Canvas LMS Swagger 1.0 API documentation as TypeScript client

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-api.swagger-renderer.svg)](https://www.npmjs.com/package/@groton/canvas-api.swagger-renderer)

## Install

```sh
npm install @groton/canvas-api.swagger-renderer
```

## Usage

See all options:

```sh
swagger-renderer --help
```

Download API documentation (to `./spec/` by default):

```sh
swagger-renderer download --instanceUrl "https://example.instructure.com"
```

Render downloaded spec (from `./spec/` and to `./src/Resources/` and `./src/Endpoints/` by default):

```sh
swagger-renderer render
```

See [@groton/canvas-api's scripts](https://github.com/groton-school/canvas-cli/blob/main/packages/api/canvas-api/package.json) for an example use.

## Annotation

`swagger-renderer` analyzes the provided Swagger specification and annotates it before using those annotations to render the actual TypeScript source code. The annotations can be output to `./src/map.json` as part of the rendering process.

```sh
swagger-renderer render --map
```

The annotation types are defined in [./src/Render/Annotation.ts](https://github.com/groton-school/canvas-cli/blob/main/packages/api/swagger-renderer/src/Render/Annotation.ts) and [./src/Render/TSAnnotation.ts](https://github.com/groton-school/canvas-cli/blob/main/packages/api/swagger-renderer/src/Render/TSAnnotation.ts). These annotation types are useful to understand when defining overrides.

## Overrides

Due to eccentricities in the documentation of the Canvas LMS API, it is desireable to override the automated specification in a number of respects. See [@groton/canvas-api's known issues](https://github.com/groton-school/canvas-cli/tree/main/packages/api/canvas-api#known-issues) for discussion of a real-world example.

Overrides for `swagger-renderer` are defined in a JSON file. The object has three main properties.

### `tsReferences`

These provide specific reference information for otherwise ambiguous types. Usually the reference information follows the pattern:

```json
{
  "tsReferences": [
    {
      "type": "Account",
      "filePath": "Resources/Accounts.ts"
    }
  ]
}
```

### `tsTypes`

The `tsTypes` property is a hash of type values provided in the Swagger specification to TypeScript type definitions (defined using the [annotation](#annotation) syntax).

```json
{
  "tsTypes": {
    "Positive Integer": {
      "type": "number"
    },
    "Integer": {
      "type": "number"
    },
    "DateTime": {
      "type": "string",
      "description": "format: date-time"
    },
    "object": {
      "type": "JSONObject",
      "tsReferences": [
        {
          "type": "JSONObject",
          "packagePath": "@battis/typescript-tricks"
        }
      ]
    }
  }
}
```

### `operations`

The `operations` property is a hash of Swagger specification operation nicknames and [`Partial<AnnotatedOperation>`](https://github.com/groton-school/canvas-cli/blob/main/packages/api/swagger-renderer/src/Render/Annotation.ts) definitions to supplement or replace missing or deficient documentation.

```json
{
  "operations": {
    "edit_assignment": {
      "tsFormParameters": [
        {
          "tsName": "\"assignment[submission_types]\"",
          "description": "Only applies if the assignment doesn't have student submissions.\n\nList of supported submission types for the assignment.\nUnless the assignment is allowing online submissions, the array should\nonly have one element.\n\nIf not allowing online submissions, your options are:\n  \"online_quiz\"\n  \"none\"\n  \"on_paper\"\n  \"discussion_topic\"\n  \"external_tool\"\n\nIf you are allowing online submissions, you can have one or many\nallowed submission types:\n\n  \"online_upload\"\n  \"online_text_entry\"\n  \"online_url\"\n  \"media_recording\" (Only valid when the Kaltura plugin is enabled)\n  \"student_annotation\"",
          "tsOptional": "?",
          "tsType": {
            "type": "('online_quiz'|'none'|'on_paper'|'discussion_topic'|'external_tool'|'online_upload'|'online_text_entry'|'online_url'|'media_recording'|'student_annotation')[]"
          }
        }
      ]
    }
  }
}
```
