# @groton/canvas-api Clients

Provided client implementations for [@groton/canvas-api](../api#readme)

- [@groton/canvas-api.client.base](./base#readme) provides interfaces and types to be used by any implementing packages.
- [@oauth2-cli/canvas](../../oauth2-cli/canvas#readme) is a client for use in Node command-line apps, which takes advantage of the [oauth2-cli](https://www.npmjs.com/package/oauth2-cli) to handle authentication to a Canvas LMS instance from the command-line, provides an easy-to-work-with `Canvas` object to call the API endpoints through, and can be used as a [@qui-cli/plugin](https://npmjs.com/package/@qui-cli/plugin) when building a CLI tool.
- [@groton/canvas-api.client.web](./web#readme) pairs with [groton-school/slim-canvas-api-proxy](https://packagist.org/packages/groton-school/slim-canvas-api-proxy) to support making browser-based calls to the Canvas LMS API (for example, as part of [an LTI tool](https://github.com/groton-school/planner-lti)).
