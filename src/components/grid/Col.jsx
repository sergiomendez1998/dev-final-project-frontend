import PropTypes from 'prop-types';

export const Col = ({ children, xs, sm, md, lg, className }) => {
  const colClasses = [
    xs ? `col-${xs}` : 'col',
    sm ? `col-sm-${sm}` : '',
    md ? `col-md-${md}` : '',
    lg ? `col-lg-${lg}` : '',
    className,
    'px-2',
  ];

  return <div className={colClasses.join(' ')}>{children}</div>;
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  className: PropTypes.string,
};
