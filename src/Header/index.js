import React from "react";

import logo from "./logo.svg";
import arrowDown from "./downarrow.svg";

import {
  Container,
  LogoText,
  Logo,
  LogoLocation,
  InviteTextBlock,
  InviteText,
  InviteTextHidden,
  FlightSearch,
  AirportName,
  CustomerTextCity,
  CustomerTextDate,
  CustomerDate,
  CalendarLogo,
  PassengerInfo,
  PassengerInfoSeatType,
  FindFlight,
  CitySwapper,
  ChoosePassengerType,
  CustomerInfoWrapper
} from "./styled";

export default () => (
  <Container>
    <LogoLocation>
      <Logo src={logo} alt="AviasalesLogo" />
      <LogoText>aviasales</LogoText>
    </LogoLocation>
    <InviteTextBlock>
      <InviteText>Поиск дешевых авиабилетов</InviteText>
      <InviteTextHidden>
        Лучший способ купить авиабилеты дешево
      </InviteTextHidden>
    </InviteTextBlock>
    <FlightSearch>
      <CustomerInfoWrapper>
        <CustomerTextCity departure defaultValue="Москва" />
        <AirportName />
        <CitySwapper />
      </CustomerInfoWrapper>
      <CustomerInfoWrapper>
        <CustomerTextCity arrival placeholder="Город прибытия" />
      </CustomerInfoWrapper>
      <CustomerDate>
        <CustomerTextDate departure placeholder="Туда" />
        <CalendarLogo departure />{" "}
        <CustomerTextDate arrival placeholder="Обратно" />
        <CalendarLogo />{" "}
      </CustomerDate>
      <CustomerInfoWrapper>
        <PassengerInfo>
          1 пассажир,
          <PassengerInfoSeatType>&nbsp;эконом</PassengerInfoSeatType>
          <ChoosePassengerType
            src={arrowDown}
            alt="Выбор количества пассажиров и типа билета"
          />
        </PassengerInfo>
      </CustomerInfoWrapper>
    </FlightSearch>
    <FindFlight>Найти билеты</FindFlight>
  </Container>
);
