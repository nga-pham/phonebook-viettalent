import { CHOOSE, ADD } from "../data/constant";

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

export { chooseItem, addNewItem };
