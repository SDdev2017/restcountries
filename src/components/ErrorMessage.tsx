import { FC } from 'react';

interface Props {
    children: React.ReactNode;
}

export const ErrorMessage:FC<Props> = ({ children }) => {
    return(
        <div className="error-message">            
            { children }
        </div>
    );
}