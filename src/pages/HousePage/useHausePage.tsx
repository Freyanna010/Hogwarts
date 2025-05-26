import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@store/store";
import { filterStudentsByHouse} from "@features/studentsSlice";
import { useStudentsListHandlers } from "@shared/hooks";
import { chooseHouseByName } from "@features/hоusesSlice";


export const useHousePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();

  const { filteredStudents, allStudents, isStudentsLoading, errorMessage} = useSelector(
    (state: RootState) => state.students,
  );
  const { currentHouse } = useSelector((state: RootState) => state.houses);

  const studentsListHandlers = useStudentsListHandlers();

  useEffect(() => {
    if (allStudents.length > 0 && houseName) {
      dispatch(filterStudentsByHouse(houseName));
      dispatch(chooseHouseByName(houseName));
    }
  }, [dispatch, houseName, allStudents]);

  return {
    filteredStudents,
    isStudentsLoading,
    errorMessage,
    currentHouse,
    ...studentsListHandlers
  };
};