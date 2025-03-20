import { FC, useEffect } from "react";
import VideoBg from "@components/ui/VideoBg";
import Routing from "@components/Routing";
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
    <>
      <VideoBg />
      <div className={classes.pageContainer}>
        <Header />
        <main className={clsx(classes.main, classes.customScrollbar)}>
          <Routing />
        </main>
      </div>
    </>
  );
};

export default App;
