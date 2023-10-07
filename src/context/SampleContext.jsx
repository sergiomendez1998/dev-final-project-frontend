import { createContext } from "react";

export const SampleContextProps = {
  elementRef : undefined,
  position : {},
  open : false,
  setOpen : ()=>{},
  width : undefined,
  main : undefined,
};

export const SampleContext = createContext(SampleContextProps);

