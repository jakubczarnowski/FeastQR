import { type TRPCClientErrorLike } from "@trpc/client";
import { type AnyProcedure } from "@trpc/server";
import { useEffect, useRef } from "react";

export const useHandleFetchError = ({
  error,
  onError,
}: {
  error: TRPCClientErrorLike<AnyProcedure> | null;
  onError: () => void;
}) => {
  const errorSentRef = useRef(false);

  useEffect(() => {
    if (errorSentRef.current) return;
    if (error) {
      onError();
      errorSentRef.current = true;
    }
  }, [error, onError]);
};
