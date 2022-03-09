import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Product Designer. 당신의 경험이 다정하기를 바랍니다."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
