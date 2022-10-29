import {Routes, Route} from 'react-router-dom';

import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { Content } from './components/layout/Content';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { PageNotFound } from './components/PageNotFound';

import './styles/index.scss';

export const App = () => {

  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={ <CountriesList/> } />
          <Route path="details" element={ <CountryDetails/> } />
          <Route path="*" element={ <PageNotFound/> } />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}