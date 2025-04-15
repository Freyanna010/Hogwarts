import StudentCard from "@components/StudentCard";
import {
  changeFavoriteStudents,
  chooseStudentById,
} from "@features/studentsSlice";
import { AppDispatch, RootState } from "@store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoritePage = () => {
  const { favoriteStudents } = useSelector(
    (state: RootState) => state.students,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(favoriteStudents);
  }, []);

  const handleDeleteStudentCard = (studentId: string) =>
    dispatch(changeFavoriteStudents(studentId));
  const handleStudentCardClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  return (
    <>
      {favoriteStudents.map((student) => {
        <StudentCard
          student={student}
          type="favoritePage"
          onDeleteClick={handleDeleteStudentCard}
          onCardClick={handleStudentCardClick}
        />;
      })}
    </>
  );
};

export default FavoritePage;
