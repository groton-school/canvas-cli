import { JSONValue } from '@battis/typescript-tricks';
import { Progress } from './CoursePace.js';
import { File } from './Files.js';

/**
 *
 */
export type QuizReport = {
  /**
   * the ID of the quiz report
   *
   * type: integer
   */
  id: number | string;
  /**
   * the ID of the quiz
   *
   * type: integer
   */
  quiz_id: number | string;
  /**
   * which type of report this is possible values: 'student_analysis', 'item_analysis'
   *
   *
   */
  report_type: string;
  /**
   * a human-readable (and localized) version of the report_type
   *
   *
   */
  readable_type: string;
  /**
   * boolean indicating whether the report represents all submissions or only the most recent ones for each student
   *
   * type: boolean
   */
  includes_all_versions: boolean | string;
  /**
   * boolean indicating whether the report is for an anonymous survey. if true, no student names will be included in the csv
   *
   * type: boolean
   */
  anonymous: boolean | string;
  /**
   * boolean indicating whether the report can be generated, which is true unless the quiz is a survey one
   *
   * type: boolean
   */
  generatable: boolean | string;
  /**
   * when the report was created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * when the report was last updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * the API endpoint for this report
   *
   *
   */
  url: string;
  /**
   * if the report has finished generating, a File object that represents it. refer to the Files API for more information about the format
   *
   *
   */
  file: File;
  /**
   * if the report has not yet finished generating, a URL where information about its progress can be retrieved. refer to the Progress API for more information (Note: not available in JSON-API format)
   *
   *
   */
  progress_url: string;
  /**
   * if the report is being generated, a Progress object that represents the operation. Refer to the Progress API for more information about the format. (Note: available only in JSON-API format)
   *
   *
   */
  progress: Progress;
};
