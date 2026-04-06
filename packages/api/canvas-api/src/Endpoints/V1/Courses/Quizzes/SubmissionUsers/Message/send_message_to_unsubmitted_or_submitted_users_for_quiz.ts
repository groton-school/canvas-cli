import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { QuizUserConversation } from '../../../../../../Overrides.js';

export type send_message_to_unsubmitted_or_submitted_users_for_quizPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    course_id: string | number;
    /**
     * ID
     *
     * Type: string
     */
    id: string | number;
  };

export type send_message_to_unsubmitted_or_submitted_users_for_quizSearchParameters =
  Masquerade;

export type send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters =
  Masquerade & {
    /** - Body and recipients to send the message to. */
    conversations: QuizUserConversation;
  };

type Options = (
  | {
      path: send_message_to_unsubmitted_or_submitted_users_for_quizPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: send_message_to_unsubmitted_or_submitted_users_for_quizPathParameters;
    }
) &
  (
    | {
        query?: Partial<send_message_to_unsubmitted_or_submitted_users_for_quizSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<send_message_to_unsubmitted_or_submitted_users_for_quizSearchParameters>;
        body?: Partial<send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: send_message_to_unsubmitted_or_submitted_users_for_quizSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: send_message_to_unsubmitted_or_submitted_users_for_quizSearchParameters;
          }
      ) &
        (
          | {
              body: send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: send_message_to_unsubmitted_or_submitted_users_for_quizFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Send a message to unsubmitted or submitted users for the quiz
 *
 * { "body": { "type": "string", "description": "message body of the
 * conversation to be created", "example": "Please take the quiz." },
 * "recipients": { "type": "string", "description": "Who to send the message to.
 * May be either 'submitted' or 'unsubmitted'", "example": "submitted" },
 * "subject": { "type": "string", "description": "Subject of the new
 * Conversation created", "example": "ATTN: Quiz 101 Students" } }
 *
 * Nickname: send_message_to_unsubmitted_or_submitted_users_for_quiz
 */
export async function send_message_to_unsubmitted_or_submitted_users_for_quiz(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{id}/submission_users/message`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
