import Slider from "@components/ui/Slider";
import HouseCard from "@components/HouseCard";
import { FC } from "react";
import classes from "./HogvartsPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

const HogwartsPage: FC = () => {
  const navigate = useNavigate();
  const houses = useSelector((state: RootState) => state.houses.houses);

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };

  return (
    <Slider className={classes.hgPageSlider}>
      {houses.map(({house}) => (
        <HouseCard
        house = {house}
       
          onCardClick={() => navigateToHousePage(name)}
        />
      ))}
    </Slider>
  );
};

export default HogwartsPage;
