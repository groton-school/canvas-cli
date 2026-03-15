import { Canvas } from '@oauth2-cli/canvas';

let studio: Canvas.ExternalTools.ContextExternalTool | undefined = undefined;
export async function get() {
  if (!studio) {
    studio = (
      await Canvas.v1.Accounts.ExternalTools.list({
        pathParams: { account_id: 1 },
        searchParams: { search_term: 'Canvas Studio' }
      })
    ).shift();
  }
  if (!studio) {
    throw new Error('Cannot determine installed Canvas Studio instance');
  }
  return studio;
}

export async function globalNavUrl() {
  const tool = await get();
  return `${Canvas.plugin.client.instance_url}/accounts/1/external_tools/${tool.id}?launch_type=global_navigation&toolId=studio-${tool.id}`;
}

export async function courseNavUrl(course: Canvas.Courses.Course) {
  const tool = await get();
  return `${Canvas.plugin.client.instance_url}/courses/${course.id}/external_tools/${tool.id}?`;
}
