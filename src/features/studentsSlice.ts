import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchStudentDataById, fetchStudentsData } from "./studentsThunks";
import { Student } from "../shared/types/types";

interface StudentsState {
  allStudents: Student[];
  favoriteStudents: Student[];
  favoriteStudentsId: string[];
  houseStudents: Student[];
  filteredStudents: Student[];
  currentStudent: null | Student;
  isStudentsLoading: boolean;
  errorMessage: null | string;
  isStudentLoading: boolean;
  searchValue: string;
}

const initialState: StudentsState = {
  allStudents: [],
  houseStudents: [],
  favoriteStudents: [],
  favoriteStudentsId: [],
  filteredStudents: [],
  currentStudent: null,
  isStudentsLoading: false,
  errorMessage: null,
  isStudentLoading: false,
  searchValue: "",
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.allStudents = state.allStudents.filter(
        (student) => student.id !== action.payload,
      );
      state.houseStudents = state.houseStudents.filter(
        (student) => student.id !== action.payload,
      );
    },
    changeFavoriteStudents: (state, action: PayloadAction<string>) => {
      if (state.favoriteStudentsId.includes(action.payload)) {
        state.favoriteStudentsId = state.favoriteStudentsId.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.favoriteStudentsId.push(action.payload);
      }

      state.favoriteStudents = state.allStudents.filter((student) =>
        state.favoriteStudentsId.includes(student.id),
      );
    },

    addNewStudent: (state, action: PayloadAction<Student>) => {
      state.allStudents.unshift(action.payload);
      state.houseStudents.unshift(action.payload);
    },
    chooseStudentById: (state, action: PayloadAction<string>) => {
      state.currentStudent =
        state.allStudents.find((student) => student.id === action.payload) ??
        null;
    },
    filterStudentsByHouse: (state, action: PayloadAction<string>) => {
      const houseName = action.payload.toLowerCase();
      state.houseStudents = state.allStudents.filter(
        (student) => student.house.toLowerCase() === houseName,
      );
      // TODO: копирую здесь
      state.filteredStudents = state.houseStudents;
    },
    filterStudentsBySearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      const searchValue = state.searchValue.toLocaleLowerCase();
      if (searchValue) {
        state.filteredStudents = state.houseStudents.filter((student) =>
          student.name.toLowerCase().includes(searchValue),
        );
        // TODO: добавила  на случай, если полностью очистить инпут
      } else {
        state.filteredStudents = state.houseStudents;
      }
    },
    sortStudentByName: (state, action: PayloadAction<string>) => {
      if (action.payload === "asc") {
        state.filteredStudents = state.filteredStudents.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
      }
      if (action.payload === "desc") {
        state.filteredStudents = state.filteredStudents.sort((a, b) =>
          b.name.localeCompare(a.name),
        );
      }
      if (action.payload === "none") {
        state.filteredStudents = state.houseStudents;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStudentsData.pending, (state) => {
        state.isStudentsLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchStudentsData.fulfilled, (state, action) => {
        state.isStudentsLoading = false;
        state.allStudents = action.payload;
        state.houseStudents = action.payload;
      })
      .addCase(fetchStudentsData.rejected, (state, action) => {
        state.isStudentsLoading = false;
        state.errorMessage = action.payload as string;
      })
      .addCase(fetchStudentDataById.pending, (state) => {
        state.isStudentLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchStudentDataById.fulfilled, (state, action) => {
        state.isStudentLoading = false;
        state.currentStudent = action.payload;
      })
      .addCase(fetchStudentDataById.rejected, (state, action) => {
        state.isStudentLoading = false;
        state.errorMessage = action.payload as string;
      });
  },
});

export const {
  deleteStudent,
  changeFavoriteStudents,
  addNewStudent,
  chooseStudentById: addStudentById,
  filterStudentsByHouse,
  chooseStudentById,
  sortStudentByName,
  filterStudentsBySearch,
} = studentsSlice.actions;
export default studentsSlice.reducer;
