export const readLocalStorage = () => {
  const storage = localStorage.getItem("cats");
  if (typeof storage == "string") {
    const parsedStorage = JSON.parse(storage);
    return parsedStorage;
  }
};

export const setLocalStorage = (cat: Object) => {
  localStorage.setItem("cats", JSON.stringify(cat));
};

export const initializeLocalStorage = (data: Array<Object>) => {
  localStorage.setItem("cats", JSON.stringify(data));
};
