import { configureStore } from "@reduxjs/toolkit";

export const redux = configureStore({
  playlist: playlistReduce,
});
