import { Cat } from "../types/cat";

export const sortByName = (array: Array<Cat>) => {
  const copy = [...array];
  const sorted = copy.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sorted;
};

export const sortByGender = (array: Array<Cat>) => {
  const copy = [...array];
  const sorted = copy.sort((a, b) => {
    if (a.gender < b.gender) {
      return -1;
    }
    if (a.gender > b.gender) {
      return 1;
    }
    return 0;
  });
  return sorted;
};
