import React, {FC, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useFetchData } from '../hooks/useFetchData';
import { format } from '../helpers'; 

import { LoadingIcon } from './LoadingIcon';

export const CountriesList:FC = () => {
  const {data, setRegion} = useFetchData();

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  }

  return (
    <>
      <section className='search-container'>
        <input type="search" name="countryname" aria-label="Search for a country" placeholder="Search for a country..."/>
        <select aria-label='Filter by Region' defaultValue="europe" onChange={handleSelect}>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
        </select>
      </section>

      <section className='country-list-container'>
        {data ? data.map((v:any) => {
          const {name:{common}, flags:{svg}, population, region, capital} = v;
          
          return (
          <article key={common}>
            <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
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