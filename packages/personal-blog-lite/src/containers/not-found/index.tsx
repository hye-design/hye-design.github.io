import * as React from 'react';
import GatsbyImage from '../../components/gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  NotFoundWrapper,
  NotFoundContent,
  NotFoundImage,
  Goback,
  Icon,
} from './style';

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/404.png/" }) {
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
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>This Page Was Lost</h1>
        <p>
          입력하신 페이지를 찾을 수가 없습니다. 다시 검색을 시도하시거나, 아래의 버튼을 이용해 뒤로 돌아가주세요 :)<br />
          The Page You are looking for isn’t available. Try to search again or use the Go Back button below.
        </p>
        <Goback>
          <Link to="/">
            <Icon>
              <IoMdArrowRoundBack />
            </Icon>
            Go Back
          </Link>
        </Goback>
      </NotFoundContent>
      {/* <NotFoundImage>
        <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="not found" />
      </NotFoundImage> */}
    </NotFoundWrapper>
  );
};

export default NotFound;
