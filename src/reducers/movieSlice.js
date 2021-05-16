import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import client from '../api/jsonServer';
import regeneratorRuntime from 'regenerator-runtime';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (params) => {
  const response = await client.get('/movies', params);
  return response.data;
});

export const sortMoviesInCategory = createAsyncThunk('movies/sortMoviesInCategory', async (params) => {
  const response = await client.get('/movies', params);
  return response.data;
});

export const addNewMovie = createAsyncThunk(
  'movies/addNewMovie',
  async (newMovie) => {
    newMovie.genres = Array.isArray(newMovie.genres) ? newMovie.genres : [newMovie.genres];
    const response = await client.post('/movies', newMovie);
    return response.data;
  },
);

export const updateMovie = createAsyncThunk(
  'movies/updateMovie',
  async (updatedMovie) => {
    const response = await client.put('/movies', updatedMovie);
    return response.data;
  },
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (id) => {
    const response = await client.delete(`/movies/${id}`);
    return id;
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
    category: 'All',
    showMovieHeader: false,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setShowMovieHeader: (state, action) => {
      state.showMovieHeader = action.payload;
    },
    toggleShowMovieHeader: (state, action) => {
      state.showMovieHeader = !state.showMovieHeader;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.moviesData = action.payload.data;
      state.total = action.payload.totalAmount;
      state.offset = action.payload.offset;
      state.limit = action.payload.limit;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewMovie.fulfilled]: (state, action) => {
      return { ...state, moviesData: [action.payload, ...state.moviesData] };
    },
    [addNewMovie.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [updateMovie.fulfilled]: (state, action) => {
      const objIndex = state.moviesData.findIndex(((movie) => movie.id === action.payload.id));
      state.moviesData[objIndex] = action.payload;
    },
    [updateMovie.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      return { ...state, moviesData: state.moviesData.filter(({ id }) => id !== action.payload) };
    },
    [deleteMovie.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      alert(action.error.message);
    },
    [sortMoviesInCategory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.moviesData = action.payload.data;
      state.total = action.payload.totalAmount;
      state.offset = action.payload.offset;
      state.limit = action.payload.limit;
    },
    [sortMoviesInCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { sortBy, setCategory, setShowMovieHeader, toggleShowMovieHeader } = moviesSlice.actions;

export const selectAllMovies = (state) => state.movies !== undefined ? state.movies.moviesData : [];
export const selectTotalFoundMovies = (state) => state.movies !== undefined ? state.movies.total : 0;
export const selectCategory = (state) => state.movies !== undefined ? state.movies.category : 'All';
export const selectShowMovieHeader = (state) => state.movies !== undefined ? state.movies.showMovieHeader : false;

export default moviesSlice.reducer;
