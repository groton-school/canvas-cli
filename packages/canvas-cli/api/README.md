# @groton/canvas-cli.api

Typed access to Canvas LMS API with embedded documentation

[![npm version](https://badge.fury.io/js/@groton%2Fcanvas-cli.api.svg)](https://badge.fury.io/js/@groton%2Fcanvas-cli.api)

# Clients

This started as a component of [@groton/canvas-cli](https://www.npmjs.com/package/@groton/canvas-cli), a command-line set of administrative scripts that I have banged together. However, access to the inline documentation and IntelliSense autocompletions in a few front-end applications evolved this package into an API-only package that depends on purpose-dependent client for use:

- [@groton/canvas-cli.client.base](https://www.npmjs.com/package/@groton/canvas-cli.client.base) provides interfaces and types to be used by any implementing classes.
- [@groton/canvas-cli.client.node-cli](https://www.npmjs.com/package/@groton/canvas-cli.client.node-cli) is a client for use in Node command-line apps, which takes advantage of the [@oauth2-cli/canvas](https://www.npmjs.com/package/@oauth2-cli/canvas) to handle authentication to a Canvas LMS instance from the command-line.
- [@groton/canvas-cli.client.qui-cli](https://www.npmjs.com/package/@groton/canvas-cli.client.qui-clii) encapsulates the Node client in a [@battis/qui-cli.plugin](https://www.npmjs.com/package/@battis/qui-cli.plugin) for ease of use within that small ecosystme for rapidly developing Node command-line apps.

# Install

Using the Node client.

```sh
npm install @groton/canvas-cli.api @groton/canvas-cli.client.node-cli
```

# Usage

Again, using the Node client. See [@groton/canvas-cli](https://www.npmjs.com/package/@groton/canvas-cli) for a working example of using the `@battis/qui-cli` encapsulation.

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
  CLI.log.info(user.name);
}
```

## Mapping Canvas LMS documentation to TypeScript API

The automatically-generated documentation provided by the Canvas LMS API is automatically processed by [@groton/canvas-cli.swagger-renderer](https://github.com/groton-school/canvas-cli/tree/main/packages/canvas-cli/swagger-renderer) to generate TypeScript API.

### Resources

Resources are organized as in the [Canvas LMS API documentation](https://developerdocs.instructure.com/services/canvas/), given that they are built from the same files. For example, a [CourseProgress](https://developerdocs.instructure.com/services/canvas/file.all_resources/courses#courseprogress) object is typed:

```ts
let progress: Canvas.Courses.CourseProgress;
```

…noting that, for all objects:

- `Sentence case` and `snake_case` object names are all converted to `CamelCase`.
- Properties remain unchanged in `snake_case`.
- All namespaces are capitalized, and properties are lower-case per TypeScript norms.

### Endpoints

In general, the endpoints map to method calls that are predictably named. For example, [listing subgroups of outcome groups](https://developerdocs.instructure.com/services/canvas/file.all_resources/outcome_groups#method.outcome_groups_api.subgroups):

```http
GET /api/v1/accounts/{account_id}/outcome_groups/{id}/subgroups
```

…is handled by:

```ts
await Canvas.v1.Accounts.OutcomeGroups.Subgroups.list({
  pathParams: {
    account_id: 123,
    id: 456
  },
  searchParams: {
    as_user_id: 789,
    per_page: 20
  }
});
```

…in which:

- `snake_case` becomes `CamelCase` for namespaces and objects and `pascalCase` for methods.
- Method names are shortened from their nicknames (`list_subgroups_accounts`) to remove redundancies in the TypeScript API.
- All method calls are asynchronous.
- Path parameters are passed as properties of the `pathParams` property, search/query parameters are passed as properties of the `searchParams` property, and body/form parameters are passed as properties of the `params` property.
- Methods that upload files also require a `file` property, which may have either a `filePath` property or a `url` property. (Not all clients support both local and URL uploads).
- All methods support masquerading via the `as_user_id` parameter passed as either in `searchParams` or the body `params` (if available).
- Methods that return paginated responses can adjust the pagination via `per_pages` and will return the complete list as a result of the method.

## Caution regarding `===` comparisons

Note that, in order to provide data integrity in JavaScript, per [Instructure's note](https://developerdocs.instructure.com/services/canvas#schema) about large numbers in that language, [I have introduced some type ambiguity into the model](https://github.com/groton-school/canvas-cli/commit/6fb8af754e7d0e540bb2ad783d8ed763ac71a908), which has ramifications for value tests:

_Because numerical values may be represented as **either** strings or numbers, be very, very cautious about using `===` comparisons, which will fail when comparing a number to an equivalent string._

# Known Issues

This is under steady development, as it underpins my own administrative and user-facing Canvas LMS tools. [Known issues are documented in the GitHub repo.](https://github.com/groton-school/canvas-cli/labels/%40groton%2Fcanvas-cli)

Be aware that, due to eccentricities in the documentation of the Canvas LMS API, a number of the typing decisions have been manually overriden to provide empirically more accurate type definitions. This work is on-going and incomplete (and should end up in a pull request to the LMS repo).

[`overrides.json`](https://github.com/groton-school/canvas-cli/blob/main/packages/canvas-cli/api/overrides.json) documents these eccentricities, is supported by [`src/Overrides.ts`]() and is processed by [@groton/canvas-cli.swagger-renderer](https://github.com/groton-school/canvas-cli/tree/main/packages/canvas-cli/swagger-renderer) to generate the contents of [`src/Resources/`](https://github.com/groton-school/canvas-cli/tree/main/packages/canvas-cli/api/src/Resources) and [`src/Endpoints/`](https://github.com/groton-school/canvas-cli/tree/main/packages/canvas-cli/api/src/Endpoints).
