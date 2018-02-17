import React from "react";

import apple_logo from "./apple-logo.svg";
import android_logo from "./android-logo.svg";
import win_logo from "./windows-logo.svg";
import rating from "./stars-rating.svg";

import {
  Container,
  Content,
  InviteText,
  Rating,
  StarsImage,
  Stars,
  RaterAmount,
  PlatformList,
  Platform,
  PlatformLogo,
  PlatformName
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <div className="row">
        <div className="col-xl-offset-4 col-lg-offset-4 col-md-offset-4 col-xl-7 col-lg-7 col-md-7">
          <Content>
            <InviteText>Скачай мобильное приложение Aviasales.ru</InviteText>
            <Rating>
              <Stars>
                <StarsImage src={rating} alt="AppRating" />
              </Stars>
              <RaterAmount>Более 103 000 оценок</RaterAmount>
            </Rating>
            <PlatformList>
              <Platform>
                <PlatformLogo src={apple_logo} alt="Apple Logo" />
                <PlatformName>iPhone или iPad</PlatformName>
              </Platform>
              <Platform>
                <PlatformLogo src={android_logo} alt="Apple Logo" />
                <PlatformName>Android</PlatformName>
              </Platform>
              <Platform>
                <PlatformLogo src={win_logo} alt="Apple Logo" />
                <PlatformName>Windows Phone</PlatformName>
              </Platform>
            </PlatformList>
          </Content>
        </div>
      </div>
    </div>
  </Container>
);
