import { useEffect, useState } from 'react';

type ReturnObj = () => {
    data: any;
    setRegion: React.Dispatch<React.SetStateAction<string>>;
    rejected: boolean;
}

export const useFetchData:ReturnObj = () => {
    const [data, setData] = useState<any>(null);
    const [region, setRegion] = useState<string>('europe');
    const [rejected, setRejected] = useState<boolean>(false);

    useEffect(() => {
        setData(null);

        async function fetchData():Promise<void>{
          fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => {
                if(!res.ok){
                    throw new Error('Error', {cause: res});
                }

                setRejected(false);
                return res.json();
            })
            .then(data => setData(data))
            .catch(error => {
                setRejected(true);
                console.log(error.cause.status);
            });
        }
    
        fetchData();
    },[region]);

    return {data, setRegion, rejected};
}