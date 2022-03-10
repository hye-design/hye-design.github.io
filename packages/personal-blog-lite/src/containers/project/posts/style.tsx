import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  .post_card {
    margin-bottom: 120px;
    @media (max-width: 990px) {
      margin-bottom: 90px;
    }
    @media (max-width: 575px) {
      margin-bottom: 60px;
    }
  }
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (max-width: 990px) {
    padding: 0 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 0 25px 0 25px;
  }
`;

export const SecTitle = styled.div`
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: '';
    width: 68px;
    height: 1px;
    background: #292929;
    display: block;
    margin-top: 8px;
  }
  p{
    margin-top: 4px;
    font-size:14px;
    color: ${themeGet('colors.lightTextColor: "#757575"', '#757575')};
  }
`;

export default BlogPostsWrapper;
