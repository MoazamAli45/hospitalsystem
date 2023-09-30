import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  complaints: [],
  complaint: null,
  isLoading: false,
  error: "",
};

export const createComplaint = createAsyncThunk(
  "complaint/createComplaint",
  async (data, thunkApi) => {
    try {
      const complaint = await api.post("/api/v1/complaints", data);
      return complaint.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const getAllComplaints = createAsyncThunk(
  "complaint/getAllComplaints",
  async (data, thunkApi) => {
    try {
      const complaints = await api.get("/api/v1/complaints");
      console.log(complaints.data);
      return complaints.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const getAllocateComplaints = createAsyncThunk(
  "/complaint/getAllocateComplaints",
  async (data, thunkApi) => {
    try {
      const complaints = await api.get(
        "/api/v1/complaints/allocate-complaints"
      );

      return complaints.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const getPendingComplaints = createAsyncThunk(
  "complaint/getPendingComplaints",
  async (data, thunkApi) => {
    try {
      const complaints = await api.get("/api/v1/complaints/pending-complaints");
      return complaints.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const getCompletedComplaints = createAsyncThunk(
  "complaint/getCompletedComplaints",
  async (data, thunkApi) => {
    try {
      const complaints = await api.get(
        "/api/v1/complaints/completed-complaints"
      );

      return complaints.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

//  Get one complaint
export const getComplaint = createAsyncThunk(
  "complaint/getcomplaint",
  async (id, thunkApi) => {
    try {
      const complaint = await api.get(`/api/v1/complaints/${id}`);
      return complaint.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

//  Update Complaint
export const updateComplaint = createAsyncThunk(
  "complaint/updateComplaint",
  async (data, thunkApi) => {
    try {
      const complaint = await api.patch(
        `/api/v1/complaints/${data.id}`,
        data.data
      );
      return complaint.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

const complaintSlice = createSlice({
  name: "complaint",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = "";
      state.isLoading = false;
      state.complaint = null;
      state.complaints = [];
    },
  },

  extraReducers: (builder) => {},
});

export default complaintSlice.reducer;
export const { reset } = complaintSlice.actions;
