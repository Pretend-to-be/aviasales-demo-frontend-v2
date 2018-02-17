import styled from "styled-components";

import phoneImageMobile from "./backgroundImage-16.png";
import phoneImageTablet from "./backgroundImage-18.png";

export const Container = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  padding: 24px 6px 220px 0;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 162px;
    height: 213px;
    bottom: 0;
    right: 50%;
    background: url(${phoneImageMobile}) no-repeat;
  }
  @media (min-width: 768px) {
    padding: 46px 72px 40px 264px;
    margin-top: 30px;
    background: linear-gradient(110.1deg, #00b0de -38.19%, #196ebd 61.81%);
    &::before {
      background: url(${phoneImageTablet}) no-repeat;
      width: 237px;
      height: 312px;
      left: 0;
    }
  }
`;

export const InviteText = styled.h1`
  margin: 0 auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-top: 0;
  }
`;

export const Stars = styled.img``;

export const RaterAmount = styled.p`
  margin-top: 24px;
  margin-left: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #ffffff;
  @media (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const PlatformList = styled.div`
  display: inline-block;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 5%;
  left: 57%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 40px;
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const Platform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  @media (min-width: 768px) {
    padding-right: 21px;
    padding-left: 21px;
    border-right: #ffffff 1px solid;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  }
`;

export const PlatformLogo = styled.img``;

export const PlatformName = styled.p`
  margin-top: 24px;
  margin-left: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;

  font-size: 14px;
  margin: 0 0 0 8px;
  color: #ffffff;
  @media (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;
