import { FC, useState } from "react";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, PlusOutlined } from "@ant-design/icons";
import PopupMenu from "@components/ui/PopupMenu";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import HouseCard from "@components/HouseCard";
import clsx from "clsx";

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
        <h1 className={classes.title} onClick={handleNavigateToHogwartsPage}>
          Hogwarts
        </h1>

        <div className={classes.buttonsRow}>
          <Button
            type="text"
            className={classes.textButton}
            onClick={handleShowHouseMenu}
          >
            Houses
          </Button>

          <Tooltip title="Coming soon">
            <Button
              type="text"
              className={clsx(classes.textButton, classes.development)}
            >
              Shop
            </Button>
          </Tooltip>
        </div>

        <div className={classes.buttonsRow}>
          <Button
            type="text"
            onClick={handleNavigateToFavoritePage}
            size="large"
            icon={<HeartOutlined className={classes.buttonIcon} />}
          />
          <Button
            type="text"
            onClick={handleNavigateCreate}
            size="large"
            icon={<PlusOutlined className={classes.buttonIcon} />}
            className={classes.headerIconButton}
          />
        </div>
      </header>

      {isShowHouseMenu && (
        <PopupMenu>
          {houses.map((house) => (
            <Tooltip key={house.id} title={<span>Feature in development</span>}>
              <div className={classes.development}>
                <HouseCard house={house} type="popupMenu" key={house.id} />
              </div>
            </Tooltip>
          ))}
        </PopupMenu>
      )}
    </>
  );
};

export default Header;
