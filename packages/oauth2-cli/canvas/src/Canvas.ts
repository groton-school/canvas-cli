import { JSONValue } from '@battis/typescript-tricks';
import * as Base from '@groton/canvas-api.client.base';
import { isError } from '@groton/canvas-api.utilities';
import * as OAuth2 from '@oauth2-cli/qui-cli/dist/OAuth2.js';
import { Colors } from '@qui-cli/colors';
import { Env } from '@qui-cli/env-1password';
import * as Plugin from '@qui-cli/plugin';
import fs from 'node:fs';
import path from 'node:path';

export type Credentials = Omit<
  OAuth2.Credentials,
  'authorization_endpoint' | 'token_endpoint'
> & {
  instance_url: string;
  user_agent?: string;
};

type CanvasConfiguration = {
  headers?: OAuth2.Configuration['headers'];
  instance_url?: string;
  user_agent?: string;
};

export type Configuration = OAuth2.ConfigurationProposal & CanvasConfiguration;

export class Canvas extends OAuth2.OAuth2 implements Base.Base {
  public constructor(name = '@oauth2-cli/canvas') {
    super(name);
    this.configure({
      man: {
        heading: 'Canvas options'
      },
      opt: {
        clientId: 'canvasClientId',
        clientSecret: 'canvasClientSecret',
        redirectUri: 'canvasRedirectUri'
      },
      url: {
        clientId:
          'https://developerdocs.instructure.com/services/canvas/oauth2/file.oauth#oauth2-flow-0'
      },
      env: {
        clientId: 'CANVAS_CLIENT_ID',
        clientSecret: 'CANVAS_CLIENT_SECRET',
        redirectUri: 'CANVAS_REDIRECT_URI',
        tokenPath: 'CANVAS_TOKEN_PATH',
        accessToken: 'CANVAS_ACCESS_TOKEN'
      },
      suppress: {
        authorizationEndpoint: true,
        tokenEndpoint: true,
        tokenPath: true,
        accessToken: true
      }
    });
  }

  private conf: CanvasConfiguration = {
    user_agent: '@oauth2-cli/canvas (Node.js)'
  };

  public get instance_url() {
    if (this.conf.instance_url) {
      return this.conf.instance_url;
    }
    throw new Error('instance_url property undefined');
  }

  public configure({
    instance_url,
    user_agent,
    headers,
    ...proposal
  }: Configuration = {}): void {
    // Canvas authorization and token endpoints are relative to the instance URL
    if (instance_url) {
      this.conf.instance_url = instance_url;
      proposal.authorization_endpoint = path.join(
        instance_url,
        '/login/oauth2/auth'
      );
      proposal.token_endpoint = path.join(instance_url, '/login/oauth2/token');
    }

    // User-Agent header is required
    this.conf.user_agent = user_agent || this.conf.user_agent;
    if (this.conf.user_agent) {
      if (!headers) {
        headers = {};
      }
      headers['User-Agent'] = this.conf.user_agent;
    }
    super.configure({ ...proposal, headers });
  }

  public options() {
    const options = super.options();
    if (options.opt) {
      options.opt.canvasInstanceUrl = {
        description: `URL of the Canvas LMS instance to work with. Defaults to environment variable ${Colors.varName('CANVAS_INSTANCE_URL')}, if present.`,
        hint: Colors.quotedValue(`"https://example.instructure.com`),
        default: this.conf.instance_url
      };
    }
    return options;
  }

  public async init(args: Plugin.ExpectedArguments<typeof this.options>) {
    await super.init(args);
    const {
      canvasInstanceUrl: instance_url = await Env.get({
        key: 'CANVAS_INSTANCE_URL'
      }),
      ...rest
    } = args.values;
    this.configure({ instance_url, ...rest });
  }

  public fetchAs = this.fetchJSON.bind(this);

  public async upload<T extends JSONValue = JSONValue>({
    response,
    file
  }: Base.UploadParams): Promise<T> {
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
    let result: T;
    switch (confirm.status) {
      case 301:
      case 201:
        if (confirm.headers.has('location')) {
          result = await this.fetchJSON<T>(confirm.headers.get('location')!);
          if (!isError(result)) {
            return result;
          }
        }
      // eslint-disable-next-line no-fallthrough
      default:
        throw new Error(
          `Error uploading file: ${{
            file,
            confirm,
            error: await confirm.json()
          }}`
        );
    }
  }
}
