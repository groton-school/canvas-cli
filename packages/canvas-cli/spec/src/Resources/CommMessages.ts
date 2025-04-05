export type CommMessage = {
  /**
   * The ID of the CommMessage.
   *
   * Type: integer
   */
  id: number;
  /**
   * The date and time this message was created
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The date and time this message was sent
   *
   * Format: 'date-time'
   */
  sent_at: string;
  /**
   * The workflow state of the message. Possible values: 'created' : The message
   * has been created, but not yet processed. 'staged' : The message is queued
   * for sending. 'sending' : The message is being sent currently. 'sent' : The
   * message has been successfully sent. 'bounced' : An error occurred during
   * the sending of the message.'dashboard' : The message has been sent to the
   * dashboard. 'closed' : The message has been sent and closed, typically for
   * dashboard messages or messages sent to deleted users. 'cancelled' : The
   * message was cancelled before it could be sent.
   */
  workflow_state: string;
  /** The address that was put in the 'from' field of the message */
  from: string;
  /** The display name for the from address */
  from_name: string;
  /** The address the message was sent to: */
  to: string;
  /** The reply_to header of the message */
  reply_to: string;
  /** The message subject */
  subject: string;
  /** The plain text body of the message */
  body: string;
  /** The HTML body of the message. */
  html_body: string;
};
