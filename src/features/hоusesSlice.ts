import { createSlice } from "@reduxjs/toolkit";
import housesData from "@store/housesData.json"; 
import { House } from "@types";

interface HousesState {
  houses: House[];
}

const initialState: HousesState = {
  houses: housesData.houses
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
});

export default housesSlice.reducer;
