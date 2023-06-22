import { useState, useEffect } from 'react'
import axios from 'axios'


type CountryData = {
    data: string;
    flag: string;
    currencies: string;
    common: string;
    name: string;
}

type ErrorType = {
    error: Error | null;
}

const useAxios = (url: string) => {
    const [data, setData] = useState<CountryData[]>([]);
    const [error, setError] = useState<ErrorType>({error: null});
    const [loaded, setLoaded] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
        try{
            setLoaded(true);
            const response = await axios (url)
            setData(response.data)
        } catch(error) {
            setError({error: error as Error})
        } finally {
            setLoaded(false);
        }
    }
    fetchData();

   }, [url])

  return [data, error, loaded]
}

export default useAxios
