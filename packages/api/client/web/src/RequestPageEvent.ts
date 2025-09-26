export const RequestPageReceived = 'canvas-req-page-rcvd';

export class RequestPageEvent<T> extends Event {
  public constructor(
    public readonly page: T,
    eventInitDict?: EventInit
  ) {
    super(RequestPageReceived, eventInitDict);
  }
}
