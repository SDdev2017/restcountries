import { useEffect, useState } from 'react';

type ReturnObj = () => {
    data: any;
    setRegion: React.Dispatch<React.SetStateAction<string>>;
}

export const useFetchData:ReturnObj = () => {
    const [data, setData] = useState<any>(null);
    const [region, setRegion] = useState<string>('europe');

    useEffect(() => {
        setData(null);
        async function fetchData():Promise<void>{
          fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e));
        }
    
        fetchData();
    },[region]);

    return {data, setRegion};
}