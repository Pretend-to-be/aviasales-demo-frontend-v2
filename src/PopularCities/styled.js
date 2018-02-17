import styled from "styled-components";
import rus from "./rus.png";
import spain from "./spain.png";

export const Container = styled.div`
  background-color: #f8fcff;
  padding: 53px 6px 0;
`;
export const CompassBg = styled.div`
  margin: 0 auto;
  padding: 16px;
  background: #e2f8ff;
  border-radius: 50px;
  width: 38px;
  height: 38px;
`;

export const Compass = styled.img``;

export const PopularCityDescription = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin: 24px 16px 0;
  padding: 2px 20px 0px 20px;
  color: #4a4a4a;
  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
    margin: 24px 145px 0;
  }
`;
export const PopularCityName = PopularCityDescription.extend`
  color: #00ace2;
  padding: 0px;
  margin: 0px;
  @media (min-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const PopularCityChooser = styled.img`
  padding-left: 8px;
  display: inline;
`;

export const DirectionTypeBlock = styled.div`
  margin-top: 32px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 0 72px;
    justify-content: space-around;
  }
`;

export const DirectionTypeElement = styled.div`
  box-sizing: border-box;
  flex: 1 33%;
  align-self: center;
  justify-content: center;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    flex: none;
  }
`;

export const DirectionTypeChosenElement = DirectionTypeElement.extend`
padding-bottom: 21px;
	}
`;

export const DirectionTypeLogo = styled.img`
  width: 22px;
  height: 22px;
`;

export const DirectionTypeLogoBg = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50px;
  padding: 13px;
  margin: auto;
  height: 22px;
  width: 22px;
`;

export const DirectionTypeDesc = styled.h1`
  box-sizing: border-box;
  max-width: 64px;
  margin: 2px auto;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #00ace2;
`;

export const DirectionTypeChosenUnderline = styled.img`
  display: block;
  padding-top: 2px;
  margin: 0 auto;
`;

export const DirectionTypeDescChosen = DirectionTypeDesc.extend`
  color: #5c5c5c;
`;
/*----------------------------------------------------------------------------*/
export const ChosenDirectionTypeProposal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10% 25px;
`;

export const ChosenDirectionTypeProposalCity = styled.div`
  margin-bottom: 15px;
  min-width: 308px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
`;

export const ChosenDirectionTypeProposalPicture = styled.img`
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

export const ChosenDirectionTypeProposalContent = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 0 0 8px 8px;
  position: relative;
`;

export const ChosenDirectionTypeProposalCityInfo = styled.div`
  background-color: white;
  border-radius: 0 0 8px 8px;
  @media (min-width: 768px) {
    padding-left: 65px;
  }
`;

export const ChosenDirectionTypeProposalOfferInfo = ChosenDirectionTypeProposalCityInfo.extend`
  justify-content: flex-end;
`;

export const ChosenDirectionTypeProposalCityName = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;
  margin: 16px 16px 4px 10px;
`;

export const ChosenDirectionTypeProposalCountryName = ChosenDirectionTypeProposalCityName.extend`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 12px;
  color: #a0b0b9;
  margin: 0px 0px 12px 10px;
`;

export const ChosenDirectionTypeProposalOfferPrice = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;
  color: #00bae8;
  margin: 16px 10px 4px 0;
`;

export const ChosenDirectionTypeProposalOfferDate = ChosenDirectionTypeProposalOfferPrice.extend`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  margin: 0px 10px 12px 0px;
`;

export const ChosenDirectionTypeProposalOfferFlagRus = styled.div`
  position: absolute;
  left: 23px;
  top: 20px;
  background: url(${rus});
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 100px;
  width: 30px;
  height: 30px;
  background-size: cover;
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const ChosenDirectionTypeProposalOfferFlagSpain = styled.div`
  position: absolute;
  left: 23px;
  top: 20px;
  background: url(${spain});
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 100px;
  width: 30px;
  height: 30px;
  background-size: cover;
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
