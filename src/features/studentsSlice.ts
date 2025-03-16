import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStudentDataById, fetchStudentsData } from "./studentsThunks";
import { Student } from "../types/types";

interface StudentsState {
  allStudents: Student[];
  favoriteStudents: string[];
  houseStudents: Student[];
  currentStudent: null | Student;
  isStudentsLoading: boolean;
  errorMessage: null | string;
  isStudentLoading: boolean;
}

const initialState: StudentsState = {
  allStudents: [],
  houseStudents: [],
  favoriteStudents: [],
  currentStudent: null,
  isStudentsLoading: false,
  errorMessage: null,
  isStudentLoading: false,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.allStudents = state.allStudents.filter(
        (student) => student.id !== action.payload
      );
      state.houseStudents = state.houseStudents.filter(
        (student) => student.id !== action.payload
      );
    },
    addFavoriteStudents: (state, action: PayloadAction<string>) => {
      if (state.favoriteStudents.includes(action.payload)) {
        state.favoriteStudents = state.favoriteStudents.filter(
          (id) => id !== action.payload
        );
      } else {
        state.favoriteStudents.push(action.payload);
      }
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
      state.houseStudents = state.allStudents.filter(
        (student) => student.house === action.payload
      );
    },

    sortStudentByName: (state, action: PayloadAction<string>) => {
      if (action.payload === "a-z") {
        state.houseStudents.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === "z-a") {
        state.houseStudents.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
    showFavoriteStudents: (state) => {
      state.houseStudents = state.allStudents.filter((student) =>
        state.favoriteStudents.includes(student.id)
      );
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
  addFavoriteStudents,
  addNewStudent,
  chooseStudentById: addStudentById,
  filterStudentsByHouse,
  showFavoriteStudents,
  chooseStudentById,
  sortStudentByName
} = studentsSlice.actions;
export default studentsSlice.reducer;
