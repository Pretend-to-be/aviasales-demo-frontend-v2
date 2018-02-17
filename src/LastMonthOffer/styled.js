import styled from "styled-components";

import rus from "./rus.png";
import arm from "./arm.png";
import mol from "./mol.png";

export const Container = styled.div`
  padding: 32px 6px 40px;
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  @media (min-width: 768px) {
    padding: 32px 72px 40px;
  }
`;

export const Logo = styled.img``;

export const LogoBg = styled.div`
  margin: 0 auto;
  padding: 16px;
  background: #e2f8ff;
  border-radius: 50px;
  width: 28px;
  height: 28px;
`;
export const GreetingText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin: 20px 0 40px 0;
  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
  }
`;

export const DirectionList = styled.div`
  display: block;
`;

export const Direction = styled.div`
  display: block;
  flex-basis: 100%;
  margin: 24px 0 24px;
  border-bottom: 1px dashed #afbec6;
  &::last-child {
    border: none;
  }
`;

export const DirectionInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const DirectionFlagRus = styled.div`
  background: url(${rus});
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 100px;
  width: 30px;
  height: 30px;
  background-size: cover;
  display: inline-block;
`;

export const DirectionFlagArm = DirectionFlagRus.extend`
  background: url(${arm});
  background-size: cover;
`;

export const DirectionFlagMol = DirectionFlagRus.extend`
  background: url(${mol});
  background-size: cover;
`;

export const DirectionInfoText = styled.div`
  display: inline-block;
  margin-left: 12px;
`;

export const DirectionCityName = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  margin: 0;
  color: #5b5b5c;
`;

export const DirectionCountryName = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  margin: 2px 0 0 0;
  color: #a0b0b9;
`;

export const DirectionDepartureList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const DirectionDepartureListCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DirectionDepartureCity = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  margin: 0px;

  color: #4a4a4a;
`;

export const DirectionDeparturePrice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  margin: 0px;

  color: #00bae8;
`;

export const CheapTicketsInfo = styled.p`
  margin-top: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  text-align: center;

  color: #4a4a4a;

  @media (min-width: 768px) {
    line-height: 26px;
  }
`;

export const NotAnOfferWarning = CheapTicketsInfo.extend`
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  margin-top: 24px;

  color: #a0b0b9;
  @media (min-width: 768px) {
    line-height: 20px;
  }
`;
