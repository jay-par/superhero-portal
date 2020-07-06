import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles({
  root: {
    background: '#414A4C',
    width: '400px',
    height: '100%',
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
          <Link href="/hero/[slug]" as={`/hero/${hero.name}`}>
            <ListItem button key={hero.name} className={classes.item}>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={hero.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
