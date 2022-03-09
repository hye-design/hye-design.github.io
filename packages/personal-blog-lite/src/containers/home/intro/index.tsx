import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../../components/gatsby-image';
import SocialProfile from '../../../components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from './style';
import {
  IoLogoLinkedin
} from 'react-icons/io';

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoLinkedin />,
    url: 'www.linkedin.com/in/designerhye',
    tooltip: 'Linkedin',
  }
];

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.png/" }) {
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

  const { author, about } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.gatsbyImageData;

  return (
    <IntroWrapper>
      <IntroImage>
        <GatsbyImage src={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          HI!👋 I’m <b>Your Designer.</b>
        </IntroTitle>
        <Desciption>{about} <br></br> Product Desgienr at MYMUSICTASTE </Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  );
};

export default Intro;
