import { Button, Card, Flex, Tooltip, Typography } from "antd";
import React, { FC, useState } from "react";
import { HeartOutlined, HeartFilled, DeleteOutlined } from "@ant-design/icons";
import { getHouseColor } from "@utils/colorUtils";
import classes from "./StudentCard.module.scss";
import clsx from "clsx";
import { Student } from "@types";
import HgEmblem from "@assets/hogAvatar.webp";
import Image from "@components/ui/Image";

interface Props {
  student: Student;
  onLikeClick?: (id: string) => void;
  onDeleteClick?: (id: string) => void;
  onCardClick: (id: string) => void;
  type: "housePage" | "favoritePage";
  studentsLoading?: boolean;
}

const StudentCard: FC<Props> = (props) => {
  const { student, onLikeClick, onDeleteClick, onCardClick, type } = props;

  const { id, image, name, house } = student;

  const { Title } = Typography;

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onLikeClick) {
      e.stopPropagation();
      setIsLiked((prev) => !prev);
      onLikeClick(id);
    }
  };
  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onDeleteClick) {
      e.stopPropagation();
      onDeleteClick(id);
    }
  };

  const handelCardClick = () => onCardClick(id);

  const CardColor = getHouseColor(house);

  return (
    <Card
      className={clsx(classes.studentCard, classes[CardColor])}
      onClick={handelCardClick}
    >
      <Flex justify="end">
        {type === "housePage" && (
          <Tooltip
            title={isLiked ? "remove from favorites" : "add to favorites"}
          >
            <Button
              type="text"
              icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleLikeClick(e)
              }
            />
          </Tooltip>
        )}

        {type === "favoritePage" && (
          <Tooltip title="Delete">
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleDeleteClick(e)
              }
            />
          </Tooltip>
        )}
      </Flex>
      <Flex justify="center" align="center">
        <Image src={image || HgEmblem} className={classes.cardImg} />
      </Flex>

      <Flex justify="center" align="center" vertical>
        <Title
          level={4}
          style={{
            fontFamily: "Spectral ",
            fontWeight: 300,
            marginTop: 14,
          }}
        >
          {name}
        </Title>
        <Title
          level={4}
          style={{
            fontWeight: 700,
            margin: 0,
            textTransform: "uppercase",
            marginTop: 6,
          }}
        >
          {house}
        </Title>
      </Flex>
    </Card>
  );
};

export default StudentCard;
