import { configureStore } from "@reduxjs/toolkit";
import contactUsDialogSlice from "./slice/contactUsDialogSlice";
import mobileSliderSlice from "./slice/mobileSliderSlice";

export const store = configureStore({
  reducer: {
     contactUsDialog : contactUsDialogSlice,
     mobileSlider : mobileSliderSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;