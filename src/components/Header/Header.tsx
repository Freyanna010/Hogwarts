import { FC, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, PlusOutlined } from "@ant-design/icons";
import PopupMenu from "@components/ui/PopupMenu";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import HouseCard from "@components/HouseCard";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const navigate = useNavigate();
  const houses = useSelector((state: RootState) => state.houses.houses);

  const [isShowHouseMenu, setIsShowHouseMenu] = useState(false);

  const handleNavigateToHogwartsPage = () => {
    navigate("/Hogwarts/");
  };
  const handleNavigateToFavoritePage = () => {
    navigate("/Hogwarts/students/favorites");
  };
  const handleNavigateCreate = () => {
    navigate("/Hogwarts/students/create-student");
  };
  const handleShowHouseMenu = () => {
    setIsShowHouseMenu(!isShowHouseMenu);
  };

  return (
    <>
      <header className={classes.header}>
        <h1
          className={classes.headerTitle}
          onClick={handleNavigateToHogwartsPage}
        >
          Hogwarts
        </h1>

        <div className={classes.headerButtonsRow}>
          <Button
            type="text"
            className={classes.headerTextButton}
            onClick={handleShowHouseMenu}
          >
            Houses
          </Button>

          <Button type="text" className={classes.headerTextButton}>
            Shop
          </Button>
        </div>

        <div className={classes.headerButtonsRow}>
          <Button
            type="text"
            onClick={handleNavigateToFavoritePage}
            size="large"
            icon={<HeartOutlined className={classes.headerIconButton} />}
          />
          <Button
            type="text"
            onClick={handleNavigateCreate}
            size="large"
            icon={<PlusOutlined className={classes.headerIconButton} />}
            className={classes.headerIconButton}
          />
        </div>
      </header>

      {isShowHouseMenu && (
        <PopupMenu>
          {houses.map((house) => (
            <HouseCard house={house} type="popupMenu" />
          ))}
        </PopupMenu>
      )}
    </>
  );
};

export default Header;
