import Slider from "@components/ui/Slider";
import { FC } from "react";

import classes from "./HogwartsBanner.module.scss";
import { HogwartsBannerProps } from "./HogwartsBanner.types";

const HogwartsBanner: FC<HogwartsBannerProps> = ({ images }) => {
  return (
    <div className={classes.bannerContainer}>
      <h2 className={classes.title}> Hogwarts</h2>
      <p>
        Located in a huge sprawling castle in the Scottish highlands, the
        celebrated school of witchcraft and wizardry taught its young students
        how to finesse their magical skills. From the tallest turrets and towers
        down to the depths of the dungeons (with 142 staircases between them),
        Hogwarts is structurally supported by magic, and even the school's
        headmaster, Albus Dumbledore, doesn’t claim to know all of its secrets!
        Yes, this is the place that
        <a className={classes.bannerLink}>Harry Potter</a> could call home, with
        the wizarding school boasting a rich history, full of mysteries, ghosts,
        talking portraits and much more.
      </p>

      <Slider className={classes.bannerSlider}>
        {images.map((image) => (
          <img src={image.image} className={classes.imageBannerSlider} />
        ))}
      </Slider>
    </div>
  );
};

export default HogwartsBanner;
