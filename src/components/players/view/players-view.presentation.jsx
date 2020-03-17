import React from 'react';
import PropTypes from 'prop-types';

const PlayersView = ({ players }) => (
  <div>{players && players.length > 0 && players.map(player => <span>{player.name}</span>)}</div>
);

PlayersView.defaultProps = {
  players: null,
};

PlayersView.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default PlayersView;
