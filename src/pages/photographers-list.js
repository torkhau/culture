import React from 'react';
import {
  injectIntl,
  FormattedMessage,
  IntlContextConsumer
} from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import Search from '../components/search/search'
import { graphql } from 'gatsby';

const PhotographersList = ({ data, intl }) => {
  const getArrayData = (queryData, currentLocale) => {
    return queryData.map(elem => {
      const { node } = elem;
      const resObj = {};
      let { name } = node.frontmatter;
      if (currentLocale !== 'en') {
        name = node.frontmatter[`${currentLocale}`].name;
      } 
      resObj.name = name;
      resObj.picture = node.frontmatter.picture;
      resObj.birthDate = node.frontmatter.birthDate;
      resObj.deathDate = node.frontmatter.deathDate;
      let birthplace = node.frontmatter.birthplace || '';
      if (currentLocale !== 'en') {
        birthplace = node.frontmatter[`${currentLocale}`].birthplace || '';
      } 
      resObj.birthplace = birthplace;
      resObj.slug = node.fields.slug;
      return resObj;
    })
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <Layout>
          <h2>
            <FormattedMessage id="belarusianPhotographers" />
          </h2>
          <Search
            placeholder={intl.formatMessage({ id: 'search' })}
            list={getArrayData(data.allMarkdownRemark.edges, currentLocale)}
          />
        </Layout>
      )}
    </IntlContextConsumer>
  );
}

export default injectIntl(PhotographersList);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "photographer" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            picture
            birthDate
            deathDate
            birthplace
            be {
              name
              birthplace
            }
            ru {
              name
              birthplace
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

