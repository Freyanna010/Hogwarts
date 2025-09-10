import videoMp4 from "@assets/Harry_Potter_Magic_Awakened.mp4";
import videoWebm from "@assets/Harry_Potter_web.webm";
import preview from "@assets/preview.png";

import classes from "./videoBg.module.scss";
import { useRef } from "react";
import { useVideo } from "../hooks/useVideo";

const VideoBg = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useVideo(videoRef)

  return (
    <video
      ref={videoRef}
      id="background-video"
      autoPlay
      loop
      muted
      preload="auto"
      className={classes.backgroundVideo}
      poster={preview}
    >
      <source src={videoWebm} type="video/webm" />
      <source src={videoMp4} type="video/mp4" />
    </video>
  );
};

export default VideoBg;
