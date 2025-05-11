import { chooseStudentById } from "@features/studentsSlice";
import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModal } from "./useModal";

const selectHouses = (state: RootState) => state.houses.houses;
const selectStudents = (state: RootState) => state.students.allStudents;

export const useHogwartsPage = () => {
  const houses = useSelector(selectHouses);
  const students = useSelector(selectStudents);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const modal = useModal()

  const handleHouseCardClick = (houseName: string) => {
    navigate(`/Hogwarts/house/${houseName}`);
  };

  const handleGoToHogwartsClick = () =>
    navigate("/Hogwarts/students/create-student");

  const handleStudentLinkClick = (studentId: string) => {
    navigate(`/Hogwarts/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  return {
    houses,
    students,
    isModalOpen: modal.isOpen,

    handleHouseCardClick,
    handleOwlImageClick: modal.onToggle,
    handleCloseModal: modal.onClose,
    handleGoToHogwartsClick,
    handleStudentLinkClick,
  };
};
