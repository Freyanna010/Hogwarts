import Slider from "@components/ui/Slider";
import { FC, useState } from "react";
import classes from "./HogwartsPage.module.scss";
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

const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const students = useSelector(
    (state: RootState) => state.students.allStudents,
  );
  const dispatch = useDispatch<AppDispatch>();
  const hogwartsImages = hogwartsImagesData;

  const navigate = useNavigate();

  const [isShowModal, seIsShowModal] = useState(false);
  const [isShowTooltip, seIsShowTooltip] = useState(false);

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };

  const handleImageClick = () => seIsShowModal(!isShowModal);
  const handleCloseClick = () => seIsShowModal(false);
  const handleGoClick = () => navigate("/create-student");
  const handleMouseEnter = () => seIsShowTooltip(true);
  const handleMouseLeave = () => seIsShowTooltip(false);
  const handleLinkClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  return (
    <div className={classes.wrapperHgPageSlider}>
      {isShowModal && (
        <LetterModal
          onCloseClick={handleCloseClick}
          onGoClick={handleGoClick}
        />
      )}

      {/* TODO: вынести section  ⬇ контейнер в ui компонет, который задает высоту и позиционирование или просто общий класс для дивов*/}
      <section className={classes.hgPageTitle}>
        <Tooltip
          title="I have a letter for you!"
          open={isShowTooltip}
          placement="right"
          mouseEnterDelay={0.7}
        >
          {/* TODO: выести в AnimateImage вместе со стилями анимфции ⬇*/}
          <img
            src={owl}
            className={classes.hgPageSliderImg}
            onClick={handleImageClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Tooltip>
        <h1 className={classes.titleMain}>Welcome to Hogwarts</h1>

        {/* TODO: не работает навигация ⬇*/}
        <Link to="section2" smooth={true} duration={500}>
          About Hogwarts
        </Link>
      </section>

      <Element name="section1">
        {/* TODO: вынести div контейнер в ui компонет который задает высоту и позиционирование или просто общий класс для дивов ⬇*/}
        <section className={classes.hgPageBanner}>
          {/*TODO: не выносить в отдельный компоненет ⬇ */}
          <HogwartsBanner images={hogwartsImages} />
        </section>
      </Element>

      <Element name="section2">
        <section className={classes.hgPageSlider}>
          {/*TODO: такой title eсть на других старницах ⬇*/}
          <h2 className={classes.title}> Hogwarts houses</h2>
          <Slider>
            {houses.map((house) => (
              <HouseCard
                house={house}
                onCardClick={navigateToHousePage}
                type="slider"
              />
            ))}
          </Slider>
        </section>
      </Element>

      <Element name="section2">
        {/* TODO: вынести div контейнер в ui компонет который задает высоту и позиционирование или просто общий класс для дивов ⬇*/}
        <section className={classes.hgPageThree}>
          {/* TODO: оставить содержимое блока так или вынести как HogwartsBanner  в компонент ⬆*/}
          <div className={classes.hgPageThreeBg}>
            <div className={classes.hgPageThreeColumn}>
              <h2 className={classes.title}>The famous three</h2>

              {/*TODO: разобрать, вынести в компонент,утилиты  */}
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
                          handleLinkClick(student.id);
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
