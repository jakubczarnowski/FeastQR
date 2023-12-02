import { z } from "zod";
import * as R from "ramda";
import { type FileErrors } from "use-file-picker/types";

export function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(z.literal(""));
}

enum ErrorMessages {
  imageWidthTooSmall = "Image width is not sufficent",
  imageHeightTooSmall = "Image height is not sufficent",
  fileSizeTooSmall = "File size is too small!",
  fileSizeToolarge = "File size is too large!",
  readerError = "Problem occured while reading file!",
  maxLimitExceeded = "Too many files",
  minLimitNotReached = "Not enough files",
}

export const getErrorMessagesFromFilePicker = (errorObject: FilePickerError) =>
  R.keys(errorObject)
    .filter((key) => errorObject[key])
    .map((key) => ErrorMessages[key as keyof typeof ErrorMessages]);

export type FilePickerError = FileErrors["errors"][number];

export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}
