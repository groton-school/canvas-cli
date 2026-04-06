import { Base } from './Base.js';

export * from './Base.js';
export * from './Masquerade.js';
export * from './Paginated.js';
export * from './UploadResponse.js';

let _client: Base | undefined = undefined;

export function init(client: Base) {
  _client = client;
}

export function client(): Base {
  if (!_client) {
    throw new Error('Client not initialized');
  }
  return _client;
}
