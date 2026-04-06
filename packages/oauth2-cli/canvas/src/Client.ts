import { JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-api';
import * as OAuth2 from '@oauth2-cli/qui-cli/extendable/index.js';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import fs from 'node:fs';
import * as requestish from 'requestish';

export type Credentials = OAuth2.Credentials & { issuer: requestish.URL.ish };

export class Client
  extends OAuth2.Client<Credentials>
  implements Canvas.Client.Base
{
  public get instance_url() {
    if (!this.credentials.issuer) {
      throw new Error(
        `The Canvas client requires an ${Colors.varName('issuer')} URL.`
      );
    }
    return requestish.URL.toString(this.credentials.issuer);
  }

  public constructor(options: OAuth2.Options<Credentials>) {
    super(options);
  }

  public async fetchAs<T extends JSONValue = JSONValue>(
    endpoint: string,
    { method, ...params }: Canvas.Client.Init = {}
  ): Promise<T> {
    return Canvas.Client.fetchAllPages<T>({
      endpoint,
      instance_url: this.instance_url,
      ...params,
      init: { method },
      accessToken: async () => (await this.getToken())?.access_token,
      fetch: (endpoint, init) => {
        // @ts-expect-error 2345
        return this.fetch(endpoint, {
          ...init,
          headers: { ...init?.headers, Authorization: undefined }
        });
      }
    });
  }

  public async upload<T extends JSONValue = JSONValue>({
    response,
    file
  }: Canvas.Client.UploadParams): Promise<T> {
    const body = new FormData();
    for (const key in response.upload_params) {
      body.append(key, response.upload_params[key]);
    }
    if (file.filePath) {
      body.append('file', await fs.openAsBlob(file.filePath));
    } else if (file.url) {
      // FIXME implement URL upload too!
    }
    const confirm = await fetch(response.upload_url, {
      method: 'POST',
      body
    });
    Log.debug({
      confirm: {
        ok: confirm.ok,
        status: confirm.status,
        statusText: confirm.statusText,
        headers: Object.fromEntries(confirm.headers.entries()),
        body: await confirm.text()
      }
    });
    let result: T;
    switch (confirm.status) {
      case 301:
      case 201:
        if (confirm.headers.has('location')) {
          result = await this.fetchJSON<T>(confirm.headers.get('location')!);
          if (!Canvas.Utilities.isError(result)) {
            return result;
          }
        }
      // eslint-disable-next-line no-fallthrough
      default:
        throw new Error(`Error uploading file`, {
          cause: {
            file,
            ...response,
            confirm,
            error: await confirm.json()
          }
        });
    }
  }
}
