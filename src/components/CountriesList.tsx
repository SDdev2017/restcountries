import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { useFetchData } from '../hooks';
import { format } from '../utils'; 

import { LoadingIcon } from './LoadingIcon';
import { SearchContainer } from './SearchContainer';
import { ErrorMessage } from './ErrorMessage';
import { FetchedData } from '../types';

export const CountriesList:FC = () => {
  const {data, setRegion, rejected} = useFetchData();
  const [searchInput, setSearchInput] = useState<string>('');
  document.title = 'Where in the world?';

  if(rejected){
    return (
      <ErrorMessage>
        <h2>Something went wrong.</h2>
        <p>Please, try again later.</p>
      </ErrorMessage>
    );
  }

  return (
    <>
      <section className='search-container'>
        <SearchContainer setRegion={setRegion} searchInput={searchInput} setSearchInput={setSearchInput} />
      </section>

      <section className='country-list-container'>
        {data ? data
          .filter((v:FetchedData) => v.name.common.toLowerCase().includes(searchInput.toLowerCase()))
          .map((v:FetchedData) => {
            const {name:{common}, flags:{svg}, population, region, capital} = v;
            
            return (
              <article key={ common }>
                <Link to='details' state={ v } className='link'></Link>
                <div className='image-container'>
                  <img src={ svg } alt={` ${common}'s flag` } />
                </div>
                <div className='country-information'>
                  <h3>{ common }</h3>
                  <ul>
                    <li><strong>Population:</strong> { format(population) }</li>
                    <li><strong>Region:</strong> { region }</li>
                    <li><strong>Capital:</strong> { capital }</li>
                  </ul>
                </div>
              </article>)}) 
              : <LoadingIcon/>
        }
      </section>
    </>
  );
}