import React, {FC, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useFetchData } from '../hooks/useFetchData';
import { format } from '../helpers'; 

import { LoadingIcon } from './LoadingIcon';
import { SearchContainer } from './SearchContainer';

export const CountriesList:FC = () => {
  const {data, setRegion} = useFetchData();
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <>
      <section className='search-container'>
        <SearchContainer setRegion={setRegion} searchInput={searchInput} setSearchInput={setSearchInput} />
      </section>

      <section className='country-list-container'>
        {data ? data
          .filter((v:any) => v.name.common.toLowerCase().includes(searchInput.toLowerCase()))
          .map((v:any) => {
            const {name:{common}, flags:{svg}, population, region, capital} = v;
            
            return (
            <article key={common}>
              <Link to='details' state={v} className='link'></Link>
              <div className='image-container'>
                <img src={svg} alt={`${common}'s flag`} />
              </div>
              <div className='country-information'>
                <h3>{common}</h3>
                <ul>
                  <li><strong>Population:</strong> {format(population)}</li>
                  <li><strong>Region:</strong> {region}</li>
                  <li><strong>Capital:</strong> {capital}</li>
                </ul>
              </div>
            </article>)}) : <LoadingIcon/>
        }
      </section>
    </>
  );
}