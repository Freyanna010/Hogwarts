import { Button, Col, Row } from "antd";
import { FC } from "react";
import StudentCard from "../StudentCard";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import classes from "./StudentCardList.module.scss";
import { StudentCardListProps } from "./StudentCardList.types";

const StudentCardList: FC<StudentCardListProps> = (props) => {
  const { onLikeClicK, onDeleteClicK, students, onCardClick, onSortClick } =
    props;
  const onDownOutlined = () => onSortClick("a-z");
  const onUpOutlined = () => onSortClick("z-a");

  return (
    <div className={classes.cardList}>
      <Row className={classes.cadListRow}>
        <Row>
          Sort name:
          <Button
            type="text"
            onClick={onDownOutlined}
            // TODO: стили
            icon={<DownOutlined style={{ color: "#fff" }} />}
          />
          <Button
            type="text"
            onClick={onUpOutlined}
            icon={<UpOutlined style={{ color: "#fff" }} />}
          />
        </Row>
      </Row>

      <Row gutter={[24, 24]} justify="start">
        {students.map((student) => (
          <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
            <StudentCard
              student={student}
              onLikeClick={onLikeClicK}
              onDeleteClick={onDeleteClicK}
              onCardClick={onCardClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StudentCardList;
