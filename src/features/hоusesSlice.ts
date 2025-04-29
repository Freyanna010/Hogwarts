import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import housesData from "@store/housesData.json";
import { House } from "shared/types";

interface HousesState {
  houses: House[];
  currentHouse: null | House;
}

const initialState: HousesState = {
  houses: housesData.houses,
  currentHouse: null,
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    chooseHouseByName: (state, action: PayloadAction<string>) => {
      state.currentHouse =
        state.houses.find((house) => house.name === action.payload) ?? null;
    },
  },
});

export const { chooseHouseByName } = housesSlice.actions;

export default housesSlice.reducer;
