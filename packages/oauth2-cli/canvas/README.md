# @oauth2-cli/canvas

Acquire Instructure Canvas access tokens via OAuth 2.0 within CLI tools

[Known Issues](https://github.com/groton-school/canvas-cli/issues?q=is%3Aissue%20state%3Aopen%20label%3A%40oauth2-cli%2Fcanvas)

## Install

```sh
npm i @oauth2-cli/canvas
```

## Usage

Configure your Canvas app credentials somewhere relatively secure (e.g. your environment) and then...

```ts
import dotenv from 'dotenv';
import { Canvas } from '@oauth2-cli/canvas';

(async () => {
  dotenv.config();
  const canvas = new Canvas({
    instance_url: 'https://example.instructure.com',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI
  });
  const me = await canvas.fetch('/users/self');
})();
```
