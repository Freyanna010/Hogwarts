import ReactPlayer from "react-player";
import { FC, useRef, useState } from "react";
import { Skeleton } from "antd";

import { VidePlayerProps } from "./VideoPlayer.type";
import classes from "./videoPlayer.module.scss";

const VideoPlayer: FC<VidePlayerProps> = ({
  url,
  width,
  height,
  startTime,
  volume = 0.1,
}) => {
  const startPlayerRef = useRef<ReactPlayer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleReady = () => {
    setIsLoading(false);
    if (startPlayerRef.current !== null && startTime) {
      startPlayerRef.current.seekTo(startTime, "seconds");
    }
  };

  return (
    <div className={classes.videoPlayerContainer}>
      {isLoading && <Skeleton active className={classes.videoPlayerSkeleton} />}
      <ReactPlayer
        ref={startPlayerRef}
        url={url}
        width={width}
        height={height}
        volume={volume}
        playing={true}
        loop={true}
        controls={true}
        onReady={handleReady}
      />
    </div>
  );
};

export default VideoPlayer;
