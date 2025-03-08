import Slider from "@components/ui/Slider";
import HouseCard from "@components/HouseCard";
import { houses } from "@store/data";
import { FC } from "react";
import classes from "./HogvartsPage.module.scss";
import { useNavigate } from "react-router-dom";

const HogwartsPage: FC = () => {
  const navigate = useNavigate();

  const navigateToHousePage = (houseName: string) => {
    navigate(`/house/${houseName}`);
  };

  return (
    <Slider className={classes.hgPageSlider}>
      {houses.map(({ id, img, name }) => (
        <HouseCard
          key={id}
          id={id}
          img={img}
          name={name}
          onClick={() => navigateToHousePage(name)}
        />
      ))}
    </Slider>
  );
};

export default HogwartsPage;
