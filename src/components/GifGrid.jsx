import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { useState } from 'react';

export const GifGrid = ( {category} ) => {

    const {gifInfo, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3>{ category }</h3>
      
        {
          isLoading && ( <h2>Cargando...</h2> )
        }

        <div className='card-grid'>
          {
            gifInfo.map( ( gif ) => (
              // Podemos con el spread operator mandar todas las propiedades
              // del elemento del array de gifInfo, asi no tenemos que 
              // mandarle las propiedades una por una y en el componente las
              // destructuramos de la misma manera como si se las hubieramos mandado
              // como atributos.
              <GifItem key={gif.id} { ...gif }/>
            ))
          }
        </div>
    </>
  )
}
