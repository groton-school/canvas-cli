import * as Client from "@groton/canvas-cli.client.base";

let _client: Client.Base | undefined = undefined;

export function init(client: Client.Base) {
  _client = client;
}

export function client(): Client.Base {
  if (!_client) {
    throw new Error("Client not initialized");
  }
  return _client;
}
