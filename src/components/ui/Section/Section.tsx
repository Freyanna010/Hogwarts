import React from "react";
import clsx from "clsx";

import classes from "./Section.module.scss";
import { SectionProps } from "./Section.types";

const Section: React.FC<SectionProps> = ({
  children,
  typeColor = "none",
  id,
  className,
}) => {
  return (
    <section
      id={id}
      className={clsx(className, classes.section, classes[typeColor])}
    >
      {children}
    </section>
  );
};

export default Section;
