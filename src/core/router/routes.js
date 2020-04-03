import { GamesView } from 'components/games/view';
import { GamesNew } from 'components/games/new';

import { GameResultsView } from 'components/game-results/view';

import { PlayersView } from 'components/players/view';
import { PlayersNew } from 'components/players/new';

import { StatisticsView } from 'components/statistics/view';

import { PERMISSIONS } from 'core/constants/permissions';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
export const routes = [
  {
    path: '/statistics/view',
    component: StatisticsView,
  },
  {
    path: '/games/view',
    component: GamesView,
  },
  {
    path: '/games/new',
    component: GamesNew,
    permissions: PERMISSIONS.ADMIN,
  },
  {
    path: '/games/:gameId',
    component: GameResultsView,
  },
  {
    path: '/players/view',
    component: PlayersView,
  },
  {
    path: '/players/new',
    component: PlayersNew,
    permissions: PERMISSIONS.ADMIN,
  },
];
