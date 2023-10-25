import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { TableData } from "../../types/tableDate";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";

export const fetchTableData = createAsyncThunk(
  "table/fetchTableData",
  async ({ page, perPage }: { page: number; perPage: number }) => {
    try {
      const response: AxiosResponse = await axios.get(
        `/table/?limit=${perPage}&offset=${(page - 1) * perPage}`
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createTableData = createAsyncThunk(
  "table/createTableData",
  async (data: TableData) => {
    try {
      const response: AxiosResponse = await axios.post("/table/", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateTableData = createAsyncThunk(
  "table/updateTableData",
  async (data: TableData) => {
    try {
      const response: AxiosResponse = await axios.put(
        `/table/${data.id}/`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteTableData = createAsyncThunk(
  "table/deleteTableData",
  async (id: number) => {
    try {
      await axios.delete(`/table/${id}/`);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchTableDataById = createAsyncThunk(
  "table/fetchTableDataById",
  async (id: number) => {
    try {
      const response: AxiosResponse = await axios.get(`/table/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
