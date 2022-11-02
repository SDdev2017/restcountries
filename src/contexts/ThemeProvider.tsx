import { FC, createContext, useState } from 'react';

const Theme = createContext('light');

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider:FC<Props> = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');
    return (
        <Theme.Provider value={themeMode}>
            { children }
        </Theme.Provider>
    );
}