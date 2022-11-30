import { FC } from 'react';
import { useThemeValue } from '../../contexts';
import { Moon, Sun } from '../../assets/Icons';

export const Header:FC = () => {
  const { mode, setMode } = useThemeValue();
  
  const handleThemeButton = () => {
    const isCurrentDark = 'dark' === mode;
    setMode(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('mode', isCurrentDark ? 'light' : 'dark');
  }

  return (
    <header>
        <h2>Where in the world?</h2>
        <button onClick={ handleThemeButton }>
          {mode === 'light' ? <Moon/> : <Sun/>}
          {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    </header>
  );
}