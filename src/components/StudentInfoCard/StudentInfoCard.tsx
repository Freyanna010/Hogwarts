import { Col, Row, Typography } from "antd";
import { calculateAge } from "@utils/dateUtils";
import { FC } from "react";
import Image from "@components/ui/Image";

import classes from "./StudentInfoCard.module.scss";
import BgCard from "../ui/BgCard";
import LineRow from "../ui/LineRow";
import { StudentInfoCardProps } from "./StudentInfoCard.types";

const StudentInfoCard: FC<StudentInfoCardProps> = ({ student, avatar }) => {
  // TODO: добавить классы
  const { Title } = Typography;

  return (
    <BgCard className={classes.bgGard}>
      <Row gutter={16}>
        <Col span={6}>
          {/* TODO: курсор, добавить логику увелечения */}
          <Image src={student.image || avatar} className={classes.image} />
          <Title level={1} style={{ paddingTop: 10 }}>
            {student.name}
          </Title>
          {student.wizard && <Title level={4}>Wizard</Title>}
        </Col>

        <Col span={18}>
          {student.alternate_names.length > 0 && (
            <LineRow>
              <Title level={4}>Alternate names:</Title>
              {student.alternate_names.map((name, index) => (
                <Title level={5} key={index}>
                  {name}
                  {index < student.alternate_names.length - 1 && ", "}
                </Title>
              ))}
            </LineRow>
          )}

          <LineRow>
            <Title level={4}>Gender: </Title>
            <Title level={5}>{student.gender}</Title>
          </LineRow>

          <LineRow>
            <Title level={4}>House: </Title>
            <Title level={5}>{student.house || "unknown"}</Title>
          </LineRow>

          <LineRow>
            <Title level={4}>Date of birth: </Title>
            <Title level={5}>{student.dateOfBirth || "unknown"}</Title>
          </LineRow>

          <LineRow>
            <Title level={4}>Age: </Title>
            <Title level={5}>
              {student.dateOfBirth
                ? calculateAge(student.dateOfBirth)
                : "unknown"}
            </Title>
          </LineRow>

          {student.patronus && (
            <LineRow>
              <Title level={4}>Patronus: </Title>
              <Title level={5}>{student.patronus}</Title>
            </LineRow>
          )}
        </Col>
      </Row>
    </BgCard>
  );
};

export default StudentInfoCard;
