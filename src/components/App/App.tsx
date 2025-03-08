import { ConfigProvider } from "antd";
import { FC, useEffect } from "react";
import { hogwartsTheme } from "@styles/theme";
import VideoBg from "@components/ui/VideoBg";

import Routing from "@components/Routing";
import Layout, { Content } from "antd/es/layout/layout";
import classes from "./App.module.scss";
import Header from "@components/Header";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { fetchStudentsData } from "@features/studentsThunks";
import { AppDispatch } from "@store/store";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchStudentsData());
  }, [dispatch]);

  return (
    <ConfigProvider theme={hogwartsTheme}>
      <Layout className={classes.layout}>
        <VideoBg />
        <Header />
        <Content className={clsx(classes.content, classes.customScrollbar)}>
              <Routing />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
