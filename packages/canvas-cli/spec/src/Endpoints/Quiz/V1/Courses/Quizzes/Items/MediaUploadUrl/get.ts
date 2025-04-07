type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get items media_upload_url
 *
 * Get a url for uploading media for use in hot-spot question types. See the
 * hot-spot question type in the {Appendix: Question Types} for more details
 * about using this endpoint.
 *
 * Nickname: get_items_media_upload_url
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/media_upload_url`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
