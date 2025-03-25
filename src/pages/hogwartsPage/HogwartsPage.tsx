import Slider from "@components/ui/Slider";
import { FC } from "react";
import classes from "./HogwartsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import HouseCard from "@components/HouseCard";
import HogwartsBanner from "@components/HogwartsBanner";
import { hogwartsImagesData } from "@store/hogwartsImageData";
import owl from "@assets/owl.png";


const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const hogwartsImages = hogwartsImagesData;
  const navigate = useNavigate();

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };

  return (
    <div className={classes.wrapperHgPageSlider}>

      <div className={classes.hgPageTitle}>
        <img src={owl} className={classes.hgPageSliderImg} />
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
    </div>
  );
};

export default HogwartsPage;
