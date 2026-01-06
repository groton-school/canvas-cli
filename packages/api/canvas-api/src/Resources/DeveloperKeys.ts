import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { LtiToolConfiguration } from './LtiRegistrations.js';

/** A Canvas API key (or LTI 1.3 registration) */
export type DeveloperKey = {
  /**
   * The Canvas ID of the DeveloperKey object
   *
   * Type: integer
   */
  id: number | string;
  /** The display name */
  name: string;
  /**
   * Timestamp of the key's creation
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * Timestamp of the key's last update
   *
   * Format: date-time
   */
  updated_at: string;
  /** The state of the key */
  workflow_state: string;
  /**
   * True if key represents an LTI 1.3 Registration. False for Canvas API keys
   *
   * Type: boolean
   */
  is_lti_key: boolean | string;
  /** Contact email configured for key */
  email: string;
  /** URL for a small icon to display in key list */
  icon_url: string;
  /** User-provided notes about key */
  notes: string;
  /** User-specified code representing the vendor that uses the key */
  vendor_code: string;
  /** The name of the account that owns the key */
  account_name: string;
  /**
   * True for all keys except Site Admin-level keys, which default to false.
   * Controls visibility in the Inherited tab.
   *
   * Type: boolean
   */
  visible: boolean | string;
  /**
   * List of API endpoints key is allowed to access (API keys), or LTI 1.3
   * scopes (LTI keys)
   */
  scopes: string[];
  /** Deprecated in favor of redirect_uris. Do not use. */
  redirect_uri: string;
  /**
   * List of URLs used during OAuth2 flow to validate given redirect URI (API
   * keys), or to redirect to after login (LTI keys)
   */
  redirect_uris: string[];
  /**
   * (API keys only) The number of active access tokens associated with the key
   *
   * Type: integer
   */
  access_token_count: number | string;
  /**
   * (API keys only) The last time an access token for this key was used in an
   * API request
   *
   * Format: date-time
   */
  last_used_at: string;
  /**
   * (API keys only) If true, key is only usable in non-production environments
   * (test, beta). Avoids problems with beta refresh.
   *
   * Type: boolean
   */
  test_cluster_only: boolean | string;
  /**
   * (API keys only) If true, allows `includes` parameters in API requests that
   * match the scopes of this key
   *
   * Type: boolean
   */
  allow_includes: boolean | string;
  /**
   * (API keys only) If true, then token requests with this key must include
   * scopes
   *
   * Type: boolean
   */
  require_scopes: boolean | string;
  /**
   * (API keys only) Used in OAuth2 client credentials flow to specify the
   * audience for the access token
   */
  client_credentials_audience: string;
  /**
   * (API keys only) The client secret used in the OAuth authorization_code
   * flow.
   */
  api_key: string;
  /** (LTI keys only) The Canvas-style tool configuration for this key. */
  tool_configuration: LtiToolConfiguration;
  /**
   * (LTI keys only) The tool's public JWK in JSON format. Discouraged in favor
   * of a url hosting a JWK set.
   *
   * Object
   */
  public_jwk: JSONObject;
  /**
   * (LTI keys only) The tool-hosted URL containing its public JWK keyset.
   * Canvas may cache JWKs up to 5 minutes.
   */
  public_jwk_url: string;
  /**
   * (LTI keys only) The LTI IMS Registration object for this key, if key was
   * created via Dynamic Registration.
   *
   * Object
   */
  lti_registration: JSONObject;
  /**
   * (LTI keys only) Returns true if key was created via Dynamic Registration.
   *
   * Type: boolean
   */
  is_lti_registration: boolean | string;
  /** Unused. */
  user_name: string;
  /** Unused. */
  user_id: string;
  /** Correlates an API key to a product configuration. */
  unified_tool_id: string;
};
