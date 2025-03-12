import { FC, ReactElement, useEffect, useRef, useState } from "react";
import classes from "./Slider.module.scss";
import { Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { getSlideClass } from "./utils";
import clsx from "clsx";

interface SliderProps {
  children: ReactElement[];
  className?: string;
}

const Slider: FC<SliderProps> = ({ children, className }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const totalSlides = children.length;
  const intervalRef = useRef<number | null>(null);

  const handlePrevSlide = () => {
    setActiveSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides,
    );
    console.log(activeSlideIndex);
  };

  // TODO: warning  The 'handleNextSlide' function makes the dependencies of useEffect Hook (at line 34) change on every render. To fix this, wrap the definition of 'handleNextSlide' in its own useCallback() Hook  react-hooks/exhaustive-deps
  const handleNextSlide = () =>
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);

  useEffect(() => {
    intervalRef.current = window.setInterval(handleNextSlide, 3000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [handleNextSlide]);

  return (
    <div className={clsx(classes.sliderContainer, className)}>
      <Button
        icon={<DoubleLeftOutlined style={{ fontSize: "50px", color:"rgba(250, 255, 151, 0.921)" }}/>}
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
        icon={<DoubleRightOutlined   style={{ fontSize: "50px", color:"rgba(250, 255, 151, 0.921)" }}/>}
        shape="circle"
        type="text"
   
        onClick={handleNextSlide}
        className={clsx(classes.buttons, classes.nextButton)}
      />
    </div>
  );
};

export default Slider;
