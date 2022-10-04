import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue,setInputValue] = useState('');
    const onImputChange=(event)=>{//Se puede desestructurar
        setInputValue(event.target.value);//lo que vaya modificando en setImputValue sera el nuevo valor de inputValue
    }
    const onSubmit=(event)=>{
        //el preventDefault es utilizado para no recargar la pagina 
        event.preventDefault();
        if(inputValue.trim().length <= 1 ) return;//sale de la funcion
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={(event)=> onImputChange(event) }     
            />
    </form>
  )
}
