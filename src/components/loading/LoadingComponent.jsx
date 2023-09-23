import React from 'react'

export const LoadingComponent = () => {
  return (
    <div className="container">
        <div className="flex justify-center">
          <div className='lds-roller'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h3 className="fw-bold text-center">Cargando...</h3>
        </div>
      </div>
  )
}

