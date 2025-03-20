import { FC, useCallback, useEffect, useRef, useState } from "react";
import classes from "./Slider.module.scss";
import { Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { getSlideClass } from "./utils";
import clsx from "clsx";
import { SliderProps } from "./Slider.types";

const Slider: FC<SliderProps> = (props) => {
  const { children, className, autoSwitch = true, switchTimer = 2500 } = props;

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const totalSlides = children.length;
  const intervalRef = useRef<number | null>(null);

  const handlePrevSlide = useCallback(() => {
    setActiveSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides,
    );
  }, [totalSlides]);

  const handleNextSlide = useCallback(() => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const startAutoSlider = useCallback(() => {
    if (autoSwitch && switchTimer !== null) {
      intervalRef.current = window.setInterval(handleNextSlide, switchTimer);
    }
  }, [autoSwitch, switchTimer, handleNextSlide]);

  const stopAutoSlider = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlider();
    return stopAutoSlider;
  }, [startAutoSlider, stopAutoSlider]);

  // TODO: Добавить свайпы
  return (
    <div
      className={clsx(classes.sliderContainer, className)}
      onMouseEnter={stopAutoSlider}
      onMouseLeave={startAutoSlider}
    >
      <Button
        icon={
          // TODO: Убрать стили
          <DoubleLeftOutlined
            style={{ fontSize: "50px", color: "rgba(250, 255, 151, 0.921)" }}
          />
        }
        shape="circle"
        onClick={handlePrevSlide}
        type="text"
        size="large"
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
        icon={
          <DoubleRightOutlined
            style={{ fontSize: "50px", color: "rgba(250, 255, 151, 0.921)" }}
          />
        }
        shape="circle"
        type="text"
        onClick={handleNextSlide}
        className={clsx(classes.buttons, classes.nextButton)}
      />
    </div>
  );
};

export default Slider;
