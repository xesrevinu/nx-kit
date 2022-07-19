export class FetchError {
  readonly _tag = 'FetchError';

  constructor(readonly error: unknown) {}
}

// export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
//   Effect.tryCatchPromise(
//     () => fetch(input, init),
//     (error) => new FetchError(error)
//   );

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();

    fetch(input, { ...(init ?? {}), signal: controller.signal })
      .then((response) => resume(Effect.succeed(response)))
      .catch((error) => resume(Effect.fail(new FetchError(error))));

    return Either.left(Effect.succeed(controller.abort()));
  });

export class JsonBodyError {
  readonly _tag = 'JsonBodyError';

  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    () => input.json(),
    (error) => new JsonBodyError(error)
  );
