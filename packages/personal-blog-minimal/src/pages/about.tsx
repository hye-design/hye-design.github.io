import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

const AboutPage: React.FunctionComponent<PageProps> = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
