import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';
import { format } from '../helpers';
import { BorderCountries } from './BorderCountries';

export const CountryDetails:FC = () => {

    const { 
      state: {
        borders,
        name:{
          common, 
          nativeName
        },
        flags:{
          svg
        },
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages
      }     
    } = useLocation();

  return (
    <section className='country-details-container'>
      <Link to='/'><BsArrowLeft/>Back</Link>
      <div className='country-details-grid-container'>
        <img src={ svg } alt="Bulgaria's flag" />
        <section className='country-details-section'>
          <h1>{ common }</h1>
          <div className='details-list-container'>
            <ul>
              <li><strong>Native Name:</strong> { Object.keys(nativeName).map((v:any) => nativeName[v].common).join(", ") }</li>
              <li><strong>Population:</strong> { format(population) }</li>
              <li><strong>Region:</strong> { region }</li>
              <li><strong>Sub Region:</strong> { subregion }</li>
              <li><strong>Capital:</strong> { capital }</li>
            </ul>
            <ul className='right'>
              <li><strong>Top-level domain:</strong> { tld }</li>
              <li><strong>Currencies:</strong> { Object.keys(currencies).map((v:any) => currencies[v].name).join(", ") }</li>
              <li><strong>Languages:</strong> { Object.keys(languages).map((v:any) => languages[v]).join(", ") }</li>
            </ul>
          </div>
          {borders && <BorderCountries borders={borders}/>}
        </section>
      </div>
    </section>
  );
}