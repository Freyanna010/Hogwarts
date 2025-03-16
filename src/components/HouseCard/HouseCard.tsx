import { FC } from "react";
import { HouseCardProps } from "./HouseCard.type";
import SliderHouseCard from "./SliderHouseCard/SliderHouseCard";
import BannerHouseCard from "./BannerHouseCard/BannerHouseCard";

const HouseCard: FC<HouseCardProps> = ({
  house,
  onCardClick,
  type,
  className,
}) => {
  const componentMap: Record<string, JSX.Element> = {
    slider: (
      <SliderHouseCard
        house={house}
        onCardClick={onCardClick}
        className={className}
      />
    ),
    banner: <BannerHouseCard house={house} className={className} />,
  };

  return componentMap[type] || null;
};
export default HouseCard;
