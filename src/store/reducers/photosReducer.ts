import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { photosAPI } from '../../api';
import { IPhoto } from '../../types';

interface IPhotosState {
  photos: IPhoto[];
  totalCount: number;
  page: number;
  search: string;
  isFetching: boolean;
}

const initialState: IPhotosState = {
  photos: [],
  totalCount: 0,
  page: 1,
  search: '',
  isFetching: false,
};

export const getPhotos = createAsyncThunk<
  { photos: IPhoto[]; totalCount: number },
  { page: number; search: string }
>('photos/getPhotos', async ({ page, search }) => {
  return await photosAPI.getPhotos({ page, search });
});

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.photos = [];
      state.search = action.payload;
    },

    setPhotos: (state, action: PayloadAction<IPhoto[]>) => {
      state.photos = action.payload;
    },
  },
  extraReducers: b => {
    b.addCase(getPhotos.pending, state => {
      state.isFetching = true;
    });

    b.addCase(getPhotos.fulfilled, (state, action) => {
      const { photos, totalCount } = action.payload;

      state.photos = [...state.photos, ...photos];
      state.totalCount = totalCount;
      state.isFetching = false;
    });
  },
});

export const { setPage, setSearch, setPhotos } = photosSlice.actions;
