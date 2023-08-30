import { useEffect, useState } from "react";
import { transitionViewIfSupported } from "../../util/ViewTransition.js";
import { useLocation, useNavigate } from "react-router-dom";

export const AnimatedLink = ({ className, to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === to);
  }, [location])

  return (
    <a
      href={to}
      className={`${className} ${active ? "active" : ""}`}
      onClick={(ev) => {
        ev.preventDefault();
        transitionViewIfSupported(() => {
          navigate(to);
        });
      }}
    >
      {children}
    </a>
  );
};
