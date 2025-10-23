export class RequestStartedEvent extends Event {
  public static readonly name = 'canvas-rqst-strt';

  public readonly requestId = crypto.randomUUID();

  public constructor(init?: EventInit) {
    super(RequestStartedEvent.name, init);
  }
}
