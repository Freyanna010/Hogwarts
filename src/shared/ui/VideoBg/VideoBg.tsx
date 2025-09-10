import videoMp4 from "@assets/Harry_Potter_Magic_Awakened.mp4";
import videoWebm from "@assets/Harry_Potter_web.webm";
import preview from "@assets/pngwing.png"

import classes from "./videoBg.module.scss";

const VideoBg = () => {
  return (
    <video
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
