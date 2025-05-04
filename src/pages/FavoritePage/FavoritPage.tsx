import StudentCard from "@components/StudentCard";
import {
  changeFavoriteStudents,
  chooseStudentById,
} from "@features/studentsSlice";
import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./FavoritePage.module.scss";

const FavoritePage = () => {
  const { favoriteStudents } = useSelector(
    (state: RootState) => state.students,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleDeleteStudentCard = (studentId: string) =>
    dispatch(changeFavoriteStudents(studentId));
  const handleStudentCardClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };
  //TODO: перенести student List сюда
  return (
    <div className={classes.favoritePageContainer}>
      <div className={classes.developTitle}>Work in progress 😅</div>
      {favoriteStudents.map((student) => {
        return (
          <StudentCard
            student={student}
            type="favoritePage"
            onDeleteClick={handleDeleteStudentCard}
            onCardClick={handleStudentCardClick}
            className={classes.develop}
          />
        );
      })}
    </div>
  );
};

export default FavoritePage;
