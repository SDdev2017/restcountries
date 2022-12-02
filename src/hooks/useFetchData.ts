import { useEffect, useState } from 'react';
import { FetchedData } from '../types'; 

type ReturnObj = () => {
    data: null | FetchedData[];
    setRegion: React.Dispatch<React.SetStateAction<string>>;
    rejected: boolean;
}

export const useFetchData:ReturnObj = () => {
    const [data, setData] = useState<null | FetchedData[]>(null);
    const [region, setRegion] = useState<string>('europe');
    const [rejected, setRejected] = useState<boolean>(false);

    useEffect(() => {
        setData(null);

        function fetchData():void{
          fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => {
                if(!res.ok){
                    throw new Error('Error', {cause: res});
                }

                setRejected(false);
                return res.json();
            })
            .then((data:FetchedData[]) => setData(data))
            .catch(error => {
                setRejected(true);
                console.log(error.cause.status);
            });
        }
    
        fetchData();
    },[region]);

    return {data, setRegion, rejected};
}