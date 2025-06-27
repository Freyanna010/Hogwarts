import  { FC } from "react";
import { Button, Tooltip } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import { LikeButtonProps } from "./LikeBauttonAction.types";

const LikeButton: FC<LikeButtonProps> = ({ isLiked, onClick }) => (
  <Tooltip title={isLiked ? "Remove from favorites" : "Add to favorites"}>
    <Button
      type="text"
      icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
      onClick={onClick}
    />
  </Tooltip>
);

export default LikeButton;
