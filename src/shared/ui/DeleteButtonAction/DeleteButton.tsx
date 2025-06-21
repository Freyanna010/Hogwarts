import  { FC } from "react";
import { DeleteButtonProps } from "./DeleteButton.types";
import { Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
  <Tooltip title={"Remove from favorites"}>
    <Button
      type="text"
      icon={<DeleteOutlined />}
      onClick={onClick}
    />
  </Tooltip>
);

export default DeleteButton;
