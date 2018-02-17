import React from "react";

import sliderLeft from "./slider-left.svg";
import sliderRight from "./slider-right.svg";
import s7Logo from "./agenciesAgencyLogo-1.png";
import oneTwoTrip from "./agenciesAgencyLogo-2.png";
import koreanAir from "./agenciesAgencyLogo-3.png";
import eltw from "./agenciesAgencyLogo-4.png";
import aeroflot from "./agenciesAgencyLogo.png";
import coloredOutline from "./Rectangle 3.png";

import {
  Container,
  Offer,
  InviteText,
  Slider,
  Previous,
  Next,
  StateDisplay,
  State,
  Content,
  CompanyLogo,
  Outline
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Offer>
        <InviteText>
          Дешевые авиабилеты от крупнейших авиакомпаний и агентств
        </InviteText>
        <Slider>
          <Content>
            <CompanyLogo src={aeroflot} alt="Aeroflot" />
            <CompanyLogo src={s7Logo} alt="s7Logo" />
            <CompanyLogo src={oneTwoTrip} alt="oneTwoTrip" />
            <CompanyLogo src={koreanAir} alt="koreanAir" />
            <CompanyLogo src={eltw} alt="eltw" />
          </Content>
          <Previous src={sliderLeft} />
          <Next src={sliderRight} />
          <StateDisplay>
            <State active />
            <State />
            <State />
          </StateDisplay>
        </Slider>
      </Offer>
    </div>
    <Outline src={coloredOutline} />
  </Container>
);
