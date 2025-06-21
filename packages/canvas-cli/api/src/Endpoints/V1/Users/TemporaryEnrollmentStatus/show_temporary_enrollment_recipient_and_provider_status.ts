import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type show_temporary_enrollment_recipient_and_provider_statusPathParameters =
  {
    /** ID */
    user_id: string;
  };

export type show_temporary_enrollment_recipient_and_provider_statusSearchParameters =
  Masquerade &
    Partial<{
      /**
       * The ID of the account to check for temporary enrollment status. Defaults
       * to the domain root account if not provided.
       */
      account_id: string;
    }>;

type Options = {
  pathParams: show_temporary_enrollment_recipient_and_provider_statusPathParameters;
} & (
  | {
      searchParams?: Partial<show_temporary_enrollment_recipient_and_provider_statusSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_temporary_enrollment_recipient_and_provider_statusSearchParameters;
      strict: true;
    }
);

/**
 * Show Temporary Enrollment recipient and provider status
 *
 * Returns a JSON Object containing the temporary enrollment status for a user.
 *
 * Nickname: show_temporary_enrollment_recipient_and_provider_status
 */
export async function show_temporary_enrollment_recipient_and_provider_status(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/temporary_enrollment_status`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
