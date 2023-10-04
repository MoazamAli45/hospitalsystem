import { api } from "../api/api";
import axios from "axios";
import { API_URL } from "../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: "",
  updateProfile: false,
  loadingPass: false,
  updatePass: false,
  loadingProf: false,
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, thunkApi) => {
    try {
      const user = await axios.post(
        `${API_URL}/api/v1/users/auth/signup`,
        data
      );
      // console.log(user.data);
      localStorage.setItem("jwt", user.data.token);
      return user.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const user = await axios.post(`${API_URL}/api/v1/users/auth/login`, data);
    console.log(user.data);
    localStorage.setItem("jwt", user.data.token);
    return user.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data);
  }
});

export const updateMe = createAsyncThunk(
  "auth/updateMe",
  async (data, thunkApi) => {
    try {
      const user = await api.patch("/api/v1/users/updateMe", data);
      return user.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await localStorage.removeItem("jwt");
});
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (data, thunkApi) => {
    try {
      const user = await api.patch("/api/v1/users/updateMyPassword", data);
      return user.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getMe",
  async (data, thunkApi) => {
    try {
      const user = await api.get("/api/v1/users/me");
      // console.log(user.data);
      return user.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.updateProfile = false;
      state.updatePass = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload.data.user;
      state.error = "";
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload.data.user;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message;
    });

    //   Logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = "Something went wrong";
    });

    //  update password
    builder.addCase(updatePassword.pending, (state) => {
      state.loadingPass = true;

      state.isLoading = false;
    });
    builder.addCase(updatePassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.loadingPass = false;
      state.isAuth = true;
      state.user = payload.data.user;
      state.updatePass = true;
      state.error = "";
    });
    builder.addCase(updatePassword.rejected, (state, { payload }) => {
      state.loadingPass = false;
      state.isLoading = false;
      state.error = payload?.message;
    });

    //  update Me
    builder.addCase(updateMe.pending, (state) => {
      state.loadingProf = true;
    });
    builder.addCase(updateMe.fulfilled, (state, { payload }) => {
      state.loadingProf = false;
      state.isAuth = true;
      state.user = payload.data.user;
      state.updateProfile = true;
      state.error = "";
    });
    builder.addCase(updateMe.rejected, (state, { payload }) => {
      state.loadingProf = false;
      state.error = payload?.message;
    });

    //   GET me

    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload.data.user;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.message;
    });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
