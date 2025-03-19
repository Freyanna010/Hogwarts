import { FC } from "react";
import { Button } from "antd";
import classes from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>Hogwarts</h1>
      <Button
        type="text"
        // onClick={handleShowStudentsClick}
        style={{ textTransform: "uppercase" }}
      >
        {/* {showFavorites ? "All students" : "Favorite students"} */}
      </Button>
      <Button
        type="text"
        // onClick={handleNavigateCreate}
        // icon={<PlusOutlined />}
      />
    </header>
  );
};

export default Header;
