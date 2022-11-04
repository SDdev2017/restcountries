import { FC } from 'react';

import errorImg from '../assets/error.svg';

interface Props {
    children: React.ReactNode;
}

export const ErrorMessage:FC<Props> = ({ children }) => {
    return(
        <div className="error-message"> 
            <img src={ errorImg } alt='Error' />           
            { children }
        </div>
    );
}