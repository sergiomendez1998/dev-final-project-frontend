import React from 'react';

export const Grid = ({children,xs, sm, md, lg, xl}) => {
    const colClasses = [
        'grid',
        xs || sm || md || lg || xl ? '' : 'grid-cols-4',
        xs ? `xs:grid-cols-${xs}` : '',
        sm ? `sm:grid-cols-${sm}` : '',
        md ? `md:grid-cols-${md}` : '',
        lg ? `lg:grid-cols-${lg}` : '',
        xl ? `xl:grid-cols-${xl}` : '',
        'px-2',
        'gap-4'
      ];
  return (
    <div className={colClasses.join(" ")}>
      {children}
    </div>
  );
};

