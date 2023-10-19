import { createContext, } from "react";

export const SampleContextProps = {
  itemOpen: false,
  setItemOpen: () => { },
  setSelectedSample: () => { },
};

export const SampleContext = createContext(SampleContextProps);

