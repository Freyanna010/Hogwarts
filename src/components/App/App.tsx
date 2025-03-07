import { ConfigProvider } from "antd";
import { FC } from "react";
import { hogwartsTheme } from "@styles/theme";
import VideoBg from "@components/ui/VideoBg";

import Routing from "@components/Routing";
import Layout, { Content } from "antd/es/layout/layout";
import classes from "./App.module.scss";
import Header from "@components/Header";
import clsx from "clsx";

const App: FC = () => (
  <ConfigProvider theme={hogwartsTheme}>
    <Layout className={classes.layout}>
      <VideoBg />
      <Header />
      <Content className={clsx(classes.content, classes.customScrollbar)}>
        {/* <div style={{ height: "200vh", background: "red" }}>test</div> */}
        <Routing />
      </Content>
    </Layout>
  </ConfigProvider>
);

export default App;
