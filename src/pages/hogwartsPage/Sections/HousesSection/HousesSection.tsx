import Section from "@components/ui/Section";
import { FC } from "react";
import HouseCard from "@components/HouseCard";
import Slider from "@components/ui/Slider";

import { HousesSectionProps } from "./HousesSection.types";
import classes from "./HousesSection.module.scss";

const HousesSection: FC<HousesSectionProps> = ({ onCardClick, houses }) => (
  <Section id="section3">
    <h2 className={classes.title}>Hogwarts Houses</h2>
    <Slider className={classes.slider}>
      {houses.map((house) => (
        <HouseCard
          key={house.id}
          house={house}
          onCardClick={onCardClick}
          type="slider"
        />
      ))}
    </Slider>
  </Section>
);

export default HousesSection;
