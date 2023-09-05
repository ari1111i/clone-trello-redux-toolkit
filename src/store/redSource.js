import { createSlice } from "@reduxjs/toolkit";

const redSource = createSlice({
  name: "redSource",
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
      console.log("action", action);
    },
    addCard: (state, action) => {
      console.log("action", action);
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
  },
});
export const { addList, addCard } = redSource.actions;
export default redSource.reducer;
