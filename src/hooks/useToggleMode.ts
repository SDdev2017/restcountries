import { useState } from 'react';

type Func = (defaultValue:string) => {
    mode:string; 
    setMode: React.Dispatch<React.SetStateAction<string>>
};

export const useToggleMode:Func = ( defaultValue ) => {
    const [mode, setMode] = useState<string>(defaultValue);

    return { mode, setMode };
}