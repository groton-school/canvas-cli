import { Canvas } from '@oauth2-cli/canvas';
import { CanvasStudio } from '@oauth2-cli/canvas-studio';
import { EventEmitter } from 'events';

const AWAITING = true;

const cache: Record<
  string,
  Record<string, Canvas.Files.File | CanvasStudio.Media.Media | typeof AWAITING>
> = {};

const ready = new EventEmitter();
ready.setMaxListeners(1000);

export async function get(
  course_id: string,
  localPath: string,
  uploader: () => Promise<Canvas.Files.File | CanvasStudio.Media.Media>
): Promise<Canvas.Files.File | CanvasStudio.Media.Media> {
  if (!(course_id in cache)) {
    cache[course_id] = {};
  }
  if (localPath in cache[course_id]) {
    if (cache[course_id][localPath] === AWAITING) {
      return new Promise((resolve) => {
        ready.on(`${course_id}:${localPath}`, () =>
          resolve(cache[course_id][localPath] as Canvas.Files.File)
        );
      });
    }
    return cache[course_id][localPath] as Canvas.Files.File;
  } else {
    cache[course_id][localPath] = AWAITING;
    cache[course_id][localPath] = await uploader();
    ready.emit(`${course_id}:${localPath}`);
    return cache[course_id][localPath] as Canvas.Files.File;
  }
}
