import React from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';
import LanguageSelector from '../languageSelector/languageSelector';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './layout.module.css';
import Button from '../buttonUp/button';

const useStyles = makeStyles({
  header: {
    margin: '1rem 0 0 1rem',
  },
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    margin: '2rem auto',
    padding: '0 1rem',
    maxWidth: 'var(--page-max-width)',
  },
  navLink: { 'margin-right': '10px' },
});

const NavLink = ({ to, children }) => (
  <li className={styles.listLink}>
    <Link to={to}>{children}</Link>
  </li>
);

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar style={{ padding: '0 10%' }}
        position="static">
        <Typography variant="h4" component="h1" className={classes.header}>
          <FormattedMessage id="title" />
        </Typography>
        <Toolbar className={classes.toolBar}>
          <div>
            <Link to="/" className={classes.navLink}>
              <FormattedMessage id="home" />
            </Link>
            <Link to="/photographers-list/" className={classes.navLink}>
              <FormattedMessage id="photographersList" />
            </Link>
          </div>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
      <Button />
    </div>
  );
};

export default injectIntl(Layout);
