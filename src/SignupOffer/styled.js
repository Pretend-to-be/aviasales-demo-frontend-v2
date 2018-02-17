import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 206px 61px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

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
`;

export const SocialMediaBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialMediaLabel = styled.img``;

export const EmailSignupBlock = styled.div`
  text-align: center;
  display: inline-block;
  position: relative;
`;

export const MediaLink = styled.a``;

export const EmailField = styled.input`
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  padding: 7px 148px 7px 13px;
`;

export const SubmitButton = styled.button`
  background: #ff8e41;
  border-radius: 2px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  padding: 8px 20px 6px;
  right: 0px;
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
