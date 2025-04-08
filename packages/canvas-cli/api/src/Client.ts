import * as Canvas from '@groton/canvas-cli.client';

let _client: Canvas.Client | undefined = undefined;

export function init(...args: ConstructorParameters<typeof Canvas.Client>) {
  _client = new Canvas.Client(...args);
}

export function client() {
  if (!_client) {
    if (
      process.env.CANVAS_CLIENT_ID &&
      process.env.CANVAS_CLIENT_SECRET &&
      process.env.CANVAS_INSTANCE_URL &&
      process.env.CANVAS_REDIRECT_URI
    ) {
      init({
        client_id: process.env.CANVAS_CLIENT_ID,
        client_secret: process.env.CANVAS_CLIENT_SECRET,
        instance_url: process.env.CANVAS_INSTANCE_URL,
        redirect_uri: process.env.CANVAS_REDIRECT_URI,
        store: process.env.CANVAS_TOKEN_STORE
      });
    }
    if (!_client) {
      throw new Error(`Canvas client has not been initialized`);
    }
  }
  return _client;
}
