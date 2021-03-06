import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PersonalBlog from '../containers/portfolio';
import SEO from '../components/seo';

const HomePage = (props: any) => {
  const { data } = props;

  return (
    <Layout>
      <SEO
        title="HYE DESIGN"
        description={data.site.siteMetadata.description}
      />
      <PersonalBlog />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
