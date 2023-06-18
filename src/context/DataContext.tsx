import { createContext, FC, useContext, useState, ReactNode, useEffect } from "react";
import initialCatData from "../../initialData.json";
import { Cat } from "../types/cat";
import { initializeLocalStorage, readLocalStorage, setLocalStorage } from "../utils/localStorage";
import { sortByGender, sortByName } from "../utils/sorting";

type DataContextType = {
  catsToRender: Array<Cat>;
  addCat: (cat: Cat) => void;
  removeCat: (catId: number) => void;
  editCat: (newData: Cat) => void;
  handleSetFilter: (filter: string) => void;
  handleSetSortType: (sortType: string) => void;
  handleSetSortDirection: () => void;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType>({
  catsToRender: [],
  addCat: () => null,
  removeCat: () => null,
  editCat: () => null,
  handleSetFilter: () => null,
  handleSetSortType: () => null,
  handleSetSortDirection: () => null,
});

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [cats, setCats] = useState<Array<Cat>>([]);
  const [catsToRender, setCatsToRender] = useState<Array<Cat>>([]);
  const [filter, setFilter] = useState<string>("");
  const [sortType, setSortType] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<string>("descending");

  const getCats = () => {
    const cats = readLocalStorage();
    if (cats) {
      setCats(cats);
    }
  };

  const addCat = (cat: Cat) => {
    const currentStorage = readLocalStorage();
    const updatedStorage = [...currentStorage, cat];

    setLocalStorage(updatedStorage);
    getCats();
  };

  const removeCat = (catId: number) => {
    const currentStorage = readLocalStorage();
    const updatedStorage = currentStorage.filter((cat: Cat) => cat.id !== catId);

    setLocalStorage(updatedStorage);
    getCats();
  };

  const editCat = (newData: Cat) => {
    const currentStorage = readLocalStorage();
    const updatedStorage = currentStorage.map((cat: Cat) => {
      if (cat.id === newData.id) {
        return newData;
      } else return cat;
    });

    setLocalStorage(updatedStorage);
    getCats();
  };

  const handleSetSortType = (sortType: string) => {
    setSortType(sortType);
  };

  const handleSetSortDirection = () => {
    if (sortDirection == "descending") {
      setSortDirection("ascending");
    } else {
      setSortDirection("descending");
    }
  };

  const handleSetFilter = (filter: string) => {
    setFilter(filter);
  };

  const filterCats = (filter: string) => {
    if (filter) {
      const filteredCats = cats.filter((cat) => {
        if (
          cat.name.toLowerCase().includes(filter.toLowerCase()) ||
          cat.bio.toLowerCase().includes(filter.toLowerCase()) ||
          cat.gender.toLowerCase().includes(filter.toLowerCase()) ||
          cat.birthdate.toLowerCase().includes(filter.toLowerCase())
        ) {
          return cat;
        }
      });
      const sorted = sortCats(filteredCats);
      setCatsToRender(sorted);
    } else {
      const sorted = sortCats(cats);
      setCatsToRender(sorted);
    }
  };

  const sortCats = (array: Array<Cat>) => {
    switch (sortType) {
      case "name":
        return sortByName(array);
      case "gender":
        return sortByGender(array);
      default:
        return sortByName(array);
    }
  };

  useEffect(() => {
    const currentData = readLocalStorage();
    if (!currentData || currentData.length < 1) {
      initializeLocalStorage(initialCatData);
    }
    getCats();
  }, []);

  useEffect(() => {
    filterCats(filter);
  }, [filter, cats]);

  useEffect(() => {
    const sorted = [...catsToRender];
    sorted.reverse();
    setCatsToRender(sorted);
  }, [sortDirection]);

  useEffect(() => {
    const sorted = sortCats(catsToRender);
    setCatsToRender(sorted);
  }, [sortType]);

  const value = {
    catsToRender,
    addCat,
    removeCat,
    editCat,
    handleSetFilter,
    handleSetSortType,
    handleSetSortDirection,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
