import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles({
  root: {
    background: '#4615b2',
    width: '400px',
  },
  item: {
    color: '#ffea00',
    padding: '20px',
  },
});

const Navigation = ({ heroes }) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left">
      <List className={classes.root}>
        {heroes.map((hero, index) => (
          <ListItem button key={hero.name} className={classes.item}>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary={hero.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
