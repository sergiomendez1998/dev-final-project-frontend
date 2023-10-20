import { createContext, } from "react";

export const SampleContextProps = {
  id: "",
  itemOpen: false,
  setItemOpen: () => { },
  setSelectedSample: () => { },
};

export const SampleContext = createContext(SampleContextProps);

