# @groton/canvas-cli.utilities

Utility functions to support @groton/canvas-cli.api and its clients

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-cli.utilities.svg)](https://www.npmjs.com/package/@groton/canvas-cli.utilities)

## Install

```sh
npm install @groton/canvas-cli.utilities
```

## Usage

```ts
import * as Canvas from '@groton/canvas-cli.api';
import * as Utilities from '@groton/canvas-cli.utilities';

// ...
// Canvas API initialization, etc.
// ...

// identify an API response as an error
const response = await Canvas.v1.Accounts.get({ pathParams: { id: 123 } });
if (Utilities.isError(response)) {
  // handle error
}

// stringify a complex object into a (Canvas-friendly) URL query string
const query: string = Utilities.stringify({
  assignment: {
    name: 'example',
    submission_types: ['online_upload', 'online_text_entry'],
    due_at: new Date('9/1/25 8:00 am').toISOString()
  }
});

// recursively flatten a complex object into a configurable URL query string
// (stringify() uses flatten()'s defaults)
const flattened: string = Utilities.flatten({
  assignment: {
    name: 'example',
    submission_types: ['online_upload', 'online_text_entry'],
    due_at: new Date('9/1/25 8:00 am').toISOString()
  },
  undefined, // accumulated parameter key string
  undefined, // accumulated result string[]
  true // use numeric indices for array parameterss
});

```
