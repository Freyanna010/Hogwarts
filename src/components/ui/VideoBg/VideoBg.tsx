import video from "@assets/Harry_Potter_Magic_Awakened.mp4";
import classes from "./videoBg.module.scss";

const VideoBg = () => {
  return (
    <video
      id="background-video"
      autoPlay
      loop
      muted
      className={classes.backgroundVideo}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default VideoBg;
