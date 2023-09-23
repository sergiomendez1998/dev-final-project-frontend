import React from 'react'

export const MesajeNoData = ({mesaje}) => {
  return (
    <div className='m-3'>
        <p className='font-bold text-red-700 text-center'>{mesaje}</p>
    </div>
  )
}

