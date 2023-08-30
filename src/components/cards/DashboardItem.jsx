import React from 'react';

export const DashboardItem = ({ title, number, Icon }) => {
  return (
    <div className="text-white dashboard-item relative">
      <div className="rounded-lg mb-[20px] bg-sky-600">
        <div className="p-[10px]">
          <p className="font-bold text-4xl mb-2 m-0">{number}</p>
          <p>{title}</p>
        </div>
        <div className="text-opaque icon-dashboard">
          <Icon size={75} className="min-w-max top-0" />
        </div>
        <div className="text-white text-center rounded-lg p-1 bg-sky-700">
          <a href="#" className="text-white">
            More info
          </a>
        </div>
      </div>
    </div>
  );
};
