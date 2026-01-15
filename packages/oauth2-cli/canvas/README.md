# @oauth2-cli/canvas

Acquire Instructure Canvas access tokens via OAuth 2.0 within CLI tools

[Known Issues](https://github.com/groton-school/canvas-cli/issues?q=is%3Aissue%20state%3Aopen%20label%3A%40oauth2-cli%2Fcanvas)

## Install

```sh
npm i @oauth2-cli/canvas @qui-cli/core
```

## Usage

```ts
import { Canvas } from '@oauth2-cli/canvas';
import { Core } from '@qui-cli/core';

await Core.run();
console.log(
  await Canvas.v1.Users.Profile.get({ pathParams: { user_id: 'self' } })
);
```
