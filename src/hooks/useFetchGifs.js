import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifInfo, setGifInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifInfo = async () => {
      const gifs = await getGifs(category);
      setGifInfo(gifs);
      setIsLoading(false);
    } 

    // Lo que haya dentro del useEffect solo se va a cargar 
    // la primera vez que se renderice el componente...
    useEffect( () => {
      getGifInfo();
    }, [] )

    return {
        gifInfo: gifInfo,
        isLoading: isLoading
    }
}
