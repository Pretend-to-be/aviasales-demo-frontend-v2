import React from "react";

import calendar_starred from "./calendar-starred.svg";

import {
  Container,
  Logo,
  LogoBg,
  GreetingText,
  DirectionList,
  Direction,
  DirectionInfo,
  DirectionInfoText,
  DirectionFlagRus,
  DirectionFlagArm,
  DirectionFlagMol,
  DirectionCityName,
  DirectionCountryName,
  DirectionDepartureList,
  DirectionDepartureListCard,
  DirectionDepartureCity,
  DirectionDeparturePrice,
  CheapTicketsInfo,
  NotAnOfferWarning
} from "./styled";
export default () => (
  <Container>
    <div className="container">
      <div class="row">
        <div class="col-xl-offset-1 col-xl-10">
          <LogoBg>
            <Logo src={calendar_starred} />
          </LogoBg>
          <GreetingText>
            Лучшие цены на авиабилеты за последний месяц
          </GreetingText>
          <DirectionList>
            <Direction>
              <DirectionInfo>
                <DirectionFlagRus />
                <DirectionInfoText>
                  <DirectionCityName>Симферополь (Крым)</DirectionCityName>
                  <DirectionCountryName>КРЫМ</DirectionCountryName>
                </DirectionInfoText>
              </DirectionInfo>
              <DirectionDepartureList>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Москвы</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 4 813 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Санкт-Петербурга
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 7 857 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Новосибирска
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 15 127 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Екатеринбурга
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 9 275 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Челябинска</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 9 148 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
              </DirectionDepartureList>
            </Direction>
            <Direction>
              <DirectionInfo>
                <DirectionFlagArm />
                <DirectionInfoText>
                  <DirectionCityName>Ереван</DirectionCityName>
                  <DirectionCountryName>АРМЕНИЯ</DirectionCountryName>
                </DirectionInfoText>
              </DirectionInfo>
              <DirectionDepartureList>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Москвы</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 6 758 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Санкт-Петербурга
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 9 932 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Сочи</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 11 951 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Краснодара</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 11 741 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Ростова-на-Дону
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 11 956 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
              </DirectionDepartureList>
            </Direction>
            <Direction>
              <DirectionInfo>
                <DirectionFlagMol />
                <DirectionInfoText>
                  <DirectionCityName>Кишинёв</DirectionCityName>
                  <DirectionCountryName>МОЛДАВИЯ</DirectionCountryName>
                </DirectionInfoText>
              </DirectionInfo>
              <DirectionDepartureList>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Москвы</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 8 319 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Санкт-Петербурга
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 10 800 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Краснодара</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 12 098 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>Из Сургута</DirectionDepartureCity>
                  <DirectionDeparturePrice>от 16 277 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
                <DirectionDepartureListCard>
                  <DirectionDepartureCity>
                    Из Нового Уренгоя
                  </DirectionDepartureCity>
                  <DirectionDeparturePrice>от 15 987 ₽</DirectionDeparturePrice>
                </DirectionDepartureListCard>
              </DirectionDepartureList>
            </Direction>
          </DirectionList>
        </div>
      </div>
    </div>
    <div className="container">
      <div class="row">
        <div class="col-xl-offset-3 col-xl-6">
          <CheapTicketsInfo>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </CheapTicketsInfo>
          <NotAnOfferWarning>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </NotAnOfferWarning>
        </div>
      </div>
    </div>
  </Container>
);
