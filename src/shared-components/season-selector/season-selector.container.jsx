import React, { useContext } from 'react';
import { SeasonContext } from 'core/context/season';

import SeasonSelector from './season-selector.presentation';

const options = [
  {
    key: '2020',
    title: '2020',
  },
  {
    key: '2021',
    title: '2021',
  },
  {
    key: 'any',
    title: 'all',
  },
];

const SeasonSelectorContainer = () => {
  const { season, setSeason } = useContext(SeasonContext);

  const handleChange = event => {
    setSeason(event.target.value);
  };

  return <SeasonSelector season={season} options={options} handleChange={handleChange} />;
};

export default SeasonSelectorContainer;
