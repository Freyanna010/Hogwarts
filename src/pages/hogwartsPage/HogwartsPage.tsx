import Slider from "@components/ui/Slider";
import { FC, useState } from "react";
import classes from "./HogwartsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import HouseCard from "@components/HouseCard";
import HogwartsBanner from "@components/HogwartsBanner";
import { hogwartsImagesData } from "@store/hogwartsImageData";
import owl from "@assets/owl.png";
import LetterModal from "@components/LetterModal/LetterModal";
import three from "@assets/three.png";
import { Tooltip } from "antd";
import { chooseStudentById } from "@features/studentsSlice";

const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const students = useSelector((state: RootState) => state.students.allStudents);
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

      {/* TODO: вынести div контейнер в ui компонет, который задает высоту и позиционирование или просто общий класс для дивов ⬇*/}
      <div className={classes.hgPageTitle}>

        <Tooltip
        title="I have a letter for you!"
        open={isShowTooltip}
        placement="right"
   
      >
              {/* TODO: вынести div контейнер в ui компонет, который задает высоту и позиционирование или просто общий класс для дивов ⬇*/}
        <img
          src={owl}
          className={classes.hgPageSliderImg}
          onClick={handleImageClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Tooltip>
        <h1 className={classes.titleMain}>Welcome to Hogwarts</h1>
      </div>

      {/* TODO: вынести div контейнер в ui компонет который задает высоту и позиционирование или просто общий класс для дивов ⬇*/}
      <div className={classes.hgPageBanner}>
        {/*TODO: не выносить в отдельный компоненет ⬇ */}
        <HogwartsBanner images={hogwartsImages} />
      </div>

      <div className={classes.hgPageSlider}>
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
      </div>

      {/* TODO: вынести div контейнер в ui компонет который задает высоту и позиционирование или просто общий класс для дивов ⬇*/}
      <div className={classes.hgPageThree}>

        {/* TODO: оставить так или вынести как HogwartsBanner ⬆*/}
        <div className={classes.hgPageThreeBg}>
          <div className={classes.hgPageThreeColumn}>
            <h2 className={classes.title}>The famous three</h2>
            <p>
              {/*TODO: править ссылки - React.Fragment? */}
      {["Harry Potter", "Ron Weasley", "Hermione Granger"].map((name) => {
        const student = students.find((s) => s.name === name);
        return student ? (
          <a
            key={student.id}
            href={`/students/${student.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(student.id);
            }}
          >
            {name}
          </a>
        ) : (
          name
        );
      })}
      {" "}are students at Hogwarts School of Witchcraft and Wizardry. Together, they faced many challenges and
      defeated a terrifying monster that threatened the school. With
      Harry’s bravery, Ron’s loyalty, and Hermione’s cleverness, they
      proved that true friendship and courage can overcome even the
      darkest dangers.
    </p>
          </div>

          <div className={classes.hgPageThreeImage}>
            <img src={three} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HogwartsPage;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

