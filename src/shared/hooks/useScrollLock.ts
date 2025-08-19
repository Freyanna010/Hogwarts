import { useEffect } from "react";

export const useScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document.body.style.overflow = "hidden";

    return () => {
    document.body.style.overflow = "auto";
    }

  }, [isOpen]);
};
