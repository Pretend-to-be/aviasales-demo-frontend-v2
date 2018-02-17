import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 6px 24px;
  @media (min-width: 768px) {
    padding: 0 6px 24px;
  }
`;

export const FooterRubricator = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #e0e6e8;
  box-sizing: border-box;
  padding-bottom: 24px;
  justify-content: flex-start;
`;

export const FooterRubricatorUnit = styled.div`
  flex: 1 50%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-top: 40px;
    flex: 1 25%;
    &:last-child {
      flex: 1 75%;
    }
  }
`;

export const FooterRubricatorUnitHeading = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin: 0px;
  padding-bottom: 16px;
`;

export const FooterRubricatorUnitContent = FooterRubricatorUnitHeading.extend`
  font-weight: normal;
  padding-bottom: 12px;
`;

export const FooterRubricatorUnitExtend = FooterRubricatorUnitHeading.extend`
  padding-top: 4px;
`;

export const FooterUsefulLinks = styled.div`
  padding-top: 24px;
  padding-right: 40px;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FooterUsefulLink = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;

  padding-right: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    padding-right: 12px;
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 16px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FooterSocialMediaUnit = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  flex: 1 33%;
  &:last-child {
    flex: 1 67%;
  }
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex: 1 1%;
    &:last-child {
      flex: 1 1%;
    }
  }
`;

export const FooterSocialMediaLogo = styled.img``;

export const FooterSocialMediaName = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin: 0px;
  color: #4a4a4a;
  padding-left: 5px;
`;
export const FooterHotelReserve = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 16px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FooterHotelReserveLink = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

export const FooterInstallAppBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const FooterInstallAppButton = styled.div`
  background: #1e292d;
  border-radius: 5px;
  padding: 8px 0 6px 12px;
  margin-bottom: 8px;
  position: relative;
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const FooterInstallAppButtonLogo = styled.img`
  display: inline-block;
  position: absolute;
  bottom: 25%;
`;

export const FooterInstallAppButtonText = styled.div`
  display: inline-block;
  padding: 0 25px 0 35px;
`;

export const FooterInstallDownloadAt = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 9px;

  color: #ffffff;
  margin: 0px;
`;

export const FooterInstallPlace = FooterInstallDownloadAt.extend`
  font-weight: bold;
  font-size: 12px;
  display: block;
`;

export const FooterCopyright = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  margin-bottom: 0px;

  color: #5b5b5c;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
