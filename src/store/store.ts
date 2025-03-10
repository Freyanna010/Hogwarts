import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "@features/studentsSlice";
import housesSlice from "@features/hоusesSlice";

export const store = configureStore({
  reducer: {
    students: studentSlice,
    houses: housesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
