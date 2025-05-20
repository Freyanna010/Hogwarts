export interface AnimatedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: AnimatedImageType;
  className?: string;
  onClick?: () => void
}

type AnimatedImageType = "swing" | "zoom";
