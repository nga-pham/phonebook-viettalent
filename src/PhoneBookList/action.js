import { CHOOSE } from "../data/constant";

const chooseItem = (key) => {
  return {
    type: CHOOSE,
    key,
  };
};

export { chooseItem };
