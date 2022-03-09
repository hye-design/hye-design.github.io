import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../components/gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/yudi_photo/',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'www.linkedin.com/in/designerhye',
    tooltip: 'Linked In',
  },
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Seonhye Park</h2>
        <p>
          저는 프로덕트 디자이너입니다. 당신의 경험이 다정하길 바랍니다.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="about" />
      </AboutImage>

      <AboutDetails>
        <h2>Hello, All</h2>
        <p>
          2019 ~ Mymusictaste, Product Designer<br />
          2015.04 ~ 2018.11, Web Designer(Head of WebDesignPart)<br />
          2013.08 ~ 2015.03, Web Developer
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
