import StudentCard from "@components/StudentCard";
import {
  addFavoriteStudents,
  chooseStudentById,
  deleteStudent,
  filterStudentsByHouse,
} from "@features/studentsSlice";
import { AppDispatch, RootState } from "@store/store";
import { Col, Row } from "antd";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const HousePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();
  const navigate = useNavigate();

  const {
    houseStudents: filteredStudents,
    allStudents,
  } = useSelector((state: RootState) => state.students);

  useEffect(() => {
    if (allStudents.length > 0 && houseName) {
      dispatch(filterStudentsByHouse(houseName));
    }
  }, [dispatch, houseName, allStudents]);

  const handleLikeStudent = (studentId: string) =>
    dispatch(addFavoriteStudents(studentId));

  const handleDeleteStudent = (studentId: string) =>
    dispatch(deleteStudent(studentId));

  const handleCardClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  return (
    <>
      <Row gutter={[24, 24]} justify="start">
        {filteredStudents.map((student) => (
          <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
            <StudentCard
              student={student}
              onLikeClick={handleLikeStudent}
              onDeleteClick={handleDeleteStudent}
              onCardClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HousePage;
