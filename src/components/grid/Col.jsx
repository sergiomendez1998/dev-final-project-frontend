import React from 'react';

export const Col = ({ children,xs, sm, md, lg, className }) => {
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
