import { confirm, select } from '@inquirer/prompts';
import { Canvas } from '@oauth2-cli/canvas';
import { CanvasStudio } from '@oauth2-cli/canvas-studio';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import open from 'open';
import { getUser } from '../Workspace.js';
import { globalNavUrl } from './ExternalTool.js';

let studioUser: CanvasStudio.User.User | undefined = undefined;

export async function get(user?: Canvas.Users.User) {
  if (!studioUser) {
    const result = await CanvasStudio.v1.users.search({
      query: { email: (user || (await getUser())).email }
    });
    if (result.users.length === 1) {
      studioUser = result.users.shift();
    } else if (result.users.length === 0) {
      await enable(await getUser());
      studioUser = (
        await CanvasStudio.v1.users.search({
          query: { email: (await getUser()).email }
        })
      ).users.shift();
    } else {
      studioUser = (
        await CanvasStudio.v1.users.get({
          path: {
            user_id: await select({
              message: 'Choose a user to own imported videos',
              choices: result.users.map((u) => ({
                name: u.display_name,
                value: u.id
              }))
            })
          }
        })
      ).user;
    }
  }
  if (!studioUser) {
    throw new Error('Canvas Studio owner user could not be found');
  }
  return studioUser;
}

export async function enable(user: Canvas.Users.User) {
  const masqueradeUrl = `${Canvas.plugin.client.instance_url}/users/${user.id}/masquerade`;
  Log.info(
    `Open ${Colors.url(masqueradeUrl)} in a browser to masquerade as ${user.name}`
  );
  open(masqueradeUrl);
  while (
    !(await confirm({
      message: `Confirm that you are masquerading as ${user.name}`
    }))
  ) {
    // ...
  }
  const url = await globalNavUrl();
  Log.info(
    `Open ${Colors.url(url)} to enable Canvas Studio access for ${user.name}`
  );
  open(url);
  while (
    !(await confirm({
      message: `Confirm that you have visited Canvas Studio as ${user.name}`
    }))
  ) {
    // ...
  }
}
