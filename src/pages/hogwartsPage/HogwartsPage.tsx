import Slider from "@components/ui/Slider";
import { FC } from "react";
import classes from "./HogwartsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import HouseCard from "@components/HouseCard";

const HogwartsPage: FC = () => {
  const houses = useSelector((state: RootState) => state.houses.houses);
  const navigate = useNavigate();

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };

  return (
    <Slider className={classes.hgPageSlider}>
      {houses.map((house) => (
        <HouseCard
          house={house}
          onCardClick={navigateToHousePage}
          type="slider"
        />
      ))}
    </Slider>
  );
};

export default HogwartsPage;
