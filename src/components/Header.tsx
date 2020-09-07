import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  ghIconStyles: {
    color: 'white',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Typescript To-do App
          </Typography>
          <a
            href='https://github.com/motokikasai/typescript-todo-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon className={classes.ghIconStyles} />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
