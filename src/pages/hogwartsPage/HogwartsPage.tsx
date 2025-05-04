import { FC } from "react";
import HogwartsLetterModal from "@components/HogwartsLetterModal";

import classes from "./HogwartsPage.module.scss";
import ManSection from "./Sections/ManSection/ManSection";
import AboutHogwartsSection from "./Sections/AboutHogwartsSection";
import HousesSection from "./Sections/HousesSection";
import FamousThreeSection from "./Sections/FamousThreeSection";
import { useHogwartsPage } from "./hooks";

const HogwartsPage: FC = () => {
  const {
    houses,
    students,
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
        <HogwartsLetterModal
          onClose={handleCloseModal}
          onGo={handleGoToHogwartsClick}
          isOpen={isShowModal}
        />
      )}

      <ManSection handleImageClick={handleImageClick} />
      <AboutHogwartsSection />
      <HousesSection houses={houses} onCardClick={handleHouseCardClick} />
      <FamousThreeSection
        students={students}
        onStudentClick={handleStudentLinkClick}
      />
    </div>
  );
};

export default HogwartsPage;
