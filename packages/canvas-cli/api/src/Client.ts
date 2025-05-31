import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-cli.client';

export interface Client {
  instance_url: string;
  fetchAs<T = JSONValue>(
    endpoint: string | URL,
    params?: {
      pathParams: Record<string, string | number>;
      searchParams: JSONObject;
      params: JSONObject;
    }
  ): Promise<T>;
}

function isClient(obj: object): obj is Client {
  return 'fetchAs' in obj;
}

let _client: Client | undefined = undefined;

export function init(client: Client): void;
export function init(oauth2Credentials: Canvas.Credentials): void;
export function init(arg: Canvas.Credentials | Client) {
  if (isClient(arg)) {
    _client = arg;
  } else {
    _client = new Canvas.Client(arg);
  }
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
