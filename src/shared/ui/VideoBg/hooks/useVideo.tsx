import { RefObject, useEffect } from "react";

export const useVideo = (videoRef: RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoPlay = () => video.play();
    video.addEventListener("canplaythrough", handleVideoPlay);

    return () => {
      video.removeEventListener("canplaythrough", handleVideoPlay);
    };
  }, [videoRef]);
};
