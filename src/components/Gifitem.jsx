import React from 'react'

export const Gifitem = ({id,titulo,url}) => {
  return (
           <div className='card'>
                <img src={url} alt={titulo}/>
                <p>{titulo}</p>
            </div>
  )
}
