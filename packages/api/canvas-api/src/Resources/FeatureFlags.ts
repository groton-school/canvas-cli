import { JSONValue } from '@battis/typescript-tricks';

export type Feature = {
  /** The symbolic name of the feature, used in FeatureFlags */
  feature: string;
  /** The user-visible name of the feature */
  display_name: string;
  /**
   * The type of object the feature applies to (RootAccount, Account, Course, or
   * User): RootAccount features may only be controlled by flags on root
   * accounts. Account features may be controlled by flags on accounts and their
   * parent accounts. Course features may be controlled by flags on courses and
   * their parent accounts. User features may be controlled by flags on users
   * and site admin only.
   */
  applies_to: string;
  /** The FeatureFlag that applies to the caller */
  feature_flag: FeatureFlag;
  /**
   * If true, a feature that is 'allowed' globally will be 'off' by default in
   * root accounts. Otherwise, root accounts inherit the global 'allowed'
   * setting, which allows sub-accounts and courses to turn features on with no
   * root account action.
   *
   * Type: boolean
   */
  root_opt_in: boolean | string;
  /**
   * Whether the feature is a feature preview. If true, opting in includes
   * ongoing updates outside the regular release schedule.
   *
   * Type: boolean
   */
  beta: boolean | string;
  /**
   * Indicates the feature is part of the Early Access Program.
   *
   * Type: boolean
   */
  early_access_program: boolean | string;
  /**
   * Whether the details of the feature are autoexpanded on page load vs. the
   * user clicking to expand.
   *
   * Type: boolean
   */
  autoexpand: boolean | string;
  /** A URL to the release notes describing the feature */
  release_notes_url: string;
};

export type FeatureFlag = {
  /**
   * The type of object to which this flag applies (Account, Course, or User).
   * (This field is not present if this FeatureFlag represents the global Canvas
   * default)
   */
  context_type: string;
  /**
   * The id of the object to which this flag applies (This field is not present
   * if this FeatureFlag represents the global Canvas default)
   *
   * Type: integer
   */
  context_id: number | string;
  /** The feature this flag controls */
  feature: string;
  /**
   * The policy for the feature at this context. can be 'off', 'allowed',
   * 'allowed_on', or 'on'.
   */
  state: string;
  /**
   * If set, this feature flag cannot be changed in the caller's context because
   * the flag is set 'off' or 'on' in a higher context
   *
   * Type: boolean
   */
  locked: boolean | string;
};
