import { FC } from "react";
import { hogwartsImagesData as images } from "@store/hogwartsImageData";
import Section from "@shared/ui/Section";
import Slider from "@shared/ui/Slider";

import classes from "./AboutHogwartsSection.module.scss";

const AboutHogwartsSection: FC = () => (
  <Section id="section2" typeColor="dark">
    <h2 className={classes.title}>Hogwarts</h2>
    <p className={classes.text}>
      Located in a huge sprawling castle in the Scottish highlands, the
      celebrated school of witchcraft and wizardry taught its young students how
      to finesse their magical skills...
    </p>

    <Slider className={classes.slider}>
      {images.map((img) => (
        <img key={img.image} src={img.image} className={classes.sliderImage} />
      ))}
    </Slider>

    <p className={classes.text}>
      Hogwarts was founded over a thousand years ago by four legendary witches
      and wizards—Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and
      Salazar Slytherin. Students are sorted into one of their four houses upon
      arrival, each emphasizing different traits and values.
    </p>
  </Section>
);
export default AboutHogwartsSection;
