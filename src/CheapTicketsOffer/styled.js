import styled from "styled-components";

export const Container = styled.div``;

export const Offer = styled.div`
  padding: 24px 8px 32px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const InviteText = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;

  color: #5c5c5c;
  margin: 0;
`;

export const Slider = styled.div`
  padding: 24px 0 0 0;
  position: relative;
`;

export const SliderContent = styled.div`
  text-align: center;
`;

export const CompanyLogo = styled.img`
  padding: 24px 24px;
`;

export const SliderPrevious = styled.img`
  position: absolute;
  left: 0;
  top: 45%;
`;

export const SliderNext = styled.img`
  position: absolute;
  right: 0;
  top: 45%;
  left: unset;
`;

export const SliderStateDisplay = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SliderState = styled.div`
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #818181;
  border-radius: 50px;
  margin: 0 4px;
  padding: 5px;
  ${props => (props.active ? "background-color: #818181;" : " ")};
`;

export const Outline = styled.img`
  width: 100%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
