import { CHOOSE } from "../data/constant";
import data from "../data/response.json";

const listReducer = (state = { key: 0, data: data }, action) => {
  switch (action.type) {
    case CHOOSE:
      return {
        key: action.key,
        data: state.data,
      };

    default:
      return state;
  }
};

export default listReducer;
