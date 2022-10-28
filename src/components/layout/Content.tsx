import React, {FC} from 'react';

interface Props{
    children: React.ReactNode;
}

export const Content:FC<Props> = ({ children }) => {
  return (
    <main>
        { children }
    </main>
  );
}