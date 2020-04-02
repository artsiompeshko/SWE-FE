import React, { useState, useCallback } from 'react';

import { Editors } from 'react-data-grid-addons';

import { gamesNewService } from '../games-new.service';

const { DropDownEditor } = Editors;

const getPlayersEditor = players => {
  const options = players.map(({ id, name }) => ({
    id,
    value: name,
    text: name,
    title: name,
  }));

  // eslint-disable-next-line react/prefer-stateless-function
  return <DropDownEditor options={options} />;
};

const getCols = ({ players }) => [
  { key: 'playerId', name: 'Player', editor: getPlayersEditor(players) },
  { key: 'brown', name: 'Brown', editable: true },
  { key: 'gold', name: 'Gold', editable: true },
  { key: 'levels', name: 'Levels', editable: true },
  { key: 'blue', name: 'Blue', editable: true },
  { key: 'yellow', name: 'Yellow', editable: true },
  { key: 'purple', name: 'Purple', editable: true },
  { key: 'green', name: 'Green', editable: true },
  { key: 'heros', name: 'Heros', editable: true },
  { key: 'place', name: 'Place', editable: true },
  { key: 'total', name: 'Total', editable: true },
];

const emptyRow = {
  playerId: null,
  brown: 0,
  gold: 0,
  levels: 0,
  blue: 0,
  yellow: 0,
  purple: 0,
  green: 0,
  heros: 0,
  place: 0,
  total: 0,
};

export const useGrid = ({
  players,
  columns: defaultColumns = getCols({ players }),
  rows: defaultRows = [],
}) => {
  const [columns, setColumns] = useState(defaultColumns);
  const [rows, setRows] = useState(defaultRows);

  const onRowsUpdate = ({ fromRow, toRow, updated }) => {
    const nextRows = rows.slice();

    for (let i = fromRow; i <= toRow; i += 1) {
      nextRows[i] = { ...nextRows[i], ...updated };
    }

    const calculatedRows = gamesNewService.calculateRows({ rows: nextRows });

    setRows(calculatedRows);
  };

  const onNewGrid = useCallback(() => {
    setRows([...rows, { ...emptyRow, id: rows.length }]);
  });

  return [rows, setRows, columns, setColumns, onRowsUpdate, onNewGrid];
};
