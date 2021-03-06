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
      {/* <AboutPageTitle>
        <h2>About</h2>
      </AboutPageTitle> */}

      <AboutImage>
        <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="about" />
      </AboutImage>

      <AboutDetails>
        <h2>
          <b>Hello, Allπ </b><br />
        </h2>
        <p>μ λ λΉμ μ λ€μ ν λμμ΄λ λ°μ νμλλ€.<br />
          μ¬λ μμ²΄μ λν κ΄μ¬μ΄ λ§μ΅λλ€.<br />
          μ μ κ²°μ μ΄ μ³λ€ λ―Ώμ§ μμ§λ§ κ°λμ μ§κ΄μ μ΄μμ.<br />
          λ€μν κ²λ€μ λ°°μ°κ³  μΆμ΄ν©λλ€.<br />
          νμ¬λ λλ‘μκ³Ό λ°°μ κ·Έ μμ²΄μ λΉ μ Έμμ΅λλ€.
        </p>
        <br />
        <p>
          <h3> ππ»ββοΈ μ λ μ΄λ° κ±Έ ν  μ€ μμμ.</h3>
          - UX/UI μΈμ¬μ΄νΈ λ° μ μ  νλ‘μ° νλ©΄ μ€κ³<br />
          - λ€μν ν΄μ νμ©νμ¬ ν¨κ³Όμ μΈ μλ¬΄ μ§ν<br />
          - λμμΈ μμ€ν κ΅¬μΆ λ° μμ€νμ μ΄μ©ν ν¨μ¨μ μΈ λμμΈ μμ<br />
          - μ¬μ©μ κ²½νμ μν λͺ¨λ  νλ‘μΈμ€
        </p>
        <br />
        <p>
          <h3>π€ μ΄λ° μκ°λ€μ΄ μ λ₯Ό μ±μ₯μμΌ°μ΄μ.</h3>
          - 2019 ~ Mymusictaste, Product Designer<br />
          - 2015.04 ~ 2018.11, Web Designer(Head of WebDesignPart)<br />
          - 2013.08 ~ 2015.03, Web Developer
        </p>
        <br />
        <p>
          <h3>β€οΈ TOOLS</h3>
          - Figma, Sketch, Notion, Google Docs !
        </p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
