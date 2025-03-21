import React, { useState } from "react";
import { Button } from "antd";
import { Direction, SortingButtonProps } from "./SortingВutton.types";
import { getDirection } from "./utils/getDirection";
import { getIcon } from "./utils/getIcon";

const SortingButton: React.FC<SortingButtonProps> = ({ onSortClick }) => {
  const [direction, setDirection] = useState<Direction>("none");

  const handleClick = () => {
    const nextDirection = getDirection(direction);

    setDirection(nextDirection);
    onSortClick?.(nextDirection);
  };

  const icon = getIcon(direction);

  return <Button type="text" onClick={handleClick} icon={icon} />;
};

export default SortingButton;
