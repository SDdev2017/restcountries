import { Link } from 'react-router-dom';
import { ErrorMessage } from './ErrorMessage';

export const PageNotFound = () => {
  return (
    <ErrorMessage>
        <h2>The page, you are searching for, is not available!</h2>
        <Link to='/'>Go to homepage</Link>
    </ErrorMessage>
  );
}