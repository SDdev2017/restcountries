import { FC, createContext, useContext } from 'react';

import { useToggleMode } from '../hooks';
import { getDefaultTheme } from '../helpers';

const Theme = createContext({
    mode: '',
    setMode: (theme: string) => {},
  });

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider:FC<Props> = ({ children }) => {
    const {mode, setMode} = useToggleMode(getDefaultTheme());

    return (
        <Theme.Provider value={{ mode, setMode }}>
            <div className={`theme-${mode}`}>
                { children }
            </div>
        </Theme.Provider>
    );
}

export const useThemeValue = () => useContext(Theme);