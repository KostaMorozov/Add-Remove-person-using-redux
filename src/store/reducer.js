import * as actions from "./actions";

const initialState = {
  persons: [],
};

export const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PERSON:
      const persons = {};
      return {
        ...state,
        persons: state.persons.concat({
          id: new Date(),
          name: action.payload.name,
          age: action.payload.age,
        }),
      };
    case actions.REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
