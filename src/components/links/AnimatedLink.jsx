import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { transitionViewIfSupported } from '../../util/ViewTransition.js';
import { useLocation, useNavigate } from 'react-router-dom';

export const AnimatedLink = ({ className, to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === to);
  }, [location, to]);

  return (
    <a
      href={to}
      className={`${className} ${active ? 'active' : ''}`}
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

AnimatedLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
