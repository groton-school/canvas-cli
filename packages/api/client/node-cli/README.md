# @groton/canvas-api.client.node-cli

Node command-line interface client for @groton/canvas-api

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-api.client.node-cli.svg)](https://www.npmjs.com/package/@groton/canvas-api.client.node-cli)

See [@groton/canvas-api.client.qui-cli](https://www.npmjs.com/package/@groton/canvas-api.client.qui-cli) for a somewhat more robust and easily reusable encapsulation of this client.

## Install

```sh
npm install @groton/canvas-api @groton/canvas-api.client.node-cli
```

## Usage

```ts
import * as Canvas from '@groton/canvas-api';
import { Client } from '@groton/canvas-api.client.node-cli';

// initialize the client from environment variables
Canvas.init(
  new Client({
    instance_url: process.env.INSTANCE_URL,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI
  })
);

// pull a paginated list of typed users from the API
for (const user of await Canvas.v1.Accounts.Users.list({
  pathParams: { account_id: 1 }
})) {
  console.log(user.name);
}
```
