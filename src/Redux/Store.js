import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import tasksReducer from "./Reducers/tasks.reducer";

const store = configureStore({
  // ROOT REDUCER
  reducer: {
    TasksReducer: tasksReducer,
  },
});

export default store;