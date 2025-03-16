import { Button, Col, Row } from "antd";
import { FC } from "react";
import StudentCard from "../StudentCard";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Student } from "@types";
import classes from "./StudentCardList.module.scss"

type Props = {
  onLikeClicK: (studentId: string) => void;
  onDeleteClicK: (studentId: string) => void;
  onCardClick: (studentId: string) => void;
  onSortClick: (direction: "a-z" | "z-a") => void;
  students: Student[];
};

const StudentCardList: FC<Props> = ({ onLikeClicK, onDeleteClicK, students, onCardClick, onSortClick }) => {

 const onDownOutlined = () => onSortClick("a-z")
 const UpOutlined = () => onSortClick("z-a")

  return (
    <div className={classes.cardList}>
    <Row className={classes.cadListRow}>
      <Row>
        Sort name:
        <Button type="text" icon={<DownOutlined style={{color:"#fff"}} onClick={onDownOutlined}/>}/> 
        <Button  type="text" onClick={onDownOutlined} icon={<UpOutlined  style={{color:"#fff"}}  />} />
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
  )
}

;
export default StudentCardList;
