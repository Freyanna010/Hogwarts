import { FC } from "react";
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
import { useHogwartsPage } from "./hooks/useHogwarstPage";

const HogwartsPage: FC = () => {
  const {
    houses,
    students,
    hogwartsImages,
    isShowModal,
    handleHouseCardClick,
    handleImageClick,
    handleCloseModal,
    handleGoToHogwartsClick,
    handleStudentLinkClick,
  } = useHogwartsPage();

  return (
    <div className={classes.slider}>
      {isShowModal && (
        // TODO:МОДАЛКА: вынести в ui-компонент
        <LetterModal
          onCloseClick={handleCloseModal}
          onGoClick={handleGoToHogwartsClick}
        />
      )}
      <ManSection handleImageClick={handleImageClick} />
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
