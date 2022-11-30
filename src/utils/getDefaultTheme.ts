//detect if browser default theme is dark
const isBrowserDefaultDark = ():boolean => window.matchMedia('(prefers-color-scheme: dark)').matches;

//returns localStorage mode value, otherwise returns browser default theme
export const getDefaultTheme = ():string => {
    const localStorageTheme:string | null = localStorage.getItem('mode');
    const browserDefault:string = isBrowserDefaultDark() ? 'dark' : 'light';

    return localStorageTheme || browserDefault;
}