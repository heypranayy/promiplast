import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const mobileSliderSlice = createSlice({
  initialState: false,
  name: "Mobile slider",
  reducers: {
    setMobileSliderStateVisibility: (state: boolean, action: PayloadAction<boolean>) =>
      action.payload,
  },
});

export default mobileSliderSlice.reducer;
export const { setMobileSliderStateVisibility } = mobileSliderSlice.actions;
