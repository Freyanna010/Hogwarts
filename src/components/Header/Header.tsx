import { FC } from "react";
import { Header as AntdHeder } from "antd/es/layout/layout";
import { Button } from "antd";
import classes from "./Header.module.scss";

const Header: FC = () => {
  return (
    <AntdHeder className={classes.header}>
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
    </AntdHeder>
  );
};

export default Header;
