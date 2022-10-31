import { FC } from 'react';

import { alphaToName } from '../helpers';

interface Props {
    borders: string[]
}

export const BorderCountries: FC<Props> = ({ borders }) => {
  return (
    <>
        <p><strong>Border Countries:</strong>{ alphaToName(borders).map(v => (<span key={v}>{v}</span>)) }</p>
    </>
  );
};


