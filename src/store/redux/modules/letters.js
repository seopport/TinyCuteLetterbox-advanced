import fakeData from "fakeData";

export const SendLetter = "SendLetter";
export const DeleteLetter = "DeleteLetter";

const initialState = {
  savedLetters: fakeData.data,
};

//action creator
export const sendLetter = (payload) => {
  return {
    type: SendLetter,
    payload,
  };
};

export const deleteLetter = (payload) => {
  return {
    type: DeleteLetter,
    payload,
  };
};

const letters = (state = initialState, action) => {
  switch (action.type) {
    case SendLetter:
      return {
        ...state,
        savedLetters: [...state.savedLetters, action.payload],
      };

    case DeleteLetter:
      const deleteTargetId = action.payload;
      const deletedTargetLetters = state.savedLetters.filter((item) => {
        return item.id !== deleteTargetId;
      });
      return {
        ...state,
        savedLetters: deletedTargetLetters,
      };
    default:
      return state;
  }
};

export default letters;
