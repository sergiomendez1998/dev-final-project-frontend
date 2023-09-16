import React from 'react'

export const HeaderPage = ({title, pref}) => {
  return (
    <div className="flex flex-row justify-between items-center my-3">
        <div className="column-1">
          <p className="m-0 font-bold text-2xl md:text-4xl">{title}</p>
        </div>
        <div className="column-1">
          <ol className="flex m-0">
            <a className="text-gray-400 hover:text-gray-600 pe-1">{pref}</a>
            <span className="text-gray-400">/</span>
            <a className="text-gray-400 hover:text-gray-600 ps-1">{title}</a>
          </ol>
        </div>
      </div>
  )
}

