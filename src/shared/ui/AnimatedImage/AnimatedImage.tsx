import { FC } from "react";
import clsx from "clsx";

import { AnimatedImageProps } from "./AnimatedImg.types";
import classes from "./AnimatedImage.module.scss";

const AnimatedImage: FC<AnimatedImageProps> = (props) => {
  const { className, type, onClick, ...imgProps } = props;

  return (
    <img
      className={clsx(classes[type], className)}
      {...imgProps}
      alt="Loading..."
      onClick={onClick}
    />
  );
};

export default AnimatedImage;
