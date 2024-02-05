import fakeData from "fakeData";

export const SendLetter = "SendLetter";
export const ModifyLetter = "ModifyLetter";
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

export const modityLetter = (payload) => {
  return {
    type: ModifyLetter,
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
    case ModifyLetter:
      return {
        ...state,
        // savedLetters: [...action.payload],
        // setSavedLetters([
        //     ...savedLetters,
        // ])
      };

    case DeleteLetter:
      return {
        ...state,
        savedLetters: [...action.payload],
      };
    default:
      return state;
  }
};

export default letters;
