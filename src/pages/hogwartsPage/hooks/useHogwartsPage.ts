import { chooseStudentById } from "@features/studentsSlice";
import { hogwartsImagesData } from "@store/hogwartsImageData";
import { AppDispatch, RootState } from "@store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const useHogwartsPage = () => {
const houses = useSelector((state: RootState) => state.houses.houses);
const students = useSelector(
    (state: RootState) => state.students.allStudents
);
const hogwartsImages = hogwartsImagesData;

const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate();

const [isShowModal, seIsShowModal] = useState(false);

const handleHouseCardClick = (houseName: string) => {
    navigate(`/Hogwarts/house/${houseName}`);
};
const handleImageClick = () => seIsShowModal(!isShowModal);
const handleCloseModal = () => seIsShowModal(false);
const handleGoToHogwartsClick = () =>
    navigate("/Hogwarts/students/create-student");

const handleStudentLinkClick = (studentId: string) => {
    navigate(`/Hogwarts/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
};

return {
    houses,
    students,
    hogwartsImages,
    isShowModal,
    handleHouseCardClick,
    handleImageClick,
    handleCloseModal,
    handleGoToHogwartsClick,
    handleStudentLinkClick,
  };
};
