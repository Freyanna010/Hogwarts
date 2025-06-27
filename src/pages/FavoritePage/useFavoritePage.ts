import { useStudentsListHandlers } from "@shared/hooks";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

export const useFavoritePage = () => {
  
  const { favoriteStudents, isStudentsLoading, errorMessage } = useSelector(
    (state: RootState) => state.students
  );

  const studentsListHandlers = useStudentsListHandlers();

  return {
    favoriteStudents,
    isStudentsLoading,
    errorMessage,
    ...studentsListHandlers,
  };
};