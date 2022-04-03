import {createSlice} from '@reduxjs/toolkit';
import {Cities, NameSpace, SortTypes} from '../../const';
import {UseSite} from '../../types/state';

const initialState: UseSite = {
  city: Cities.Paris,
  sortType: SortTypes.Popular,
  commentInfo: {
    comment: '',
    rating: 0,
    id: 0,
  },
};

export const useSite = createSlice({
  name: NameSpace.UseSite,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
    addComment: (state, action) => {
      state.commentInfo = action.payload;
    },
  },
});

export const {changeCity, changeSortType, addComment} = useSite.actions;
