import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AuthenticationProvider } from '../../../../Resources/AuthenticationProviders.js';

export type add_authentication_providerPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type add_authentication_providerSearchParameters = Masquerade;

type Options = {
  pathParams: add_authentication_providerPathParameters;
} & (
  | {
      searchParams?: Partial<add_authentication_providerSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: add_authentication_providerSearchParameters;
      strict: true;
    }
);

/**
 * Add authentication provider
 *
 * Add external authentication provider(s) for the account. Services may be
 * Apple, CAS, Facebook, GitHub, Google, LDAP, LinkedIn, Microsoft, OpenID
 * Connect, or SAML.
 *
 * Each authentication provider is specified as a set of parameters as described
 * below. A provider specification must include an 'auth_type' parameter with a
 * value of 'apple', 'canvas', 'cas', 'clever', 'facebook', 'github', 'google',
 * 'ldap', 'linkedin', 'microsoft', 'openid_connect', or 'saml'. The other
 * recognized parameters depend on this auth_type; unrecognized parameters are
 * discarded. Provider specifications not specifying a valid auth_type are
 * ignored.
 *
 * You can set the 'position' for any provider. The config in the 1st position
 * is considered the default. You can set 'jit_provisioning' for any provider
 * besides Canvas. You can set 'mfa_required' for any provider.
 *
 * For Apple, the additional recognized parameters are:
 *
 * - Client_id [Required]
 *
 *   The developer’s client identifier, as provided by WWDR. Not available if
 *   configured globally for Canvas.
 * - Login_attribute [Optional]
 *
 *   The attribute to use to look up the user's login in Canvas. Either 'sub' (the
 *   default), or 'email'
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'email',
 *   'firstName', 'lastName', and 'sub'.
 *
 * For Canvas, the additional recognized parameter is:
 *
 * - Self_registration
 *
 *   'all', 'none', or 'observer' - who is allowed to register as a new user
 *
 * For CAS, the additional recognized parameters are:
 *
 * - Auth_base
 *
 *   The CAS server's URL.
 * - Log_in_url [Optional]
 *
 *   An alternate SSO URL for logging into CAS. You probably should not set this.
 *
 * For Clever, the additional recognized parameters are:
 *
 * - Client_id [Required]
 *
 *   The Clever application's Client ID. Not available if configured globally for
 *   Canvas.
 * - Client_secret [Required]
 *
 *   The Clever application's Client Secret. Not available if configured globally
 *   for Canvas.
 * - District_id [Optional]
 *
 *   A district's Clever ID. Leave this blank to let Clever handle the details
 *   with its District Picker. This is required for Clever Instant Login to work
 *   in a multi-tenant environment.
 * - Login_attribute [Optional]
 *
 *   The attribute to use to look up the user's login in Canvas. Either 'id' (the
 *   default), 'sis_id', 'email', 'student_number', or 'teacher_number'. Note
 *   that some fields may not be populated for all users at Clever.
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'id', 'sis_id',
 *   'email', 'student_number', and 'teacher_number'.
 *
 * For Facebook, the additional recognized parameters are:
 *
 * - App_id [Required]
 *
 *   The Facebook App ID. Not available if configured globally for Canvas.
 * - App_secret [Required]
 *
 *   The Facebook App Secret. Not available if configured globally for Canvas.
 * - Login_attribute [Optional]
 *
 *   The attribute to use to look up the user's login in Canvas. Either 'id' (the
 *   default), or 'email'
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'email',
 *   'first_name', 'id', 'last_name', 'locale', and 'name'.
 *
 * For GitHub, the additional recognized parameters are:
 *
 * - Domain [Optional]
 *
 *   The domain of a GitHub Enterprise installation. I.e. github.mycompany.com. If
 *   not set, it will default to the public github.com.
 * - Client_id [Required]
 *
 *   The GitHub application's Client ID. Not available if configured globally for
 *   Canvas.
 * - Client_secret [Required]
 *
 *   The GitHub application's Client Secret. Not available if configured globally
 *   for Canvas.
 * - Login_attribute [Optional]
 *
 *   The attribute to use to look up the user's login in Canvas. Either 'id' (the
 *   default), or 'login'
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'email', 'id',
 *   'login', and 'name'.
 *
 * For Google, the additional recognized parameters are:
 *
 * - Client_id [Required]
 *
 *   The Google application's Client ID. Not available if configured globally for
 *   Canvas.
 * - Client_secret [Required]
 *
 *   The Google application's Client Secret. Not available if configured globally
 *   for Canvas.
 * - Hosted_domain [Optional]
 *
 *   A Google Apps domain to restrict logins to. See
 *   https://developers.google.com/identity/protocols/OpenIDConnect?hl=en#hd-param
 * - Login_attribute [Optional]
 *
 *   The attribute to use to look up the user's login in Canvas. Either 'sub' (the
 *   default), or 'email'
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'email',
 *   'family_name', 'given_name', 'locale', 'name', and 'sub'.
 *
 * For LDAP, the additional recognized parameters are:
 *
 * - Auth_host
 *
 *   The LDAP server's URL.
 * - Auth_port [Optional, Integer]
 *
 *   The LDAP server's TCP port. (default: 389)
 * - Auth_over_tls [Optional]
 *
 *   Whether to use TLS. Can be 'simple_tls', or 'start_tls'. For backwards
 *   compatibility, booleans are also accepted, with true meaning simple_tls. If
 *   not provided, it will default to start_tls.
 * - Auth_base [Optional]
 *
 *   A default treebase parameter for searches performed against the LDAP server.
 * - Auth_filter
 *
 *   LDAP search filter. Use !{{login}} as a placeholder for the username supplied
 *   by the user. For example: "(sAMAccountName=!{{login}})".
 * - Identifier_format [Optional]
 *
 *   The LDAP attribute to use to look up the Canvas login. Omit to use the
 *   username supplied by the user.
 * - Auth_username
 *
 *   Username
 * - Auth_password
 *
 *   Password
 *
 * For LinkedIn, the additional recognized parameters are:
 *
 * - Client_id [Required]
 *
 *   The LinkedIn application's Client ID. Not available if configured globally
 *   for Canvas.
 * - Client_secret [Required]
 *
 *   The LinkedIn application's Client Secret. Not available if configured
 *   globally for Canvas.
 * - Login_attribute [Optional]
 *
 *   The attribute to use to look up the user's login in Canvas. Either 'id' (the
 *   default), or 'emailAddress'
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'emailAddress',
 *   'firstName', 'id', 'formattedName', and 'lastName'.
 *
 * For Microsoft, the additional recognized parameters are:
 *
 * - Application_id [Required]
 *
 *   The application's ID.
 * - Application_secret [Required]
 *
 *   The application's Client Secret (Password)
 * - Tenant [Optional]
 *
 *   See
 *   https://azure.microsoft.com/en-us/documentation/articles/active-directory-v2-protocols/
 *   Valid values are 'common', 'organizations', 'consumers', or an Azure Active
 *   Directory Tenant (as either a UUID or domain, such as
 *   contoso.onmicrosoft.com). Defaults to 'common'
 * - Login_attribute [Optional]
 *
 *   See
 *   https://azure.microsoft.com/en-us/documentation/articles/active-directory-v2-tokens/#idtokens
 *   Valid values are 'sub', 'email', 'oid', or 'preferred_username'. Note that
 *   email may not always be populated in the user's profile at Microsoft. Oid
 *   will not be populated for personal Microsoft accounts. Defaults to 'sub'
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Valid provider attributes are 'email', 'name',
 *   'preferred_username', 'oid', and 'sub'.
 *
 * For OpenID Connect, the additional recognized parameters are:
 *
 * - Client_id [Required]
 *
 *   The application's Client ID.
 * - Client_secret [Required]
 *
 *   The application's Client Secret.
 * - Authorize_url [Required]
 *
 *   The URL for getting starting the OAuth 2.0 web flow
 * - Token_url [Required]
 *
 *   The URL for exchanging the OAuth 2.0 authorization code for an Access Token
 *   and ID Token
 * - Scope [Optional]
 *
 *   Space separated additional scopes to request for the token. Note that you
 *   need not specify the 'openid' scope, or any scopes that can be
 *   automatically inferred by the rules defined at
 *   http://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims
 * - End_session_endpoint [Optional]
 *
 *   URL to send the end user to after logging out of Canvas. See
 *   https://openid.net/specs/openid-connect-session-1_0.html#RPLogout
 * - Userinfo_endpoint [Optional]
 *
 *   URL to request additional claims from. If the initial ID Token received from
 *   the provider cannot be used to satisfy the login_attribute and all
 *   federated_attributes, this endpoint will be queried for additional
 *   information.
 * - Login_attribute [Optional]
 *
 *   The attribute of the ID Token to look up the user's login in Canvas. Defaults
 *   to 'sub'.
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Any value is allowed for the provider
 *   attribute names, but standard claims are listed at
 *   http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
 *
 * For SAML, the additional recognized parameters are:
 *
 * - Metadata [Optional]
 *
 *   An XML document to parse as SAML metadata, and automatically populate
 *   idp_entity_id, log_in_url, log_out_url, certificate_fingerprint, and
 *   identifier_format
 * - Metadata_uri [Optional]
 *
 *   A URI to download the SAML metadata from, and automatically populate
 *   idp_entity_id, log_in_url, log_out_url, certificate_fingerprint, and
 *   identifier_format. This URI will also be saved, and the metadata
 *   periodically refreshed, automatically. If the metadata contains multiple
 *   entities, also supply idp_entity_id to distinguish which one you want
 *   (otherwise the only entity in the metadata will be inferred). If you
 *   provide the URI 'urn:mace:incommon' or 'http://ukfederation.org.uk', the
 *   InCommon or UK Access Management Federation metadata aggregate,
 *   respectively, will be used instead, and additional validation checks will
 *   happen (including validating that the metadata has been properly signed
 *   with the appropriate key).
 * - Idp_entity_id
 *
 *   The SAML IdP's entity ID
 * - Log_in_url
 *
 *   The SAML service's SSO target URL
 * - Log_out_url [Optional]
 *
 *   The SAML service's SLO target URL
 * - Certificate_fingerprint
 *
 *   The SAML service's certificate fingerprint.
 * - Identifier_format
 *
 *   The SAML service's identifier format. Must be one of:
 *
 *   - Urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
 *   - Urn:oasis:names:tc:SAML:2.0:nameid-format:entity
 *   - Urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos
 *   - Urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
 *   - Urn:oasis:names:tc:SAML:2.0:nameid-format:transient
 *   - Urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
 *   - Urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName
 *   - Urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName
 * - Requested_authn_context [Optional]
 *
 *   The SAML AuthnContext
 * - Sig_alg [Optional]
 *
 *   If set, +AuthnRequest+, +LogoutRequest+, and +LogoutResponse+ messages are
 *   signed with the corresponding algorithm. Supported algorithms are:
 *
 *   - {http://www.w3.org/2000/09/xmldsig#rsa-sha1}
 *   - {http://www.w3.org/2001/04/xmldsig-more#rsa-sha256}
 *
 *   RSA-SHA1 and RSA-SHA256 are acceptable aliases.
 * - Federated_attributes [Optional]
 *
 *   See FederatedAttributesConfig. Any value is allowed for the provider
 *   attribute names.
 *
 * Nickname: add_authentication_provider
 */
export async function add_authentication_provider(options: Options) {
  const response = await client().fetchAs<AuthenticationProvider>(
    `/api/v1/accounts/{account_id}/authentication_providers`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
