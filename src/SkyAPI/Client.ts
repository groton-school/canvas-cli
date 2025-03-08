import { SkyAPI } from '@oauth2-cli/sky-api';

let _sky: SkyAPI | undefined = undefined;

export function init(options: ConstructorParameters<typeof SkyAPI>[0]) {
  _sky = new SkyAPI({ ...options, store: './var/sky.json' });
}

export function sky() {
  if (!_sky) {
    throw new Error(`Sky API has not been initialized`);
  }
  return _sky;
}
