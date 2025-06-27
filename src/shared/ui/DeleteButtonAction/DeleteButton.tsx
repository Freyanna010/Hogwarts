import { FC } from "react";
import { Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { DeleteButtonProps } from "./DeleteButton.types";

const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
  <Tooltip title={"Remove from favorites"}>
    <Button type="text" icon={<DeleteOutlined />} onClick={onClick} />
  </Tooltip>
);

export default DeleteButton;
