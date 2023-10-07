import { useEffect, useRef, useState } from "react";
import { useWidth } from "./useWidth";

export const usePosition = (element = "#scroll") => {
  const { addEventWidth, removeEventWidth, width, scroll, main } = useWidth(element);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    addEventWidth();
    if (elementRef.current) {
      const position = elementRef.current.getBoundingClientRect();
      setPosition(position);
    }

    return () => {
      removeEventWidth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, scroll]);

  return { position, elementRef, open, setOpen, width, main };
};
