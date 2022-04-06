import {createSlice} from '@reduxjs/toolkit';
import {Cities, NameSpace, SortTypes} from '../../const';
import {CommentInfo} from '../../types/comment';

type App = {
  city: string,
  sortType: string,
  commentInfo: CommentInfo | null,
  isPostSuccess: boolean,
}

const initialState: App = {
  city: Cities.Paris,
  sortType: SortTypes.Popular,
  commentInfo: null,
  isPostSuccess: false,
};

export const app = createSlice({
  name: NameSpace.App,
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
    isPostSuccess: (state, action) => {
      state.isPostSuccess = action.payload;
    },
  },
});

export const {
  changeCity,
  changeSortType,
  addComment,
  isPostSuccess,
} = app.actions;
