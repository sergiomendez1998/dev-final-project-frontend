import React from 'react';

export const InputForm = ({label, name, type, id, value,error, onChange,onBlur, placeholder}) => {
  return (
    <div className='mt-4'>
      <label className="font-bold block text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="mt-2 w-full rounded-3xl border bg-sky-100 px-4 py-3 focus:border-rose-500 focus:bg-white focus:outline-none"
        autoFocus
        autoComplete="true"
        required
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className='text-red-600 font-bold'>{error}</p>
    </div>
  );
};

