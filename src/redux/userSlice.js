import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		name: "john",
		email: "doe@gmail.com",
	},
	reducers: {
		update: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
		},
		remove: (state) => (state = {}),

		addHello: (state, action) => {
			state.name = "Hello " + action.payload.name;
		},
	},
});

export const { update, remove, addHello } = userSlice.actions;
//update is action name
export default userSlice.reducer;
