import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const AboutWrapper = styled.div`
  position: relative;
  padding: 90px 75px 0 75px;
  display : flex;
  align-items: flex-start;
  margin:0 auto;
  width: 1180px;

  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
    flex-direction: column;
    width:100%;
  }
  @media (max-width: 575px) {
    width:100%;
    padding: 60px 25px 0 25px;
  }
`;

export const AboutPageTitle = styled.div`
  margin-bottom: 45px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  h2 { 
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet('colors.textColor', '#292929')};
    line-height: 1.53;
    margin-bottom: 10px;
    @media (max-width: 990px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

export const AboutImage = styled.div`
  width:100%;
  max-width:700px;
  margin:0 auto;
  @media (max-width: 990px) {
    margin-bottom: 60px;
    width: 60%;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const AboutDetails = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-left: 50px;
  flex:0 0 50%;

    font-size: 14px;
    font-weight: 500;
    color: ${themeGet('colors.textColor', '#292929')};
    margin-bottom: 40px;
    @media (max-width: 990px) {
      margin-bottom: 30px;
      padding-left: 0px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 25px;
    }
    @media (max-width: 400px) {
      padding-left:0;
    }
  }
`;
export const SocialProfiles = styled.div`
  margin-top: 60px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 40px;
  }

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    background: #292929;
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`;
