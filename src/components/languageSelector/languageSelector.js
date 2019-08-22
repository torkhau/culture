import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { Menu, MenuItem, Button } from '@material-ui/core';

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => setAnchorEl(null);

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div>
          <Button
            style={{ backgroundColor: 'whitesmoke' }}
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            {currentLocale}
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {languages.map(language => (
              <MenuItem
                key={language}
                onClick={() => {
                  changeLocale(language);
                  handleClose();
                }}
              >
                {language}
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
    </IntlContextConsumer>
  );
};

export default Language;
