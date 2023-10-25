import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTableData,
  createTableData,
  updateTableData,
  deleteTableData,
  fetchTableDataById,
} from "./operation";
import { TableData } from "../../types/tableDate";

interface TableState {
  data: TableData[];
  totalPages: number;
  currentPage: number;
  perPage: number;
}

const initialState: TableState = {
  data: [],
  totalPages: 0,
  currentPage: 1,
  perPage: 10,
};


const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.data = action.payload.results;
        state.totalPages = Math.ceil(action.payload.count / state.perPage); 
      })
      .addCase(createTableData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateTableData.fulfilled, (state, action) => {
        const updatedData = action.payload;
        const existingDataIndex = state.data.findIndex(
          (data) => data.id === updatedData.id
        );
        if (existingDataIndex !== -1) {
          state.data[existingDataIndex] = updatedData;
        }
      })
      .addCase(deleteTableData.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.data = state.data.filter((data) => data.id !== deletedId);
      })
      .addCase(fetchTableDataById.fulfilled, (state, action) => {
        const fetchedData = action.payload;
        const existingDataIndex = state.data.findIndex(
          (data) => data.id === fetchedData.id
        );
        if (existingDataIndex === -1) {
          state.data.push(fetchedData);
        } else {
          state.data[existingDataIndex] = fetchedData;
        }
      });
  },
});


export const { setCurrentPage, setItemsPerPage } = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
