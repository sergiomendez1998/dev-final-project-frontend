import { useRef, useState } from "react";

export const useWidth = (element = "#scroll") => {
  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);
  const main = useRef(document.querySelector(element));

  const elemento = document.querySelector("body");
  const resScreenResize = () => {
    setWidth(elemento.clientWidth);
  };

  const resScreenScroll = () => {
    setScroll(main.current.scrollTop);
  }

  const addEventWidth = () => {
    resScreenResize();
    window.addEventListener("resize", resScreenResize);
    main.current.addEventListener('scroll', resScreenScroll);
  };

  const removeEventWidth = () => {
    window.removeEventListener("resize", resScreenResize);
    main.current.removeEventListener('scroll', resScreenScroll);
  };

  return {
    addEventWidth,
    removeEventWidth,
    width,
    scroll,
    main, 
  };
};
