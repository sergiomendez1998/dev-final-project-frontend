import { useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);

  const elemento = document.querySelector("body");
  const main = document.querySelector("#scroll");

  const resScreenResize = () => {
    setWidth(elemento.clientWidth);
  };

  const resScreenScroll = () => {
    setScroll(main.scrollTop);
  }

  const addEventWidth = () => {
    resScreenResize();
    window.addEventListener("resize", resScreenResize);
    main.addEventListener('scroll', resScreenScroll);
  };

  const removeEventWidth = () => {
    window.removeEventListener("resize", resScreenResize);
    main.removeEventListener('scroll', resScreenScroll);
  };

  return {
    addEventWidth,
    removeEventWidth,
    width,
    scroll,
  };
};
