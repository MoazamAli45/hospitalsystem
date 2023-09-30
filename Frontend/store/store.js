import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import complaintReducer from "./complaintReducer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    complaint: complaintReducer,
  },
});
