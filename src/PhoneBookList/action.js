import { CHOOSE, ADD, SEARCH } from "../data/constant";

const chooseItem = (key) => {
  return {
    type: CHOOSE,
    key,
  };
};

const addNewItem = (new_item) => {
  return {
    type: ADD,
    new_item,
  };
};

const searchItems = (search_query) => {
  return {
    type: SEARCH,
    search_query,
  };
};

export { chooseItem, addNewItem, searchItems };
