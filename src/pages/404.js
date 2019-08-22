import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';

const ErrorPage = () => (
  <Layout>
    <div style={{textAlign: 'center'}}>
      <h1><FormattedMessage id="errorHead" /></h1>
      <br />
      <h3><FormattedMessage id="errorExplain" /></h3>
      <br />
      <br />
      <h2><FormattedMessage id="errorOffer" /></h2>
    </div>
  </Layout>
);

export default injectIntl(ErrorPage);