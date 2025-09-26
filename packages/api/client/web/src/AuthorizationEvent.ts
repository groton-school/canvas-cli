export const AuthorizationRequired = 'canvas-auth-req';

export class AuthorizationEvent extends Event {
  public constructor(
    public readonly authorize_url: string,
    eventInitDict?: EventInit
  ) {
    super(AuthorizationRequired, eventInitDict);
  }
}
