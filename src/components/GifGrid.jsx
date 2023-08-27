import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ( {category} ) => {

    const [gifInfo, setGifInfo] = useState([]);

    const getGifInfo = async () => {
      const gifs = await getGifs(category);
      setGifInfo(gifs);
    } 

    // Lo que haya dentro del useEffect solo se va a cargar 
    // la primera vez que se renderice el componente...
    useEffect( () => {
      getGifInfo();
    }, [] )
  
    return (
    <>
        <h3>{ category }</h3>

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
