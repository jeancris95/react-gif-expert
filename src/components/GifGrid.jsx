import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Gifitem } from './Gifitem';

export const GifGrid = ({ category}) => {
  const {images,isLoading}=useFetchGifs(category);
  return (
    <>
        <h3>{category}</h3>
        {
          isLoading &&(<h2>cargando ...</h2>)
        }
        <div className='card-grid'>
           {
           images.map((image)=>(
                <Gifitem key={image.id} 
                        {... image}//esparciendo todas las properties
                        />
           )
           )}
        </div>
    </>
  )
}
