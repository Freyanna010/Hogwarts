import { Button, Card, Flex, Tooltip, Typography } from "antd";
import React, { FC, useState } from "react";
import { HeartOutlined, HeartFilled, DeleteOutlined } from "@ant-design/icons";
import { getHouseColor } from "@utils/colorUtils";
import clsx from "clsx";
import { Student } from "shared/types";
import HgEmblem from "@assets/hogAvatar.webp";
import Image from "@components/ui/Image";

import classes from "./StudentCard.module.scss";

interface StudentCardProps {
  student: Student;
  onCardClick: (id: string) => void;
  className?: string;
  actions?: React.ReactNode;
}

export const StudentCard: FC<StudentCardProps> = ({
  student,
  onCardClick,
  className,
  actions,
}) => {
  const { id, image, name, house } = student;
  const { Title } = Typography;

  const handelCardClick = () => onCardClick(id);
  const CardColor = getHouseColor(house);

  return (
    <Card
      className={clsx(classes.studentCard, classes[CardColor], className)}
      onClick={handelCardClick}
    >
      <Flex justify="end">{actions}</Flex>

      <Flex justify="center" align="center">
        <Image src={image || HgEmblem} className={classes.cardImg} />
      </Flex>

      <Flex justify="center" align="center" vertical>
        <Title
          level={4}
          style={{ fontFamily: "Spectral", fontWeight: 300, marginTop: 14 }}
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
