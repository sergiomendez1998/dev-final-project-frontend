import React from 'react';

export const Response = ({ message, type }) => {
  return (
    <div
      className={`my-1 flex w-full flex-row rounded-md ${
        type ? 'bg-emerald-500' : 'bg-rose-500'
      } p-2 shadow-lg`}
    >
      <div className="ml-1">
        <p className="text-white font-bold">{message}</p>
      </div>
    </div>
  );
};
