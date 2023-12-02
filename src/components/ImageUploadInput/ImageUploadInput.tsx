/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useFormContext,
  useController,
} from "react-hook-form";
import { useFilePicker } from "use-file-picker";

import { type ImageProps } from "next/image";
import {
  type FilePickerError,
  getErrorMessagesFromFilePicker,
} from "~/utils/utils";
import { type ImageDimensionRestrictionsConfig } from "use-file-picker/dist/interfaces";
import { cn } from "~/utils/cn";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import { AspectRatio } from "../ui/aspect-ratio";
import { CropImageModal } from "../CropImageModal/CropImageModal";
import { useTranslation } from "react-i18next";

export type ImageUploadProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  imageProps?: ImageProps;
  defaultImageUrl?: string;
  showClearButton?: boolean;
  dimensionsRestrictions?: ImageDimensionRestrictionsConfig;
  circleCrop?: boolean;
  aspectRatio: number;
  cropImageAspectRatio?: number;
  className?: string;
  helperText?: string;
  restoreButton?: boolean;
};

export const ImageUploadInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  dimensionsRestrictions,
  imageProps,
  defaultImageUrl,
  circleCrop,
  aspectRatio,
  cropImageAspectRatio = aspectRatio,
  helperText,
  restoreButton = true,
}: ImageUploadProps<TFieldValues, TName>) => {
  const { filesContent, errors, clear, plainFiles, openFilePicker } =
    useFilePicker({
      readAs: "DataURL",
      accept: "image/*",
      multiple: false,
      limitFilesConfig: { max: 1 },
      maxFileSize: 0.001,
      imageSizeRestrictions: dimensionsRestrictions,
    });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const {
    setError: setValidationError,
    clearErrors,
    control,
  } = useFormContext();

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleSetError = (reason: string | undefined) => {
    if (reason) {
      setValidationError(name, {
        message: reason,
      });

      return;
    }

    clearErrors(name);
  };

  const objectUrl = useRef<string | null>(
    value ? URL.createObjectURL(value) : null,
  );
  const [imageSource, setImageSource] = useState(
    objectUrl.current ?? defaultImageUrl,
  );
  const previousErrors = useRef(errors);
  const fileErrorMessage =
    errors.length > 0
      ? getErrorMessagesFromFilePicker(errors[0] as FilePickerError).join("\n")
      : undefined;

  if (
    previousErrors.current !== errors &&
    error?.message !== fileErrorMessage
  ) {
    previousErrors.current = errors;
    handleSetError(fileErrorMessage);
  }

  const previousFiles = useRef({ filesContent, plainFiles });

  if (
    filesContent.length > 0 &&
    plainFiles.length > 0 &&
    previousFiles.current.filesContent !== filesContent &&
    previousFiles.current.plainFiles !== plainFiles
  ) {
    previousFiles.current = { filesContent, plainFiles };
    setIsModalOpen(true);
  }

  const handleCropAccepted = (file: Blob, content: string) => {
    setImageSource(content);
    onChange(file);
    onBlur();
    handleSetError(undefined);
  };

  const handleCancel = () => {
    clear();
    setImageSource(defaultImageUrl);
    onChange(undefined);
    handleSetError(undefined);
  };

  const handleSubmit = () => {
    openFilePicker();
    onBlur();
  };

  useEffect(() => {
    let imageObjectUrl = objectUrl.current;

    if (value && !imageObjectUrl) {
      imageObjectUrl = URL.createObjectURL(value);
      objectUrl.current = imageObjectUrl;
      setImageSource(imageObjectUrl);
    }

    return () => {
      if (imageObjectUrl) {
        URL.revokeObjectURL(imageObjectUrl); // avoid memory leaks
        objectUrl.current = null;
      }
    };
  }, [value]);

  return (
    <>
      <CropImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        file={plainFiles.length > 0 ? (plainFiles[0] as File) : null}
        onCropAccepted={handleCropAccepted}
        aspectRatio={cropImageAspectRatio}
        circleCrop={!!circleCrop}
      />
      <AspectRatio
        ratio={aspectRatio}
        className={cn(
          "flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-gray-400",
        )}
      >
        <div
          className=" flex h-full items-center justify-center"
          onClick={() =>
            defaultImageUrl !== imageSource ? handleCancel() : handleSubmit()
          }
        >
          {imageSource ? (
            <img
              className={cn(
                "h-full w-full border-2 border-gray-400 object-contain dark:border-gray-600",
              )}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              src={imageSource}
              alt="Image"
              {...imageProps}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Icons.image
                style={{
                  height: "30%",
                }}
              />
            </div>
          )}
          <Button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit();
            }}
            className={cn(
              "absolute left-0 top-0 h-full w-full  min-w-[20px] border-2 border-gray-500 bg-gray-200 opacity-0 transition-opacity duration-200 ease-in-out hover:opacity-90 focus:bg-gray-200",
            )}
            variant="outline"
          >
            <Icons.download />
          </Button>
        </div>

        {defaultImageUrl !== imageSource && (
          <Button
            aria-label="Clear"
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              handleCancel();
            }}
            className="absolute right-0 top-0"
          >
            <Icons.close
              style={{
                width: "20px",
                height: "20px",
                color: "#718096",
              }}
            />
          </Button>
        )}
      </AspectRatio>
      <div className="mt-2 flex items-start justify-between">
        {helperText && <p>{helperText}</p>}
        <div className="ml-auto flex gap-2">
          {restoreButton && defaultImageUrl !== imageSource && (
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                handleCancel();
              }}
              className="w-[68px] rounded-sm"
            >
              {t("imageUploadInput.restore")}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
