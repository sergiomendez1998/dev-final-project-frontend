import React from 'react';

export const Col = ({ children, xs, sm, md, lg }) => {
  const colClasses = [
    xs || sm || md || lg ? 'w-full' : 'w-3/12',
    xs ? `w-${xs}/12` : '',
    sm ? `sm:w-${sm}/12` : '',
    md ? `md:w-${md}/12` : '',
    lg ? `lg:w-${lg}/12` : '',
    'px-2',
  ];

  return <div className={colClasses.join(' ')}>{children}</div>;
};
