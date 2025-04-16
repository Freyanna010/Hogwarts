import { FC } from "react";

import { HouseCardProps, HouseCardType } from "./HouseCard.type";
import SliderHouseCard from "./SliderHouseCard/SliderHouseCard";
import BannerHouseCard from "./BannerHouseCard/BannerHouseCard";
import PopupMenuHouseCard from "./PopupMenuHouseCard/PopupMenuHouseCard";

const HouseCard: FC<HouseCardProps> = (props) => {
  const { house, onCardClick, type, className } = props;

  const componentMap: Record<HouseCardType, JSX.Element> = {
    slider: (
      <SliderHouseCard
        house={house}
        onCardClick={onCardClick}
        className={className}
      />
    ),

    banner: <BannerHouseCard house={house} className={className} />,

    popupMenu: (
      <PopupMenuHouseCard
        house={house}
        className={className}
        onCardClick={onCardClick}
      />
    ),
  };

  if (type) {
    return componentMap[type] || <p>no cards</p>;
  }
};
export default HouseCard;
