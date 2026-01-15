import { init } from '@groton/canvas-api';
import * as OAuth2 from '@oauth2-cli/qui-cli/dist/OAuth2.js';
import { Colors } from '@qui-cli/colors';
import { Env } from '@qui-cli/env-1password';
import * as Plugin from '@qui-cli/plugin';
import path from 'node:path';
import { Client } from './Client.js';

export {
  EnvironmentStorage,
  FileStorage,
  TokenStorage
} from '@oauth2-cli/qui-cli/dist/OAuth2.js';
export * from './Client.js';

type CanvasConfiguration = {
  instance_url?: string;
  user_agent?: string;
};

export type Configuration = OAuth2.ConfigurationProposal & CanvasConfiguration;

export class CanvasPlugin extends OAuth2.OAuth2Plugin<Client> {
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

  protected instantiateClient(credentials: OAuth2.Credentials) {
    if (!this.conf.instance_url) {
      throw new Error('Instance URL has not been defined.');
    }
    if (!this.conf.user_agent) {
      throw new Error('User agent has not been defined.');
    }
    return new Client({
      instance_url: this.conf.instance_url,
      user_agent: this.conf.user_agent,
      ...credentials
    });
  }

  public configure({
    instance_url,
    user_agent,
    ...proposal
  }: Configuration = {}): void {
    // Canvas authorization and token endpoints are relative to the instance URL
    if (instance_url) {
      this.conf.instance_url = instance_url;
      proposal.authorizationEndpoint = path.join(
        instance_url,
        '/login/oauth2/auth'
      );
      proposal.tokenEndpoint = path.join(instance_url, '/login/oauth2/token');
      if (user_agent) {
        this.conf.user_agent = user_agent;
      }
    }
    super.configure(proposal);
  }

  public options() {
    const options = super.options();
    if (options.opt) {
      options.opt.canvasInstanceUrl = {
        description: `URL of the Canvas LMS instance to work with. Defaults to environment variable ${Colors.varName('CANVAS_INSTANCE_URL')}, if present.`,
        short: 'i',
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
    init(this.getClient());
  }
}
