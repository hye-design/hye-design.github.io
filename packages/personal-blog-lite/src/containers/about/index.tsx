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
          <b>Hello, All👋 </b><br />
        </h2>
        <p>안녕하세요. 저는 당신의 다정한 디자이너 박선혜입니다.<br />
          사람 자체에 대한 관심이 많습니다.<br />
          저의 결정이 옳다 믿지 않지만 가끔은 직관적이에요.<br />
          다양한 것들을 배우고 싶어합니다.<br />
          현재는 드로잉과 배움 그 자체에 빠져있습니다.
        </p>
        <br />
        <p>
          <h3> 🙋🏻‍♀️ 저는 이런 걸 할 줄 알아요.</h3>
          - UX/UI 인사이트 및 유저 플로우 화면 설계<br />
          - 다양한 툴을 활용하여 효과적인 업무 진행<br />
          - 디자인 시스템 구축 및 시스템을 이용한 효율적인 디자인 작업<br />
          - 사용자 경험을 위한 모든 프로세스
        </p>
        <br />
        <p>
          <h3>🤔 이런 시간들이 저를 성장시켰어요.</h3>
          - 2019 ~ Mymusictaste, Product Designer<br />
          - 2015.04 ~ 2018.11, Web Designer(Head of WebDesignPart)<br />
          - 2013.08 ~ 2015.03, Web Developer
        </p>
        <br />
        <p>
          <h3>❤️ TOOLS</h3>
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
