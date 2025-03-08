import { Col } from "antd";
import { FC } from "react";

import StudentCard from "../StudentCard";
import avatar from "@assets/hogAvatar.webp";
import { Student } from "@types";

type Props = {
  onLike: (studentId: string) => void;
  onDelete: (studentId: string) => void;
  studentsLoading?: boolean;
  students: Student[];
};

const StudentsList: FC<Props> = ({
  onLike,
  onDelete,
  students,
}) => (
  <>
    {students.map((student) => (
      <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
        <StudentCard
          id={student.id}
          image={student.image || avatar}
          name={student.name}
          house={student.house || "Unknown"}
          onLike={() => onLike(student.id)}
          onDelete={() => onDelete(student.id)}
        />
      </Col>
    ))}
  </>
);  
export default StudentsList;
