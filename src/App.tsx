import "./App.css";
import { ConfigProvider } from "antd";
import { hogwartsTheme } from "@/styles/theme";
import VideoBg from "./componets/ui/VideoBg";
import Container from "./componets/ui/Container";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => (
  <ConfigProvider theme={hogwartsTheme}>
    <VideoBg />
    <Container>
      <Routes />
    </Container>
  </ConfigProvider>
);

export default App;
