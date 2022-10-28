import React, {FC} from 'react';
import { Link, useLocation } from 'react-router-dom';

import flag from '../assets/germany.png';

export const CountryDetails:FC = () => {
    //const { state: {name, age, gender} } = useLocation();
  return (
    <section className='country-details-container'>
      <Link to='/'>Back</Link>
      <div className='country-details-grid-container'>
        <img src={flag} alt="Bulgaria's flag" />
        <section className='country-details-section'>
          <h1>Germany</h1>
          <div className='details-list-container'>
            <ul>
              <li><strong>Native Name:</strong> Germany</li>
              <li><strong>Population:</strong> 11,123,121</li>
              <li><strong>Region:</strong> Europe</li>
              <li><strong>Sub Region:</strong> Western Europe</li>
              <li><strong>Capital:</strong> Brussels</li>
            </ul>
            <ul className='right'>
              <li><strong>Top-level domain:</strong> .be</li>
              <li><strong>Currencies:</strong> Euro</li>
              <li><strong>Languages:</strong> Dutsch, French, German</li>
            </ul>
          </div>
          <p><strong>Border Countries:</strong><span>Netherlands</span><span>Netherlands</span><span>Netherlands</span></p>
        </section>
      </div>
    </section>
  );
}

/*<h2>{ name }</h2>
        <h3> { age } </h3>
        <Link to='/'>Back</Link>
*/