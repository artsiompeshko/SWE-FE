import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import GamesIcon from '@material-ui/icons/Games';
import RowingIcon from '@material-ui/icons/Rowing';

import { ListItemLink } from 'shared-components/list-item-link';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItemLink to="/statistics/view">
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText>Statistics</ListItemText>
        </ListItemLink>
        <ListItemLink to="/games/view">
          <ListItemIcon>
            <GamesIcon />
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </ListItemLink>
        <ListItemLink to="/players/view">
          <ListItemIcon>
            <RowingIcon />
          </ListItemIcon>
          <ListItemText>Players</ListItemText>
        </ListItemLink>
      </List>
    </Drawer>
  );
};

export default Navigation;
