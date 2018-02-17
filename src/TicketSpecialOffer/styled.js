import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  padding: 16px 6px 24px 6px;

  @media (min-width: 768px) {
    padding: 24px 8px;
    background: linear-gradient(
      119.08deg,
      #00b0de -26.05%,
      #01aedc -22.37%,
      #02abdb -18.64%,
      #02abdb -14.95%,
      #02abdb -14.73%,
      #196ebd 73.4%
    );
  }
`;

export const GreetingText = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;
`;

export const BestOffers = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  margin-bottom: 12px;
  width: 308px;
  @media (min-width: 768px) {
    width: 240px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px 13px 16px;
  width: auto;
  background-color: #cd2027;
`;

export const PriceInfo = GreetingText.extend`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CompanyLogo = styled.img``;

export const CardContent = styled.div`
  background-color: #ffffff;
  padding: 0 8px 16px;
`;

export const CompanyOffer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 8px;
`;

export const CompanyOfferText = styled.div`
  padding: 20px 8px 0 0;
  @media (min-width: 768px) {
    padding: 20px 0 0;
  }
`;

export const CompanyOfferLogo = styled.img`
  margin-top: 22px;
  @media (min-width: 768px) {
    width: 100px;
    height: 25px;
  }
`;

export const PricePrefix = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  text-align: right;
  line-height: 16px;
  font-size: 12px;
  margin: 0 0 8px 0;

  color: #5c5c5c;
`;

export const Price = styled.span`
	font-family: "Roboto";
	font-style: normal;
	font-weight: normal;
	line-height: 16px;
	font-size: 20px;
	color: #5c5c5c;
	margin: 18px 8px 0 4px;
	@media (min-width: 768px) {
		18px 0 0 4px;
	}
`;

export const ExpirationDate = PricePrefix.extend`
  margin: 8px 8px 0 0;
  line-height: 15px;
  color: #d93633;
  @media (min-width: 768px) {
    margin: 8px 0 0 0;
  }
`;

export const OfferInfo = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin-top: 15px;

  color: #242424;
`;

export const ViewDetails = styled.button`
  margin-top:: 27px;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 0;
  }
`;

export const ViaeAllOffers = styled.a`
  margin: 20px 28px 8px 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;

  color: #ffffff;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Disclamer = PricePrefix.extend`
  margin: 0 26px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
