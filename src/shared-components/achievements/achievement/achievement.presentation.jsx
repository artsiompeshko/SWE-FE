import React from 'react';
import PropTypes from 'prop-types';

import WhatshotIcon from '@material-ui/icons/Whatshot';

import { ACHIEVEMENT } from 'core/constants/achievements';

import { ImageAchievement } from './image-achievement';

const getMetadata = key => {
  switch (key) {
    case ACHIEVEMENT.FIRE.key:
      return {
        Icon: WhatshotIcon,
        color: '#ce2029',
      };

    case ACHIEVEMENT.OUTDATED.key:
      return {
        imageUrl: '/spider.gif',
      };

    case ACHIEVEMENT.LEADER.key:
      return {
        imageUrl: '/leader.png',
      };

    case ACHIEVEMENT.CHAMPION_2020_1.key:
      return {
        imageUrl: '/medal_first.png',
      };

    case ACHIEVEMENT.CHAMPION_2020_2.key:
      return {
        imageUrl: '/medal_second.png',
      };

    case ACHIEVEMENT.CHAMPION_2020_3.key:
      return {
        imageUrl: '/medal_third.png',
      };

    default:
      return {};
  }
};

const Achievement = ({ achievementKey, size }) => {
  const achievement = ACHIEVEMENT[achievementKey];

  if (!achievement) {
    return null;
  }

  const { Icon, color, imageUrl } = getMetadata(achievementKey);

  if (imageUrl) {
    return <ImageAchievement title={achievement.title} imageUrl={imageUrl} size={size} />;
  }

  return <Icon titleAccess={achievement.title} htmlColor={color} fontSize={size} />;
};

Achievement.defaultProps = {
  size: 'default',
};

Achievement.propTypes = {
  achievementKey: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Achievement;
