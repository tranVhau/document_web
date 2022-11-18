import { createAsyncThunk } from "@reduxjs/toolkit";
import documentAPI from "../../api/documentAPI";

//THUNK

export const getAllDocument = createAsyncThunk(
  "document/getAllDocument",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await documentAPI.getAll();
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// get specify document

export const getDocument = createAsyncThunk(
  "document/getDocument",
  async (id, { rejectWithValue }) => {
    try {
      const res = await documentAPI.get(id);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// delete document

export const delDocument = createAsyncThunk(
  "document/deleteDocument",
  async (id, { rejectWithValue }) => {
    try {
      const res = await documentAPI.delete(id);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//

// update document

export const update = createAsyncThunk(
  "document/updateDocument",
  async (payload, { rejectWithValue }) => {
    const { id, document } = payload;
    try {
      const res = await documentAPI.update(id, document);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// new document

export const newDocument = createAsyncThunk(
  "document/newDocument",
  async (payload, { rejectWithValue }) => {
    const { document } = payload;
    try {
      const res = await documentAPI.store(document);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
