class ValidationError extends Error {
  readonly actualValue: unknown;

  constructor(actualValue: unknown, message: string) {
    super(message);
    this.name = "ValidationError";
    this.actualValue = actualValue;
  }
}
const includes = <Collection extends Value, Value>(
  collection: readonly Collection[],
  value: Value,
): value is Collection => collection.includes(value as Collection);

export function assertPairs<T>(
  matches: T[] | undefined,
): asserts matches is [T, T] {
  if (!matches || matches.length !== 2) {
    throw new ValidationError(matches, "Invalid matches data");
  }
}

export function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new ValidationError(condition, message);
  }
}

export function assertIncluded<Collection extends Value, Value>(
  value: Value,
  collection: readonly Collection[],
  message: string,
): asserts value is Collection {
  if (!includes<Collection, Value>(collection, value)) {
    throw new ValidationError(value, message);
  }
}
