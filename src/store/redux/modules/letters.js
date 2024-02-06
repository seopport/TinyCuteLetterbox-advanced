import fakeData from "fakeData";

export const SEND_LETTER = "SEND_LETTER";
export const DELETE_LETTER = "DELETE_LETTER";
export const MODIFY_LETTER = "MODIFY_LETTER";

const initialState = {
  savedLetters: fakeData.data,
};

//action creator
export const sendLetter = (payload) => {
  return {
    type: SEND_LETTER,
    payload,
  };
};

export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  };
};
export const modifyLetter = (payload) => {
  return {
    type: MODIFY_LETTER,
    payload,
  };
};

const letters = (state = initialState, action) => {
  switch (action.type) {
    case SEND_LETTER:
      return {
        ...state,
        savedLetters: [...state.savedLetters, action.payload],
      };

    case DELETE_LETTER:
      const deleteTargetId = action.payload;
      const deletedTargetLetters = state.savedLetters.filter((item) => {
        return item.id !== deleteTargetId;
      });
      return {
        ...state,
        savedLetters: deletedTargetLetters,
      };

    case MODIFY_LETTER:
      const modifyTargetId = action.payload.id;
      const modifiedContent = action.payload.modifiedContent;
      const modifiedTargetLetters = state.savedLetters.map((item) => {
        if (item.id === modifyTargetId) {
          return { ...item, content: modifiedContent };
        } else return item;
      });
      return {
        ...state,
        savedLetters: modifiedTargetLetters,
      };
    default:
      return state;
  }
};

export default letters;
