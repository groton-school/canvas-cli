import {
  DateTimeString,
  NumericString,
  URLString,
  UUIDString
} from '@battis/descriptive-types';
import { JSONArray, JSONObject, JSONValue } from '@battis/typescript-tricks';
import { AccountCalendar } from './Resources/AccountCalendars.js';
import { BlackoutDate } from './Resources/BlackoutDates.js';
import { GroupCategory } from './Resources/GroupCategories.js';
import { GroupMembership } from './Resources/Groups.js';
import { BankItem, StimulusItem } from './Resources/NewQuizItems.js';
import { Rubric } from './Resources/Rubrics.js';
import { Grade, Grades, Submission } from './Resources/WhatIfGrades.js';

export type resultUrlStringTheurltotheresultthatwascreated = URLString;
export type Integer = number;
export type DateTime = string;
export type Datetime = string;
export type Date = string;
export type Hash = Record<string, JSONValue>;
export type Numeric = NumericString;
export type JSON = JSONValue;
export type uuid = UUIDString;
export type unread_countinteger = number;
export type gradesGradessubmissionSubmission = {
  grades: Grade[];
  submission: Submission;
};
export type GroupCategoryandgroupsoperationresults = {
  group_category: GroupCategory;
  operations: JSONArray;
};
export type RubricImport = Rubric;
export type UsedLocations = Rubric;
export type account_calendarsAccountCalendartotal_resultsinteger = {
  account_calendars: AccountCalendar[];
  total_results: number;
};
export type LtiRegistrationAccountBinding = {
  type: 'Lti::RegistrationAccountBinding';
};
export type array = string[];
export type multipleBlueprintRestrictions = Record<
  'assignment' | 'attachment' | 'discussion_topic' | 'quiz' | 'wiki_page',
  Record<'content' | 'points' | 'due_dates' | 'availability_dates', boolean>
>;
export type BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs =
  BlackoutDate[];
export type QuizUserConversation = {
  /** Message body of the conversation to be created */
  body: string;
  /** Who to send the message to. May be either 'submitted' or 'unsubmitted' */
  recipients: 'submitted' | 'unsubmitted';
  /** Subject of the new Conversation created */
  subject: string;
};
export type gradesGrades = Grades;
export type QuestionItemStimulusItem = StimulusItem;
export type QuestionItemStimulusItemBankEntryItemBankItem = BankItem;
export type SerializedHash = JSONObject;
export type GroupMembershipProgress =
  | GroupMembership[]
  | {
      completion: boolean;
      context_id: number;
      context_type: 'GroupCategory';
      created_at: DateTimeString<'ISO'>;
      id: number;
      message: string | null;
      tag: 'assign_unassigned_members';
      updated_at: DateTimeString<'ISO'>;
      user_id: number | null;
      workflow_state: string;
      url: URLString;
    };
export type GroupMembershiporaJSONresponsedetailingpartialfailuresifsomemembershipscouldnotbecreated =
  GroupMembership | JSONObject;
