import React from "react";

import pobeda from "./img-2.png";
import lufthansa from "./img.png";
import lufthansa_logo from "./img-1.png";

import {
  Container,
  GreetingText,
  BestOffers,
  Card,
  CardHeader,
  PriceInfo,
  Logo,
  CardContent,
  Offer,
  OfferText,
  OfferLogo,
  PricePrefix,
  Price,
  ExpirationDate,
  OfferInfo,
  ViewDetails,
  AdditionalInfo,
  ViaeAllOffers,
  Disclamer
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <div className="row">
        <div className="col-xl-offset-1  col-xl-10 col-lg-12 col-md-12">
          <GreetingText>Спецпредложения на авиабилеты</GreetingText>
          <BestOffers>
            <Card>
              <CardHeader>
                <PriceInfo>Билеты от 499 рублей!</PriceInfo>
              </CardHeader>
              <CardContent>
                <Offer>
                  <OfferLogo src={pobeda} alt="PobedaLogo" />
                  <OfferText>
                    <PricePrefix>
                      от
                      <Price>499 ₽</Price>
                    </PricePrefix>
                    <ExpirationDate>Осталось 45 дней</ExpirationDate>
                  </OfferText>
                </Offer>
                <OfferInfo>
                  Билеты от 499 рублей!<br /> Специальное предложение от
                  авиакомпании Победа
                </OfferInfo>
                <ViewDetails>Узнать подробности</ViewDetails>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PriceInfo>В Нью-Йорк от 20 680 ₽</PriceInfo>
                <Logo src={lufthansa_logo} alt="LufthansaLabel" />
              </CardHeader>
              <CardContent>
                <Offer>
                  <OfferLogo src={lufthansa} alt="LufthansaLogo" />
                  <OfferText>
                    <PricePrefix>
                      от
                      <Price>20 680 ₽</Price>
                    </PricePrefix>
                    <ExpirationDate>Осталось 19 дней</ExpirationDate>
                  </OfferText>
                </Offer>
                <OfferInfo>
                  Из Москвы в США от 20680 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </OfferInfo>
                <ViewDetails>Узнать подробности</ViewDetails>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PriceInfo>В Лос-Анджелес от…</PriceInfo>
                <Logo src={lufthansa_logo} alt="LufthansaLabel" />
              </CardHeader>
              <CardContent>
                <Offer>
                  <OfferLogo src={lufthansa} alt="LufthansaLogo" />
                  <OfferText>
                    <PricePrefix>
                      от
                      <Price>20 360 ₽</Price>
                    </PricePrefix>
                    <ExpirationDate>Осталось 19 дней</ExpirationDate>
                  </OfferText>
                </Offer>
                <OfferInfo>
                  Из Москвы в США от 22360 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </OfferInfo>
                <ViewDetails>Узнать подробности</ViewDetails>
              </CardContent>
            </Card>
          </BestOffers>
          <AdditionalInfo>
            <ViaeAllOffers>Смотреть все спецпредложения</ViaeAllOffers>
            <Disclamer>* средняя цена по направлению</Disclamer>
          </AdditionalInfo>
        </div>
      </div>
    </div>
  </Container>
);
