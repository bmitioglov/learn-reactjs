import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import client from '../api/jsonServer';
import regeneratorRuntime from 'regenerator-runtime';
import dynamicSort from '../utils/utils';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (params) => {
  const response = await client.get('/movies', params);
  return response.data;
});

export const addNewMovie = createAsyncThunk(
  'movies/addNewMovie',
  async (newMovie) => {
    return await client.post('/movies', { newMovie });
  },
);

export const updateMovie = createAsyncThunk(
  'movies/updateMovie',
  async (updatedMovie) => {
    return await client.put('/movies', { updatedMovie });
  },
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (deletedMovie) => {
    return await client.delete(`/movies/${deletedMovie.id}`, { deletedMovie });
  },
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesData: [],
    total: 0,
    offset: 0,
    limit: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    sortBy: (state, action) => {
      state.moviesData.sort(dynamicSort(action.payload));
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.moviesData = action.payload.data;
      state.total = action.payload.total;
      state.offset = action.payload.offset;
      state.limit = action.payload.limit;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewMovie.fulfilled]: (state, action) => {
      state.moviesData.push(action.payload);
    },
    [addNewMovie.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [updateMovie.fulfilled]: (state, action) => {
      const objIndex = state.moviesData.findIndex((movie => movie.id === action.payload.id));
      state.moviesData[objIndex] = action.payload;
    },
    [updateMovie.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.moviesData = state.moviesData.filter(({id}) => id !== action.payload.id);
    },
    [deleteMovie.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  }
});

export const { sortBy } = moviesSlice.actions;

export const selectAllMovies = (state) => state.movies.moviesData;

export default moviesSlice.reducer;
