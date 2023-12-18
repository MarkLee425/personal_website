import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer, themeSliceReducer } from "./slices";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    theme: themeSliceReducer, 
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
