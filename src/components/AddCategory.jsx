import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const onSubmit = (evt) => {
        // Prevenimos el refresh automatico.
        evt.preventDefault();

        // Validamos el input.
        if (inputValue.trim().length <= 1) return;

        // Insertamos la categoria.
        // setCategories( (categories) => [inputValue, ...categories] );
        onNewCategory(inputValue.trim());

        // Limpiamos el input.
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange}
            />
        </form>
    )
}
