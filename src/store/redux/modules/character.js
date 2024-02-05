export const SelectedCharacter = "SelectedCharacter";
export const ChangeCharacter = "ChangeCharacter";

const initialState = {
  selectedCharacter: "chiikawa",
};

export const changeCharacter = (payload) => {
  return {
    type: ChangeCharacter,
    payload,
  };
};

export const character = (state = initialState, action) => {
  switch (action.type) {
    case ChangeCharacter:
      return {
        ...state,
        selectedCharacter: action.payload,
      };

    default:
      return state;
  }
};
