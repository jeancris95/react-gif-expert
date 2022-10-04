import {useState} from 'react'
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory=(newCategory) => {
        //comprobamos si la categoria que estamos añadiendo se encuentra en el array de categories.
       if( categories.includes(newCategory)){return; }
       //añadir un tema   por ejemplo valorant , paso importante no usar el push en arrays 
        setCategories([newCategory, ...categories ]);
    }

  return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory 
            /* setCategories={setCategories} */
            onNewCategory={ event => onAddCategory(event) }
        /> 
            {/* mostrar una categoria */}
            { 
                categories.map(category =>
                    (
                        < GifGrid key={category} 
                                  category={ category }/>
                    )
                 )
             }

            {/* Gif items */}
        </>
  )
}
