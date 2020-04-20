import React, { useState } from 'react';

import { CHART_METRICS } from 'core/constants/charts';

import PlayerView from './player-view.presentation';

const PlayerViewContainer = props => {
  const [metrics, setMetrics] = useState(
    CHART_METRICS.map(metric => ({
      ...metric,
      checked: true,
    })),
  );

  const toggleMetric = metric => {
    const nextMetric = {
      ...metric,
      checked: !metric.checked,
    };

    setMetrics(
      metrics.map(item => {
        if (item.key === metric.key) {
          return nextMetric;
        }

        return item;
      }),
    );
  };

  return <PlayerView {...props} toggleMetric={toggleMetric} metrics={metrics} />;
};

export default PlayerViewContainer;
