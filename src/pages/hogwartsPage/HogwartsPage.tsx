import Slider from "@components/ui/Slider";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import HouseCard from "@components/HouseCard";
import HogwartsBanner from "@components/HogwartsBanner";
import { hogwartsImagesData } from "@store/hogwartsImageData";
import owl from "@assets/owl.png";
import LetterModal from "@components/LetterModal/LetterModal";
import three from "@assets/three.png";
import { Tooltip } from "antd";
import { chooseStudentById } from "@features/studentsSlice";
import React from "react";
import { Link, Element } from "react-scroll";
import AnimatedImage from "@components/ui/AnimatedImage";

import classes from "./HogwartsPage.module.scss";

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
    navigate(`/house/${houseName}`);
  };
  const handleImageClick = () => seIsShowModal(!isShowModal);
  const handleCloseModal = () => seIsShowModal(false);
  const handleGoToHogwartsClick = () => navigate("/students/create-student");
  const handleMouseEnterModal = () => seIsShowTooltip(true);
  const handleMouseLeaveModal = () => seIsShowTooltip(false);
  const handleStudentLinkClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  return (
    <div className={classes.wrapperHgPageSlider}>
      {isShowModal && (
        // TODO: 3️⃣Модальноеe
        <LetterModal
          onCloseClick={handleCloseModal}
          onGoClick={handleGoToHogwartsClick}
        />
      )}

      {/* TODO: 4️⃣Section */}
      <section className={classes.hgPageTitle}>
        <Tooltip
          title="I have a letter for you!"
          open={isShowTooltip}
          placement="right"
          mouseEnterDelay={0.7}
        >
          <AnimatedImage
            src={owl}
            type="swing"
            className={classes.hgPageSliderImg}
            onClick={handleImageClick}
            onMouseEnter={handleMouseEnterModal}
            onMouseLeave={handleMouseLeaveModal}
          />
        </Tooltip>

        <h1 className={classes.titleMain}>Welcome to Hogwarts</h1>

        {/* TODO: 5️⃣Навигация*/}
        <Link to="section2" smooth={true} duration={500}>
          About Hogwarts
        </Link>
      </section>

      <Element name="section1">
        <section className={classes.hgPageBanner}>
          <HogwartsBanner images={hogwartsImages} />
        </section>
      </Element>

      <Element name="section2">
        <section className={classes.hgPageSlider}>
          {/* TODO: 6️⃣Заголовки*/}
          <h2 className={classes.title}> Hogwarts houses</h2>
          {/* TODO: 7️⃣Slider  и HouseCard*/}
          <Slider>
            {houses.map((house) => (
              <HouseCard
                house={house}
                onCardClick={handleHouseCardClick}
                type="slider"
              />
            ))}
          </Slider>
        </section>
      </Element>

      <Element name="section2">
        <section className={classes.hgPageThree}>
          <div className={classes.hgPageThreeBg}>
            <div className={classes.hgPageThreeColumn}>
              <h2 className={classes.title}>The famous three</h2>
              {/* TODO: 8️⃣текст */}
              <p>
                {["Harry", "Ron", "Hermione"].map((firstName, index) => {
                  const student = students.find((s) =>
                    s.name.startsWith(firstName),
                  );

                  return student ? (
                    <React.Fragment key={student.id}>
                      {index > 0 && " "}
                      <a
                        href={`/students/${student.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleStudentLinkClick(student.id);
                        }}
                      >
                        {firstName}
                      </a>
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={firstName}>
                      {index > 0 && " "}
                      {firstName}
                    </React.Fragment>
                  );
                })}{" "}
                are students at Hogwarts School of Witchcraft and Wizardry.
                Together, they faced many challenges and defeated a terrifying
                monster that threatened the school. With Harry’s bravery, Ron’s
                loyalty, and Hermione’s cleverness, they proved that true
                friendship and courage can overcome even the darkest dangers.
              </p>
            </div>

            <div className={classes.hgPageThreeImage}>
              <img src={three} />
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default HogwartsPage;
