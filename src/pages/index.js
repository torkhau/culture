import React from 'react';
import {
  injectIntl,
  FormattedMessage,
  IntlContextConsumer,
} from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import Developer from '../components/developer/developer';
import PhotographerCard from '../components/photographerCard/photographerCard';
import { getRandomIntFromCurrentDate, parseCmsDate } from '../utils';
import styles from './index.module.css';

const IndexPage = ({ data }) => {
  const getDevelopersList = currentLocale =>
    data.allMarkdownRemark.edges
      .map(el => el.node.frontmatter)
      .filter(frontmatter => frontmatter.type === 'developer')
      .map(frontmatter => {
        const { enName, githubName, picture } = frontmatter;
        return (
          <Developer
            key={enName}
            name={frontmatter[`${currentLocale}Name`]}
            githubName={githubName}
            photoURL={picture}
          />
        );
      });

  const getPhotographerOfTheDay = currentLocale => {
    const photographers = data.allMarkdownRemark.edges.filter(
      el => el.node.frontmatter.type === 'photographer'
    );
    const photographer =
      photographers[getRandomIntFromCurrentDate(photographers.length)];
    
    let { name } = photographer.node.frontmatter;
    if (currentLocale !== 'en') {
      name = photographer.node.frontmatter[`${currentLocale}`].name;
    } 
    const {
      picture,
      birthDate,
      deathDate,
    } = photographer.node.frontmatter;

    const { slug } = photographer.node.fields;

    return (
      <PhotographerCard
        photoURL={picture}
        name={name}
        slug={slug}
        birthDate={parseCmsDate(birthDate)}
        deathDate={parseCmsDate(deathDate)}
      />
    );
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <Layout>
          <p className={styles.description}>
            {data.markdownRemark.frontmatter[`${currentLocale}SiteDescription`]}
          </p>
          <h2>
            <FormattedMessage id="photographerOfTheDay" />
          </h2>
          {getPhotographerOfTheDay(currentLocale)}
          <div className={styles.photographerOfTheDayWrapper}></div>
          <h2>
            <FormattedMessage id="ourTeam" />
          </h2>
          <div className={styles.developersBlock}>
            {getDevelopersList(currentLocale)}
          </div>
        </Layout>
      )}
    </IntlContextConsumer>
  );
};

export default injectIntl(IndexPage);

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Site description" } }) {
      frontmatter {
        enSiteDescription
        ruSiteDescription
        beSiteDescription
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
            birthDate
            deathDate
            enName
            ruName
            beName
            githubName
            picture
            type
            be {
              name
            }
            ru {
              name
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
