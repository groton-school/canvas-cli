import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { RubricAssessment } from '../../../../../Resources/Rubrics.js';

export type grade_or_comment_on_submission_by_anonymous_id_sectionsPathParameters =
  {
    /**
     * ID
     *
     * type: string
     *
     *
     */
    section_id: string | number;
    /**
     * ID
     *
     * type: string
     *
     *
     */
    assignment_id: string | number;
    /**
     * ID
     *
     * type: string
     *
     *
     */
    anonymous_id: string | number;
  };

export type grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters =
  Masquerade;

export type grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters =
  Masquerade & {
    /**
     * Add a textual comment to the submission.
     *
     *
     *
     *
     */
    'comment[text_comment]': string;
    /**
     * Whether or not this comment should be sent to the entire group (defaults
to false). Ignored if this is not a group assignment or if no text_comment
is provided.
     *
     * type: boolean
     *
     * 
     */
    'comment[group_comment]': boolean | string;
    /**
     * Add an audio/video comment to the submission. Media comments can be added
via this API, however, note that there is not yet an API to generate or
list existing media comments, so this functionality is currently of
limited use.
     *
     * 
     *
     * 
     */
    'comment[media_comment_id]': string;
    /**
     * The type of media comment being added.
     *
     *
     *
     *
     */
    'comment[media_comment_type]': string;
    /**
     * Attach files to this comment that were previously uploaded using the
Submission Comment API&#x27;s files action
     *
     * 

format: 'int64'
     *
     * 
     */
    'comment[file_ids]': number | string[];
    /**
     * Associations to include with the submission. &quot;submission_comments&quot; is always included by default.
- &quot;submission_comments&quot;: Comments on the submission (always included)
- &quot;visibility&quot;: Whether the assignment is visible to the owner of the submission
- &quot;sub_assignment_submissions&quot;: Sub-assignment submissions for discussion checkpoints
- &quot;peer_review_submissions&quot;: Peer review submission data when peer review allocation and grading is enabled
- &quot;provisional_grades&quot;: Provisional grades (only available for moderated assignments)
- &quot;group&quot;: Group information (id and name) for group assignments
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * Assign a score to the submission, updating both the &quot;score&quot; and &quot;grade&quot;
fields on the submission record. This parameter can be passed in a few
different formats:

points:: A floating point or integral value, such as &quot;13.5&quot;. The grade
  will be interpreted directly as the score of the assignment.
  Values above assignment.points_possible are allowed, for awarding
  extra credit.
percentage:: A floating point value appended with a percent sign, such as
   &quot;40%&quot;. The grade will be interpreted as a percentage score on the
   assignment, where 100% &#x3D;&#x3D; assignment.points_possible. Values above 100%
   are allowed, for awarding extra credit.
letter grade:: A letter grade, following the assignment&#x27;s defined letter
   grading scheme. For example, &quot;A-&quot;. The resulting score will be the high
   end of the defined range for the letter grade. For instance, if &quot;B&quot; is
   defined as 86% to 84%, a letter grade of &quot;B&quot; will be worth 86%. The
   letter grade will be rejected if the assignment does not have a defined
   letter grading scheme. For more fine-grained control of scores, pass in
   points or percentage rather than the letter grade.
&quot;pass/complete/fail/incomplete&quot;:: A string value of &quot;pass&quot; or &quot;complete&quot;
   will give a score of 100%. &quot;fail&quot; or &quot;incomplete&quot; will give a score of
   0.

Note that assignments with grading_type of &quot;pass_fail&quot; can only be
assigned a score of 0 or assignment.points_possible, nothing inbetween. If
a posted_grade in the &quot;points&quot; or &quot;percentage&quot; format is sent, the grade
will only be accepted if the grade equals one of those two values.
     *
     * 
     *
     * 
     */
    'submission[posted_grade]': string;
    /**
     * Sets the &quot;excused&quot; status of an assignment.
     *
     * type: boolean
     *
     *
     */
    'submission[excuse]': boolean | string;
    /**
     * Sets the late policy status to either &quot;late&quot;, &quot;missing&quot;, &quot;extended&quot;, &quot;none&quot;, or null.
  NB: &quot;extended&quot; values can only be set in the UI when the &quot;UI features for &#x27;extended&#x27; Submissions&quot; Account Feature is on
     *
     * 
     *
     * 
     */
    'submission[late_policy_status]': string;
    /**
     * Sets the seconds late if late policy status is &quot;late&quot;
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    'submission[seconds_late_override]': number | string;
    /**
     * Assign a rubric assessment to this assignment submission. The
sub-parameters here depend on the rubric for the assignment. The general
format is, for each row in the rubric:

The points awarded for this row.
  rubric_assessment[criterion_id][points]

The rating id for the row.
  rubric_assessment[criterion_id][rating_id]

Comments to add for this row.
  rubric_assessment[criterion_id][comments]

For example, if the assignment rubric is (in JSON format):
  !!!javascript
  [
    {
      &#x27;id&#x27;: &#x27;crit1&#x27;,
      &#x27;points&#x27;: 10,
      &#x27;description&#x27;: &#x27;Criterion 1&#x27;,
      &#x27;ratings&#x27;:
      [
        { &#x27;id&#x27;: &#x27;rat1&#x27;, &#x27;description&#x27;: &#x27;Good&#x27;, &#x27;points&#x27;: 10 },
        { &#x27;id&#x27;: &#x27;rat2&#x27;, &#x27;description&#x27;: &#x27;Poor&#x27;, &#x27;points&#x27;: 3 }
      ]
    },
    {
      &#x27;id&#x27;: &#x27;crit2&#x27;,
      &#x27;points&#x27;: 5,
      &#x27;description&#x27;: &#x27;Criterion 2&#x27;,
      &#x27;ratings&#x27;:
      [
        { &#x27;id&#x27;: &#x27;rat1&#x27;, &#x27;description&#x27;: &#x27;Exemplary&#x27;, &#x27;points&#x27;: 5 },
        { &#x27;id&#x27;: &#x27;rat2&#x27;, &#x27;description&#x27;: &#x27;Complete&#x27;, &#x27;points&#x27;: 5 },
        { &#x27;id&#x27;: &#x27;rat3&#x27;, &#x27;description&#x27;: &#x27;Incomplete&#x27;, &#x27;points&#x27;: 0 }
      ]
    }
  ]

Then a possible set of values for rubric_assessment would be:
    rubric_assessment[crit1][points]&#x3D;3&amp;rubric_assessment[crit1][rating_id]&#x3D;rat1&amp;rubric_assessment[crit2][points]&#x3D;5&amp;rubric_assessment[crit2][rating_id]&#x3D;rat2&amp;rubric_assessment[crit2][comments]&#x3D;Well%20Done.
     *
     * 
     *
     * 
     */
    rubric_assessment: RubricAssessment;
  };

type Options = (
  | {
      path: grade_or_comment_on_submission_by_anonymous_id_sectionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: grade_or_comment_on_submission_by_anonymous_id_sectionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters>;
        body?: Partial<grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters;
          }
      ) &
        (
          | {
              body: grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Grade or comment on a submission by anonymous id
 *
 * Comment on and/or update the grading for a student's assignment submission,
fetching the submission by anonymous id (instead of user id). If any
submission or rubric_assessment arguments are provided, the user must
have permission to manage grades in the appropriate context (course or
section).
 *
 * nickname: grade_or_comment_on_submission_by_anonymous_id_sections
 *
 * 
 *
 * 
 */
export async function grade_or_comment_on_submission_by_anonymous_id_sections(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
