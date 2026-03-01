import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ContactFormType = "contact-form" | "download-brochure-form";

interface IInitialState {
  visibility : boolean;
  type : ContactFormType
}

const initialState : IInitialState = {
  visibility : false,
  type : "contact-form"
}

const contactUsDialgoSlice = createSlice({
  initialState,
  name: "Contact Us Dialog Slice",
  reducers: {
    setContactUsDialogState: (state: IInitialState, action: PayloadAction<IInitialState>) => action.payload
  },
});


export default contactUsDialgoSlice.reducer;
export const { setContactUsDialogState } = contactUsDialgoSlice.actions;