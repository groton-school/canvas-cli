import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import open from 'open';
import ora from 'ora';
import { courseNavUrl } from './ExternalTool.js';

export async function enable(course: Canvas.Courses.Course) {
  const url = await courseNavUrl(course);
  /*
  Log.info(
    `Open ${Colors.url(url)} to enable Canvas Studio access from ${course.name}`
  );
  */
  const spinner = ora(
    `Open ${Colors.url(url)} to enable Canvas Studio access from ${course.name}`
  ).start();
  open(url);
  await new Promise((resolve) => {
    setTimeout(resolve, 15000);
  });
  spinner.succeed();
  /*
  while (
    !(await confirm({
      message: `Confirm that you have visited Canvas Studio from ${course.name}`
    }))
  ) {
    // ...
  }
    */
}
