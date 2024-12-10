"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice"; // Import your auth slice
// Import other reducers if needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});
