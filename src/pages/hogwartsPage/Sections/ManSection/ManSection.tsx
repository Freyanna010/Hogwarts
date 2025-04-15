import { FC } from "react";
import { Tooltip } from "antd";
import owl from "@assets/owl.png";
import classes from "./ManSection.module.scss";
import AnimatedImage from "@components/ui/AnimatedImage";
import Section from "@components/ui/Section/Section";
import { ManSectionProps } from "./ManSection.types";

const ManSection: FC<ManSectionProps> = (props) => {
  const {
    isShowTooltip,
    handleImageClick,
    handleMouseEnterModal,
    handleMouseLeaveModal,
  } = props;

  return (
    <Section id="section1" className={classes.manSection}>
      <Tooltip
        title="I have a letter for you!"
        open={isShowTooltip}
        placement="right"
        mouseEnterDelay={0.7}
      >
        <AnimatedImage
          src={owl}
          type="swing"
          className={classes.imgOwl}
          onClick={handleImageClick}
          onMouseEnter={handleMouseEnterModal}
          onMouseLeave={handleMouseLeaveModal}
        />
      </Tooltip>

      <h1 className={classes.title}>Welcome to Hogwarts</h1>

      <nav>
        <a href="#section2">About Hogwarts</a>
        <a href="#section3">Houses</a>
        <a href="#section4">Famous three</a>
      </nav>
    </Section>
  );
};

export default ManSection;
