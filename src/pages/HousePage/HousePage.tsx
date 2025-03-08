import StudentsList from "@components/StudentsList";
import {
  addFavoriteStudents,
  deleteStudent,
  filterStudentsByHouse,
} from "@features/studentsSlice";
import { AppDispatch, RootState } from "@store/store";
import { Row } from "antd";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const HousePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();

  useEffect(() => {
    if (houseName) {
      dispatch(filterStudentsByHouse(houseName));
    }
  }, [dispatch,houseName]);

  const { filteredStudents } = useSelector(
    (state: RootState) => state.students
  );

  const handleLikeStudent = (studentId: string) =>
    dispatch(addFavoriteStudents(studentId));
  const handleDeleteStudent = (studentId: string) =>
    dispatch(deleteStudent(studentId));

  return (
    <>
      <Row gutter={[24, 24]} justify="start">
        <StudentsList
          onLike={handleLikeStudent}
          onDelete={handleDeleteStudent}
          students={filteredStudents}
        />
      </Row>
    </>
  );
};

export default HousePage
