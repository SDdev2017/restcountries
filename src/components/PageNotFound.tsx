import React, {FC} from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound:FC = () => {
  return (
    <>
        <h1>The page, you are searching for, is not available!</h1>
        <Link to='/'>Back to homepage</Link>
    </>
  );
}