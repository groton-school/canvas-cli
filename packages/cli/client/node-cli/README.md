# @groton/canvas-cli.client.node-cli

Node command-line interface client for @groton/canvas-cli.api

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-cli.client.node-cli.svg)](https://www.npmjs.com/package/@groton/canvas-cli.client.node-cli)

See [@groton/canvas-cli.client.qui-cli](https://www.npmjs.com/package/@groton/canvas-cli.client.qui-cli) for a somewhat more robust and easily reusable encapsulation of this client.

## Install

```sh
npm install @groton/canvas-cli.api @groton/canvas-cli.client.node-cli
```

## Usage

```ts
import * as Canvas from '@groton/canvas-cli.api';
import { Client } from '@groton/canvas-cli.client.node-cli';

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
