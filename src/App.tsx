import "./App.css";
import { ConfigProvider } from "antd";
import { hogwartsTheme } from "@/styles/theme";
import VideoBg from "./componets/ui/VideoBg";
import Container from "./componets/ui/Container";
import { FC } from "react";
import Routing from "./componets/Routing";


const App: FC = () => (
  <ConfigProvider theme={hogwartsTheme}>
    <VideoBg />
    <Container>
      <Routing />
    </Container>
  </ConfigProvider>
);

export default App;
