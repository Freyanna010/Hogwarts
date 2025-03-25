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

const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const hogwartsImages = hogwartsImagesData;
  const navigate = useNavigate();
  const [isShowModal, seIsShowModal] = useState(false);

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };
  const handleImageClick = () => seIsShowModal(!isShowModal);
  const handleCloseClick = () => seIsShowModal(false);
  const handleGoClick = () => navigate("/create-student");

  return (
    <div className={classes.wrapperHgPageSlider}>
      {isShowModal && (
        <LetterModal
          onCloseClick={handleCloseClick}
          onGoClick={handleGoClick}
        />
      )}

      <div className={classes.hgPageTitle}>
        <img
          src={owl}
          className={classes.hgPageSliderImg}
          onClick={handleImageClick}
        />

        <h1 className={classes.titleMain}>Welcome to Hogwarts</h1>
      </div>

      <div className={classes.hgPageBanner}>
        <HogwartsBanner images={hogwartsImages} />
      </div>

      <div className={classes.hgPageSlider}>
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

      <div className={classes.hgPageThree}>
        <div className={classes.hgPageThreeBg}>
          <div className={classes.hgPageThreeColumn}>
            <h2 className={classes.title}>The famous three</h2>
            <p>
              Harry, Ron, and Hermione are students at Hogwarts School of
              Witchcraft and Wizardry. Together, they faced many challenges and
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
