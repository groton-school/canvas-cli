export function friendlyError(
  error: unknown,
  status: Record<number, string> = []
) {
  status = {
    400: 'Required parameter missing',
    401: 'Authorization information is missing or invalid',
    403: 'User does not have proper permissions',
    422: 'Invalid parameters',
    ...status
  };
  if (
    Error.isError(error) &&
    error.cause &&
    typeof error.cause === 'object' &&
    'response' in error.cause &&
    error.cause.response &&
    typeof error.cause.response === 'object' &&
    'status' in error.cause.response &&
    typeof error.cause.response.status === 'number' &&
    error.cause.response.status in status
  ) {
    return new Error(status[error.cause.response.status], { cause: error });
  }
  return new Error('Unknown error', { cause: error });
}
