import { DownOutlined, UpOutlined } from "@ant-design/icons";

import { Direction } from "../SortingВutton.types";

export const getIcon = (direction: Direction): JSX.Element => {
  const iconMap: Record<Direction, JSX.Element> = {
    none: <DownOutlined style={{ color: "#fff" }} />,
    asc: <DownOutlined style={{ color: "red" }} />,
    desc: <UpOutlined style={{ color: "red" }} />,
  };
  return iconMap[direction];
};
