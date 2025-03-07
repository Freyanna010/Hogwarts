import React, { FC, ReactElement, useState } from "react";
import classes from "./Slider.module.scss";
import { Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { getSlideClass } from "./utils";
import clsx from "clsx";

interface SliderProps {
  children: ReactElement[];
}

const Slider: FC<SliderProps> = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const totalSlides = children.length;

  const handlePrevSlide = () => {
    setActiveSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides,
    );
    console.log(activeSlideIndex);
  };

  const handleNextSlide = () =>
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);

  return (
    <div className={classes.sliderContainer}>
      <Button
        icon={<DoubleLeftOutlined />}
        shape="circle"
        onClick={handlePrevSlide}
        className={clsx(classes.buttons, classes.prevButton)}
      />
      <div className={classes.slider}>
        {children.map((child, index) => {
          const slideClass = clsx(
            classes.slide,
            getSlideClass(index, activeSlideIndex, totalSlides, {
              active: classes.active,
              next: classes.next,
              prev: classes.prev,
            }),
          );

          return (
            <div key={index} className={slideClass}>
              {child}
            </div>
          );
        })}
      </div>

      <Button
        icon={<DoubleRightOutlined />}
        shape="circle"
        onClick={handleNextSlide}
        className={clsx(classes.buttons, classes.nextButton)}
      />
    </div>
  );
};

export default Slider;
