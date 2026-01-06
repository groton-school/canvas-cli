import { JSONValue } from '@battis/typescript-tricks';

export type AuthenticationProvider = {
  /** Valid for SAML providers. */
  identifier_format: string;
  /** Valid for all providers. */
  auth_type: string;
  /**
   * Valid for all providers.
   *
   * Type: integer
   */
  id: number | string;
  /** Valid for SAML providers. */
  log_out_url: string;
  /** Valid for SAML and CAS providers. */
  log_in_url: string;
  /** Valid for SAML providers. */
  certificate_fingerprint: string;
  /** Valid for SAML providers. */
  requested_authn_context: string;
  /** Valid for LDAP providers. */
  auth_host: string;
  /** Valid for LDAP providers. */
  auth_filter: string;
  /**
   * Valid for LDAP providers.
   *
   * Type: integer
   */
  auth_over_tls: number | string;
  /** Valid for LDAP and CAS providers. */
  auth_base: string;
  /** Valid for LDAP providers. */
  auth_username: string;
  /**
   * Valid for LDAP providers.
   *
   * Type: integer
   */
  auth_port: number | string;
  /**
   * Valid for all providers.
   *
   * Type: integer
   */
  position: number | string;
  /** Valid for SAML providers. */
  idp_entity_id: string;
  /** Valid for SAML providers. */
  login_attribute: string;
  /** Valid for SAML providers. */
  sig_alg: string;
  /**
   * Just In Time provisioning. Valid for all providers except Canvas (which has
   * the similar in concept self_registration setting).
   *
   * Type: boolean
   */
  jit_provisioning: boolean | string;
  federated_attributes: FederatedAttributesConfig;
  /**
   * If multi-factor authentication is required when logging in with this
   * authentication provider. The account must not have MFA disabled.
   *
   * Type: boolean
   */
  mfa_required: boolean | string;
};

/**
 * Settings that are applicable across an account's authentication
 * configuration, even if there are multiple individual providers
 */
export type SSOSettings = {
  /** The label used for unique login identifiers. */
  login_handle_name: string;
  /**
   * The url to redirect users to for password resets. Leave blank for default
   * Canvas behavior
   */
  change_password_url: string;
  /**
   * If a discovery url is set, canvas will forward all users to that URL when
   * they need to be authenticated. That page will need to then help the user
   * figure out where they need to go to log in. If no discovery url is
   * configured, the first configuration will be used to attempt to authenticate
   * the user.
   */
  auth_discovery_url: string;
  /**
   * If an unknown user url is set, Canvas will forward to that url when a
   * service authenticates a user, but that user does not exist in Canvas. The
   * default behavior is to present an error.
   */
  unknown_user_url: string;
};

/**
 * A mapping of Canvas attribute names to attribute names that a provider may
 * send, in order to update the value of these attributes when a user logs in.
 * The values can be a FederatedAttributeConfig, or a raw string corresponding
 * to the "attribute" property of a FederatedAttributeConfig. In responses, full
 * FederatedAttributeConfig objects are returned if JIT provisioning is enabled,
 * otherwise just the attribute names are returned.
 */
export type FederatedAttributesConfig = {
  /**
   * A comma separated list of role names to grant to the user. Note that these
   * only apply at the root account level, and not sub-accounts. If the
   * attribute is not marked for provisioning only, the user will also be
   * removed from any other roles they currently hold that are not still
   * specified by the IdP.
   */
  admin_roles: string;
  /** The full display name of the user */
  display_name: string;
  /** The user's e-mail address */
  email: string;
  /** The first, or given, name of the user */
  given_name: string;
  /** The secondary unique identifier for SIS purposes */
  integration_id: string;
  /** The user's preferred locale/language */
  locale: string;
  /** The full name of the user */
  name: string;
  /** The unique SIS identifier */
  sis_user_id: string;
  /** The full name of the user for sorting purposes */
  sortable_name: string;
  /** The surname, or last name, of the user */
  surname: string;
  /** The user's preferred time zone */
  timezone: string;
};

/** A single attribute name to be federated when a user logs in */
export type FederatedAttributeConfig = {
  /**
   * The name of the attribute as it will be sent from the authentication
   * provider
   */
  attribute: string;
  /**
   * If the attribute should be applied only when provisioning a new user,
   * rather than all logins
   *
   * Type: boolean
   */
  provisioning_only: boolean | string;
  /**
   * (only for email) If the email address is trusted and should be
   * automatically confirmed
   *
   * Type: boolean
   */
  autoconfirm: boolean | string;
};
