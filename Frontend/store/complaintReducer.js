import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  complaints: [],
  complaint: null,
  isLoading: false,
  error: "",
  update: false,
  loadingUpdate: false,
  inProgComplaints: [],
};

export const createComplaint = createAsyncThunk(
  "complaint/createComplaint",
  async (data, thunkApi) => {
    try {
      const complaint = await api.post("/api/v1/complaints", data);
      // console.log(complaint.data);
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
      // console.log(complaints.data);
      return complaints.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const getAllocatedComplaints = createAsyncThunk(
  "/complaint/getAllocatedComplaints",
  async (data, thunkApi) => {
    try {
      const complaints = await api.get(
        "/api/v1/complaints/allocated-complaints"
      );

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

export const getInprogressComplaints = createAsyncThunk(
  "complaint/getInprogressComplaints",
  async (data, thunkApi) => {
    try {
      const complaints = await api.get(
        "/api/v1/complaints/inprogress-complaints"
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
      // console.log(complaint.data);
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
      state.update = false;
      state.loadingUpdate = false;
    },
    resetUpdate: (state) => {
      state.update = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createComplaint.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createComplaint.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaint = payload.data.complaint;
      state.error = "";
    });
    builder.addCase(createComplaint.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    builder.addCase(getAllComplaints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllComplaints.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaints = payload.data.complaints;
      state.error = "";
    });
    builder.addCase(getAllComplaints.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    builder.addCase(getAllocateComplaints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllocateComplaints.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaints = payload.data.complaints;
      state.error = "";
    });
    builder.addCase(getAllocateComplaints.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    //    ALLOCATED COMPLAINTS
    builder.addCase(getAllocatedComplaints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllocatedComplaints.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaints = payload.data.complaints;
      state.error = "";
    });
    builder.addCase(getAllocatedComplaints.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });

    builder.addCase(getPendingComplaints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPendingComplaints.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaints = payload.data.complaints;
      state.error = "";
    });
    builder.addCase(getPendingComplaints.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });

    builder.addCase(getCompletedComplaints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompletedComplaints.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaints = payload.data.complaints;
      state.error = "";
    });
    builder.addCase(getCompletedComplaints.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    builder.addCase(getInprogressComplaints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInprogressComplaints.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.inProgComplaints = payload.data.complaints;
      state.error = "";
    });
    builder.addCase(getInprogressComplaints.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
    //  get one complaint
    builder.addCase(getComplaint.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getComplaint.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.complaint = payload.data.complaint;
      state.error = "";
    });
    builder.addCase(getComplaint.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });

    //  update complaint
    builder.addCase(updateComplaint.pending, (state) => {
      state.loadingUpdate = true;
    });

    builder.addCase(updateComplaint.fulfilled, (state, { payload }) => {
      state.loadingUpdate = false;
      state.complaint = payload.data.complaint;
      state.error = "";
      state.update = true;
    });
    builder.addCase(updateComplaint.rejected, (state, { payload }) => {
      state.loadingUpdate = false;
      state.error = payload.message;
    });
  },
});

export default complaintSlice.reducer;
export const { reset, resetUpdate } = complaintSlice.actions;
