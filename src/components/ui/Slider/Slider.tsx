import { FC, ReactElement, useEffect, useRef, useState } from "react";
import classes from "./Slider.module.scss";
import { Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { getSlideClass } from "./utils";
import clsx from "clsx";
import { useEffectEvent } from "@hooks/useEffectEvent";

interface SliderProps {
  children: ReactElement[];
  className?: string;
  autoSwitch?: boolean;
  switchTimer?: number | null;
}

const Slider: FC<SliderProps> = ({
  children,
  className,
  autoSwitch = true,
  switchTimer = 3000,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const totalSlides = children.length;
  const intervalRef = useRef<number | null>(null);

  const handlePrevSlide = () => {
    setActiveSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides,
    );
  };
  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const startAutoSlider = useEffectEvent(() => {
    if (autoSwitch && switchTimer !== null) {
      intervalRef.current = window.setInterval(handleNextSlide, switchTimer);
    }
  });
  const stopAutoSlider = useEffectEvent(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  });

  useEffect(() => {
    startAutoSlider();
    return stopAutoSlider();
  }, [stopAutoSlider, startAutoSlider]);

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
