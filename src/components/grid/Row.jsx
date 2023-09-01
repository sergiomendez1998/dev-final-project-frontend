import React from 'react'

export const Row = ({children, className}) => {
  return (
    <div className={`flex flex-wrap mx-4 ${className}`}>
      {children}
    </div>
  )
}

