import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import {
  changeFavoriteStudents,
  chooseStudentById,
  filterStudentsBySearch,
  sortStudentByName,
} from "@features/studentsSlice";

import { useEffectEvent } from "./useEffectEvent";
import debounce from "lodash.debounce";

export const useStudentsListHandlers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const searchValue = useSelector(
    (state: RootState) => state.students.searchValue,
  );

  const handleLikeStudentCard = useCallback(
    (studentId: string) => dispatch(changeFavoriteStudents(studentId)),
    [dispatch],
  );

  const handleStudentCardClick = useCallback(
    (studentId: string) => {
      navigate(`/Hogwarts/students/${studentId}`);
      dispatch(chooseStudentById(studentId));
    },
    [navigate, dispatch],
  );

  const handleSortStudentByName = useCallback(
    (direction: "asc" | "desc" | "none") =>
      dispatch(sortStudentByName(direction)),
    [dispatch],
  );

  const debouncedChangeSearch = useEffectEvent(
    debounce((value: string) => {
      dispatch(filterStudentsBySearch(value));
    }, 300),
  );

  const handleChangeSearch = useCallback(
    (value: string) => {
      debouncedChangeSearch(value);
    },
    [debouncedChangeSearch],
  );

  return {
    handleLikeStudentCard,
    handleStudentCardClick,
    handleSortStudentByName,
    handleChangeSearch,
    searchValue,
  };
};
