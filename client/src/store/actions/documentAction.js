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

export const getLimitDocument = createAsyncThunk(
  "document/getLimitDocument",
  async (limit, { rejectWithValue }) => {
    try {
      const res = await documentAPI.getLimit(limit);
      return res.data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAllPendingDocument = createAsyncThunk(
  "document/getAllDocument",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await documentAPI.getAllPending();
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

//search

export const search = createAsyncThunk(
  "document/search",
  async (keyword, { rejectWithValue }) => {
    try {
      const res = await documentAPI.search(keyword);
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

//get document by category id

export const getByCategory = createAsyncThunk(
  "document/getByCategory",
  async (id, { rejectWithValue }) => {
    try {
      const res = await documentAPI.getByCategory(id);
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

//Rating

export const Rating = createAsyncThunk(
  "user/Rating",
  async (payload, { rejectWithValue }) => {
    try {
      // const { ratingData } = payload;
      const res = await documentAPI.newRating(payload);
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

export const popular = createAsyncThunk(
  "document/popular",
  async (num, { rejectWithValue }) => {
    try {
      const res = await documentAPI.popular(num);
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
