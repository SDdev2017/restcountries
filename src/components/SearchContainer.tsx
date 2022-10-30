import {FC} from 'react';

interface Props {
    searchInput: string,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContainer:FC<Props> = ({searchInput, setSearchInput, setRegion}) => {
    
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.target.value);
        setSearchInput('');
    }
    
    const handleSearchInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    return (
        <>
            <input 
                type="search" 
                name="countryname" 
                value={searchInput} 
                aria-label="Search for a country" 
                placeholder="Search for a country..." 
                onChange={handleSearchInput}
            />
            
            <select aria-label='Filter by Region' defaultValue="europe" onChange={handleSelect}>
                <option value="europe">Europe</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="oceania">Oceania</option>
            </select>
        </>
    );
};
