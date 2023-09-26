import PropTypes from 'prop-types';

export const Grid = ({ children, sm, md, lg, xl, className }) => {
  const colClasses = [
    'grid',
    sm ? `gcol-sm-${sm}` : 'grid-flow-col',
    md ? `gcol-md-${md}` : '',
    lg ? `gcol-lg-${lg}` : '',
    xl ? `gcol-xl-${xl}` : '',
    'px-2',
    'gap-4',
    className,
  ];
  return <div className={colClasses.join(' ')}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  className: PropTypes.string,
};
