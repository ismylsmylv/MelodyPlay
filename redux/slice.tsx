import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import * as MediaLibrary from "expo-media-library";
// Define a type for the slice state
interface playerState {
  value: number;
  music: object;
  musicFiles: [];
  status: "";
}

// Define the initial state using that type
const initialState: playerState = {
  value: 0,
  music: {},
  musicFiles: [],
  status: "",
};
export const fetchMusicFiles = createAsyncThunk(
  "music/fetchMusicFiles",
  async () => {
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted) {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
      });
      return media.assets;
    }
    return [];
  }
);
export const playerSlice = createSlice({
  name: "player",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setMusic: (state, action: PayloadAction<object>) => {
      state.music = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusicFiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMusicFiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.musicFiles = action.payload;
      })
      .addCase(fetchMusicFiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, incrementByAmount, setMusic } =
  playerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.player.value;

export default playerSlice.reducer;
