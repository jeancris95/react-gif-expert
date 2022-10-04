import React, { useEffect } from 'react'
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//un hook es una funcion que devuelve algo ya bien podia ser un objeto 
export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages =await getGifs(category);
        setimages(newImages);
        setIsLoading(false);
    }
    //peticion http para los gifs 
    useEffect(()=>{
           getImages();
    }, [ ] ) 

        return{
            images,    //devuelve un array                     
            isLoading //devuelve un estado 
        }
}
