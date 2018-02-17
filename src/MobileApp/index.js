import React from "react";

import apple_logo from "./apple-logo.svg";
import android_logo from "./android-logo.svg";
import win_logo from "./windows-logo.svg";
import rating from "./stars-rating.svg";

import {
  Container,
  InviteText,
  Rating,
  Stars,
  RaterAmount,
  PlatformList,
  Platform,
  PlatformLogo,
  PlatformName
} from "./styled";

export default () => (
  <Container>
    <InviteText>Скачай мобильное приложение Aviasales.ru</InviteText>
    <Rating>
      <Stars src={rating} alt="AppRating" />
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
  </Container>
);
