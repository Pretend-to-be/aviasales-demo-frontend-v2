import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 200px 61px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0 61px;
  }
`;

export const SaleOffer = styled.div``;

export const InviteText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
`;

export const HowToSignUp = styled.p`
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin: 16px;
`;

export const subscriptions = styled.div``;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialMediaLabel = styled.img``;

export const EmailSignup = styled.div`
  text-align: center;
  display: block;
  position: relative;
`;

export const MediaLink = styled.a``;

export const EmailField = styled.input`
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  padding: 7px 25px 7px 13px;
`;

export const SubmitButton = styled.button`
  background: #ff8e41;
  border-radius: 2px;
  border: none;
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 8px 20px 6px;
`;

export const SocialMediaBg = styled.div`
  background: #9b9b9b;
  border: 1px solid #979797;
  border-radius: 50px;
  width: 36px;
  height: 36px;
  margin: 20px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
