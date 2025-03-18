import '@battis/qui-cli.env';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import * as Snapshot from '../Snapshot/index.js';

type Options = {
  course: Canvas.Courses.Model;
  section: Imported.Data;
};

export async function importBulletinBoard({ course, section }: Options) {
  if (section.BulletinBoard) {
    const args = await Snapshot.PodiumPage.toCanvasArgs({
      course,
      title: 'Bulletin Board',
      body: section.BulletinBoard,
      layout: section.SectionInfo?.LayoutId || 0,
      front_page: true
    });
    const frontPage = await Canvas.Pages.create({ course, args });
    if (frontPage) {
      section.front_page = {
        id: frontPage.page_id,
        args,
        created_at: frontPage.created_at
      };
    }
  }
}

export async function importTopics({ course, section }: Options) {
  if (section.Topics) {
    for (const topic of section.Topics) {
      const args = await Snapshot.PodiumPage.toCanvasArgs({
        course,
        title: topic.Name,
        body: topic.Content || [],
        layout: topic.LayoutId
      });
      const canvasTopic = await Canvas.Pages.create({
        course,
        args
      });
      topic.canvas = {
        id: canvasTopic.page_id,
        blackbaud_id: topic.TopicId,
        args,
        created_at: canvasTopic.created_at
      };
    }
  }
}
