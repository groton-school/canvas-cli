import { Credentials, SkyAPI } from '@oauth2-cli/sky-api';

let _sky: SkyAPI | undefined = undefined;

export function init(credentials: Credentials) {
  _sky = new SkyAPI(credentials);
}

export function sky() {
  if (!_sky) {
    throw new Error(`SKY API client has not been initialized`);
  }
  return _sky;
}
