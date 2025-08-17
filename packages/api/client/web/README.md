# @groton/canvas-api.client.web

Web client for @groton/canvas-api that works with PHP package groton-school/slim-canvas-api-proxy

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-api.client.web.svg)](https://www.npmjs.com/package/@groton/canvas-api.client.web)

## Install

```sh
npm install @groton/canvas-api.client.web
```

## Usage

```ts
import { Canvas } from '@groton/canvas-api.client.web';

// initialize client (default configuration matches default configuration
// of groton-school/slim-canvas-api-proxy)
await Canvas.init();

const content = document.getElementById('content');

// pull a paginated list of typed users from the API
for (const user of await Canvas.v1.Accounts.Users.list({
  pathParams: { account_id: 1 }
})) {
  const userDisplay = document.createElement('div');
  userDisplay.innerHTML = `<img src="${user.avatar_url}"/>${user.name}`;
  content.appendChild(userDisplay);
}
```

See [groton-school/slim-skeleton's gae/lti-tool_canvas_api_proxy branch](https://github.com/groton-school/slim-skeleton/tree/gae/lti-tool_canvas-api-proxy#readme) for a working example of this client.
