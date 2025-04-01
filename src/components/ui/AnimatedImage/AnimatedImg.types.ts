export interface AnimatedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: AnimatedImageType;
  className?: string;
}

type AnimatedImageType = "swing" | "zoom";
