import { FC, useEffect } from "react";
import VideoBg from "@shared/ui/VideoBg";
import Header from "@components/Header";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { fetchStudentsData } from "@features/studentsThunks";
import { AppDispatch } from "@store/store";

import classes from "./App.module.scss";
import { AppRouter } from "./provider/RouterProvider";

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
          <AppRouter />
        </main>
      </div>
    </>
  );
};

export default App;
