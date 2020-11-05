import { CHOOSE, ADD } from "../data/constant";
import data from "../data/response.json";

const addItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return action.new_item;

    default:
      return state;
  }
};

const listReducer = (state = { key: 0, data: data }, action) => {
  switch (action.type) {
    case CHOOSE:
      return {
        key: action.key,
        data: state.data,
      };

    case ADD:
      return {
        ...state,
        data: [...state.data, addItemReducer({}, action)],
      };
    default:
      return state;
  }
};

export default listReducer;
