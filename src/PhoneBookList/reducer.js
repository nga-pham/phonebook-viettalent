import { CHOOSE, ADD, SEARCH } from "../data/constant";
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

    case SEARCH:
      const { search_query } = action;
      console.log(search_query);
      if (search_query.length !== 0) {
        // search by name
        let new_data = state.data.filter((item) => {
          return (
            item.name.toLowerCase().indexOf(search_query.toLowerCase()) !== -1
          );
        });

        return {
          ...state,
          data: new_data,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default listReducer;
