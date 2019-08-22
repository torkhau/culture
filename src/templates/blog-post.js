import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import PersonsInf from '../components/persons/persons-inf';

const Persons = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <IntlContextConsumer>
    {({ language: currentLocale }) => (
      <Layout>
        <div>
          <PersonsInf
            name = {(currentLocale === 'en')?post.frontmatter.name:post.frontmatter[`${currentLocale}`].name}
            picture = {post.frontmatter.picture}
            birthDate = {post.frontmatter.birthDate}
            deathDate = {post.frontmatter.deathDate}
            video = {post.frontmatter.videoId}
            coordinates = {post.frontmatter[`${currentLocale}`].coordinates}
            lifeEvents = {post.frontmatter[`${currentLocale}`].lifeEvents}
            works = {post.frontmatter[`${currentLocale}`].works}
            pictures = {post.frontmatter.gallery}
          />
        </div>
      </Layout>
    )}
  </IntlContextConsumer>
  );
};

export default injectIntl(Persons);

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      birthDate
      deathDate
      picture
      name
      videoId
      gallery {
        picture
        title
      }
      ru {
        coordinates {
          description
          latitude
          longitude
        }
        lifeEvents {
          date
          desctiption
        }
        works {
          date
          title
        }
        name
      }
      en {
        coordinates {
          description
          latitude
          longitude
        }
        lifeEvents {
          date
          desctiption
        }
        works {
          date
          title
        }
      }
      be {
        coordinates {
          description
          latitude
          longitude
        }
        lifeEvents {
          date
          desctiption
        }
        works {
          date
          title
        }
        name
      }
    }
  }
}`;  