import { FC, useState } from "react";
import classes from "./BannerHouseCard.module.scss";
import { HouseCardProps } from "../HouseCard.type";
import { Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import VideoPlayer from "@components/ui/VideoPlayer";
import clsx from "clsx";
import { getVideoId } from "@components/ui/VideoPlayer/getVideoId";

// TODO:Типизация
const BannerHouseCard: FC<Omit<HouseCardProps, "type">> = ({
  house,
  className,
}) => {
  const { name, emblemImg, description, video } = house;
  const [isShowVideo, setShowVideo] = useState(false);

  const handleClick = () => setShowVideo(!isShowVideo);
  const videoId = getVideoId(video);

  return (
    <div>
      <div className={clsx(classes.houseCard, className)}>
        <h3> Welcome to {name}</h3>
        <img src={emblemImg} alt={name} />
        <p>{description}</p>
        <Button
          type="link"
          className=  {classes.houseCardButton} 
          icon={isShowVideo ? <DownOutlined /> : <UpOutlined />}
          onClick={handleClick}
        >
          {isShowVideo ? `Close the ${name} room` : ` Open the ${name} room`}
        </Button>
      </div>
      {isShowVideo && (
        <VideoPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="600px"
          startTime={60}
        />
      )}
    </div>
  );
};

export default BannerHouseCard;
