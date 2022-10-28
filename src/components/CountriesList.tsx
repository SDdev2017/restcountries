import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import  flag  from '../assets/germany.png';

export const CountriesList:FC = () => {
  return (
    <>
      <section className='search-container'>
        <input type="search" name="countryname" aria-label="Search for a country" placeholder="Search for a country..."/>
        <select aria-label='Filter by Region' defaultValue="Europe">
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
      <section className='country-list-container'>
        <article>
          <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
          <img src={flag} alt="Bulgaria's flag" />
          <div className='country-information'>
            <h3>Germany</h3>
            <ul>
              <li><strong>Population:</strong> 81,123,123</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Capital:</strong> Berlin</li>
            </ul>
          </div>
        </article>
        <article>
          <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
          <img src={flag} alt="Bulgaria's flag" />
          <div className='country-information'>
            <h3>Germany</h3>
            <ul>
              <li><strong>Population:</strong> 81,123,123</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Capital:</strong> Berlin</li>
            </ul>
          </div>
        </article>
        <article>
          <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
          <img src={flag} alt="Bulgaria's flag" />
          <div className='country-information'>
            <h3>Germany</h3>
            <ul>
              <li><strong>Population:</strong> 81,123,123</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Capital:</strong> Berlin</li>
            </ul>
          </div>
        </article>
        <article>
          <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
          <img src={flag} alt="Bulgaria's flag" />
          <div className='country-information'>
            <h3>Germany</h3>
            <ul>
              <li><strong>Population:</strong> 81,123,123</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Capital:</strong> Berlin</li>
            </ul>
          </div>
        </article>
        <article>
          <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
          <img src={flag} alt="Bulgaria's flag" />
          <div className='country-information'>
            <h3>Germany</h3>
            <ul>
              <li><strong>Population:</strong> 81,123,123</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Capital:</strong> Berlin</li>
            </ul>
          </div>
        </article>
        <article>
          <Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}} className='link'></Link>
          <img src={flag} alt="Bulgaria's flag" />
          <div className='country-information'>
            <h3>Germany</h3>
            <ul>
              <li><strong>Population:</strong> 81,123,123</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Capital:</strong> Berlin</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}

/*
<Link to='details' state={{name: "Stefan", age: 21, gender: "Male"}}>See details</Link><br/>
<Link to='details' state={{name: "Dimitar", age: 21, gender: "Male"}}>See details</Link>
        */