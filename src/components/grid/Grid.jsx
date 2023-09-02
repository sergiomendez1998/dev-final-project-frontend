import React from 'react';

export const Grid = ({children,sm, md, lg, xl}) => {
    const colClasses = [
        'grid',
        sm ? `gcol-sm-${sm}` :  'grid-flow-col',
        md ? `gcol-md-${md}` : '',
        lg ? `gcol-lg-${lg}` : '',
        xl ? `gcol-xl-${xl}` : '',
        'px-2',
        'gap-4'
      ];
  return (
    <div className={colClasses.join(" ")}>
      {children}
    </div>
  );
};

