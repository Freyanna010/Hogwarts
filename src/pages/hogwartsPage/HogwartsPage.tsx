import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { hogwartsImagesData } from "@store/hogwartsImageData";
import LetterModal from "@components/LetterModal/LetterModal";
import { chooseStudentById } from "@features/studentsSlice";

import classes from "./HogwartsPage.module.scss";
import ManSection from "./Sections/ManSection/ManSection";
import AboutHogwartsSection from "./Sections/AboutHogwartsSection";
import HousesSection from "./Sections/HousesSection";
import FamousThreeSection from "./Sections/FamousThreeSection";

const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const students = useSelector(
    (state: RootState) => state.students.allStudents,
  );
  const hogwartsImages = hogwartsImagesData;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isShowModal, seIsShowModal] = useState(false);
  const [isShowTooltip, seIsShowTooltip] = useState(false);

  const handleHouseCardClick = (houseName: string) => {
    navigate(`/Hogwarts/house/${houseName}`);
  };
  const handleImageClick = () => seIsShowModal(!isShowModal);
  const handleCloseModal = () => seIsShowModal(false);
  const handleGoToHogwartsClick = () =>
    navigate("/Hogwarts/students/create-student");
  const handleMouseEnterModal = () => seIsShowTooltip(true);
  const handleMouseLeaveModal = () => seIsShowTooltip(false);
  const handleStudentLinkClick = (studentId: string) => {
    navigate(`/Hogwarts/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  return (
    <div className={classes.wrapperHgPageSlider}>
      {isShowModal && (
        // TODO:добавить чилдрен
        <LetterModal
          onCloseClick={handleCloseModal}
          onGoClick={handleGoToHogwartsClick}
        />
      )}
      <ManSection
        isShowTooltip={isShowTooltip}
        handleImageClick={handleImageClick}
        handleMouseEnterModal={handleMouseEnterModal}
        handleMouseLeaveModal={handleMouseLeaveModal}
      />
      <AboutHogwartsSection images={hogwartsImages} />
      <HousesSection houses={houses} onCardClick={handleHouseCardClick} />
      <FamousThreeSection
        students={students}
        onStudentClick={handleStudentLinkClick}
      />
    </div>
  );
};

export default HogwartsPage;
