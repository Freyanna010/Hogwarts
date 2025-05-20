import clsx from "clsx";
import classes from "./CustomButton.module.scss"
import { ButtonProps } from "./CustomButton.types";

 const CustomButton: React.FC<ButtonProps> = ({
  children,
  btnType = "default",
  size = "middle",
  className,
  icon,
  ...props
}) => {

  const  isIconOnly = btnType === "icon" && !children
  return (
    <button
      className={clsx(
        classes.button,
        classes[btnType],
        classes[size],
         isIconOnly && classes.iconOnly,
        className
      )}
      {...props}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      {children && <span className={classes.content}>{children}</span>}
    </button>
  );
};

export default CustomButton
