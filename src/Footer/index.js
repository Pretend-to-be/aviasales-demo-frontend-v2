import React from "react";

import vkIcon from "./vkicon.svg";
import faceIcon from "./faceicon.svg";
import instIcon from "./insticon.svg";
import twitterIcon from "./twiicon.svg";
import viberIcon from "./vibicon.svg";

import apple_logo_icon from "./Apple_Link_Logo.svg";
import google_logo_icon from "./Google_Link_Logo.svg";
import win_logo_icon from "./Win_Link_Logo.svg";

import {
  Container,
  Rubricator,
  RubricatorUnit,
  RubricatorUnitHeading,
  RubricatorUnitContent,
  RubricatorUnitExtend,
  UsefulLinks,
  UsefulLink,
  SocialMedia,
  SocialMediaUnit,
  SocialMediaLogo,
  SocialMediaName,
  HotelReserve,
  HotelReserveLink,
  InstallAppBlock,
  InstallAppButton,
  InstallAppButtonLogo,
  InstallDownloadAt,
  InstallPlace,
  InstallAppButtonText,
  Copyright,
  ForCustomers,
  UsefulStuff
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Rubricator>
        <RubricatorUnit>
          <RubricatorUnitHeading>СТРАНЫ</RubricatorUnitHeading>
          <RubricatorUnitContent>Россия</RubricatorUnitContent>
          <RubricatorUnitContent>Таиланд</RubricatorUnitContent>
          <RubricatorUnitContent>Черногория</RubricatorUnitContent>
          <RubricatorUnitContent>Кипр</RubricatorUnitContent>
          <RubricatorUnitContent>Болгария</RubricatorUnitContent>
          <RubricatorUnitContent>Грузия</RubricatorUnitContent>
          <RubricatorUnitExtend>Все страны →</RubricatorUnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <RubricatorUnitHeading>ГОРОДА</RubricatorUnitHeading>
          <RubricatorUnitContent>Москва</RubricatorUnitContent>
          <RubricatorUnitContent>Санкт-Петербург</RubricatorUnitContent>
          <RubricatorUnitContent>Симферополь</RubricatorUnitContent>
          <RubricatorUnitContent>Адлер</RubricatorUnitContent>
          <RubricatorUnitContent>Екатеринбург</RubricatorUnitContent>
          <RubricatorUnitContent>Лондон</RubricatorUnitContent>
          <RubricatorUnitExtend>Все города →</RubricatorUnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <RubricatorUnitHeading>АВИАКОМПАНИИ</RubricatorUnitHeading>
          <RubricatorUnitContent>Air Berlin</RubricatorUnitContent>
          <RubricatorUnitContent>Air France</RubricatorUnitContent>
          <RubricatorUnitContent>Alitalia</RubricatorUnitContent>
          <RubricatorUnitContent>Air Baltic</RubricatorUnitContent>
          <RubricatorUnitContent>Emirates</RubricatorUnitContent>
          <RubricatorUnitContent>KLM</RubricatorUnitContent>
          <RubricatorUnitExtend>Все авиакомпании →</RubricatorUnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <RubricatorUnitHeading>АЭРОПОРТЫ</RubricatorUnitHeading>
          <RubricatorUnitContent>Шереметьево</RubricatorUnitContent>
          <RubricatorUnitContent>Курумоч</RubricatorUnitContent>
          <RubricatorUnitContent>Домодедово</RubricatorUnitContent>
          <RubricatorUnitContent>Толмачево</RubricatorUnitContent>
          <RubricatorUnitContent>Владивосток</RubricatorUnitContent>
          <RubricatorUnitContent>Гамбург</RubricatorUnitContent>
          <RubricatorUnitExtend>Все аэропорты →</RubricatorUnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <RubricatorUnitHeading>НАПРАВЛЕНИЯ</RubricatorUnitHeading>
          <RubricatorUnitContent>MOW – SIP</RubricatorUnitContent>
          <RubricatorUnitContent>MOW – AER</RubricatorUnitContent>
          <RubricatorUnitContent>MOW – TIV</RubricatorUnitContent>
          <RubricatorUnitContent>MOW – MRV</RubricatorUnitContent>
          <RubricatorUnitContent>LED – MOW</RubricatorUnitContent>
          <RubricatorUnitContent>MOW – BKK</RubricatorUnitContent>
        </RubricatorUnit>
        <RubricatorUnit>
          <RubricatorUnitHeading>СЕРВИСЫ</RubricatorUnitHeading>
          <RubricatorUnitContent>Горящие авиабилеты</RubricatorUnitContent>
          <RubricatorUnitContent>Календарь низких цен</RubricatorUnitContent>
          <RubricatorUnitContent>Карта низких цен</RubricatorUnitContent>
          <RubricatorUnitContent>Спецпредложения</RubricatorUnitContent>
          <RubricatorUnitContent>Таблица цен</RubricatorUnitContent>
          <RubricatorUnitContent>Блог</RubricatorUnitContent>
          <RubricatorUnitContent>Помощь</RubricatorUnitContent>
        </RubricatorUnit>
      </Rubricator>
      <UsefulStuff>
        <ForCustomers>
          <UsefulLinks>
            <UsefulLink>О компании</UsefulLink>
            <UsefulLink>Партнёрская программа</UsefulLink>
            <UsefulLink>Реклама</UsefulLink>
            <UsefulLink>Вакансии</UsefulLink>
            <UsefulLink>Помощь</UsefulLink>
            <UsefulLink>Правила</UsefulLink>
            <UsefulLink>White Label авиабилеты</UsefulLink>
          </UsefulLinks>

          <SocialMedia>
            <SocialMediaUnit>
              <SocialMediaLogo src={vkIcon} alt="VkIcon" />
              <SocialMediaName>Вконтакте</SocialMediaName>
            </SocialMediaUnit>
            <SocialMediaUnit>
              <SocialMediaLogo src={faceIcon} alt="faceIcon" />
              <SocialMediaName>Фейсбук</SocialMediaName>
            </SocialMediaUnit>
            <SocialMediaUnit>
              <SocialMediaLogo src={instIcon} alt="instIcon" />
              <SocialMediaName>Инстаграм</SocialMediaName>
            </SocialMediaUnit>
            <SocialMediaUnit>
              <SocialMediaLogo src={twitterIcon} alt="twitterIcon" />
              <SocialMediaName>Твиттер</SocialMediaName>
            </SocialMediaUnit>
            <SocialMediaUnit>
              <SocialMediaLogo src={viberIcon} alt="viberIcon" />
              <SocialMediaName>Вайбер</SocialMediaName>
            </SocialMediaUnit>
          </SocialMedia>
          <HotelReserve>
            <HotelReserveLink>Поиск и бронирование отелей</HotelReserveLink>
          </HotelReserve>
        </ForCustomers>
        <ForCustomers>
          <InstallAppBlock>
            <InstallAppButton>
              <InstallAppButtonLogo src={apple_logo_icon} alt="Apple" />
              <InstallAppButtonText>
                <InstallDownloadAt>Скачайте в </InstallDownloadAt>
                <InstallPlace>App Store</InstallPlace>
              </InstallAppButtonText>
            </InstallAppButton>
            <InstallAppButton>
              <InstallAppButtonLogo src={google_logo_icon} alt="Google" />
              <InstallAppButtonText>
                <InstallDownloadAt>Скачайте в </InstallDownloadAt>
                <InstallPlace>App Store</InstallPlace>
              </InstallAppButtonText>
            </InstallAppButton>
            <InstallAppButton>
              <InstallAppButtonLogo src={win_logo_icon} alt="WindowsPhone" />
              <InstallAppButtonText>
                <InstallPlace>Windows</InstallPlace>
                <InstallPlace>Phone</InstallPlace>
              </InstallAppButtonText>
            </InstallAppButton>
          </InstallAppBlock>
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </ForCustomers>
      </UsefulStuff>
    </div>
  </Container>
);
