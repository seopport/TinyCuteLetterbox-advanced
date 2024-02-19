import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCharacter: 'chiikawa',
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    changeCharacter: (state, action) => {
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    },
  },
});

export const { changeCharacter } = characterSlice.actions;
export default characterSlice.reducer;
