import Slider from "@components/ui/Slider";
import { FC } from "react";
import classes from "./HogwartsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import HouseCard from "@components/HouseCard";
import HogwartsBanner from "@components/HogwartsBanner";
import { hogwartsImagesData } from "@store/hogwartsImageData";

const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const hogwartsImages = hogwartsImagesData;
  const navigate = useNavigate();

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };

  return (
    <div className={classes.hgPage}>
      <div className={classes.hgPageSlider}>
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

      <div className={classes.hgPageBanner}>
        <HogwartsBanner images={hogwartsImages} />
      </div>
    </div>
  );
};

export default HogwartsPage;
