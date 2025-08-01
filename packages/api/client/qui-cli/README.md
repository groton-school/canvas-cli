# @groton/canvas-api.client.qui-cli

Node command-line interface client for @groton/canvas-api as a @battis/qui-cli.plugin

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-api.client.qui-cli.svg)](https://www.npmjs.com/package/@groton/canvas-api.client.qui-cli)

## Install

```sh
npm install @groton/canvas-api.client.qui-cli @battis/qui-cli
```

## Usage

```ts
import { Canvas } from '@groton/canvas-api.client.qui-cli';
import CLI from '@battis/qui-cli';

// initialize client from command-line args or enviroment
await CLI.init();

// pull a paginated list of typed users from the API
for (const user of await Canvas.v1.Accounts.Users.list({
  pathParams: { account_id: 1 }
})) {
  CLI.log.info(user.name);
}
```

See [@groton/canvas-cli](https://www.npmjs.com/package/@groton/canvas-cli) for a robust working example of this client.
