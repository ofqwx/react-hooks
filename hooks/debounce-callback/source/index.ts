import { useCallback, useEffect, useRef } from "react";

export default function useDebounceCallback(
  callback: (...args: unknown[]) => void,
  time: number
) {
  const currentCall = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    () => () => {
      if (currentCall.current !== null) {
        clearTimeout(currentCall.current);
      }
    },
    []
  );

  const debouncedCallback = useCallback(
    (...args: unknown[]) => {
      if (currentCall.current !== null) {
        clearTimeout(currentCall.current);
      }

      currentCall.current = setTimeout(() => {
        callback(...args);
        currentCall.current = null;
      }, time);
    },
    [callback, time]
  );

  return debouncedCallback;
}
