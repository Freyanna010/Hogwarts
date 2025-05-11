import { useCallback, useRef } from "react";

export const useEffectEvent = <T extends (...args: any[]) => void>(
  callback: T,
): T => {
  const ref = useRef(callback);

  ref.current = callback;
  return useCallback((...args: Parameters<T>) => {
    ref.current(...args);
  }, []) as T;
};
