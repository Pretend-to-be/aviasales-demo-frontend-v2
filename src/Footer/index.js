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
  UnitHeading,
  UnitContent,
  UnitExtend,
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
          <UnitHeading>СТРАНЫ</UnitHeading>
          <UnitContent>Россия</UnitContent>
          <UnitContent>Таиланд</UnitContent>
          <UnitContent>Черногория</UnitContent>
          <UnitContent>Кипр</UnitContent>
          <UnitContent>Болгария</UnitContent>
          <UnitContent>Грузия</UnitContent>
          <UnitExtend>Все страны →</UnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <UnitHeading>ГОРОДА</UnitHeading>
          <UnitContent>Москва</UnitContent>
          <UnitContent>Санкт-Петербург</UnitContent>
          <UnitContent>Симферополь</UnitContent>
          <UnitContent>Адлер</UnitContent>
          <UnitContent>Екатеринбург</UnitContent>
          <UnitContent>Лондон</UnitContent>
          <UnitExtend>Все города →</UnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <UnitHeading>АВИАКОМПАНИИ</UnitHeading>
          <UnitContent>Air Berlin</UnitContent>
          <UnitContent>Air France</UnitContent>
          <UnitContent>Alitalia</UnitContent>
          <UnitContent>Air Baltic</UnitContent>
          <UnitContent>Emirates</UnitContent>
          <UnitContent>KLM</UnitContent>
          <UnitExtend>Все авиакомпании →</UnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <UnitHeading>АЭРОПОРТЫ</UnitHeading>
          <UnitContent>Шереметьево</UnitContent>
          <UnitContent>Курумоч</UnitContent>
          <UnitContent>Домодедово</UnitContent>
          <UnitContent>Толмачево</UnitContent>
          <UnitContent>Владивосток</UnitContent>
          <UnitContent>Гамбург</UnitContent>
          <UnitExtend>Все аэропорты →</UnitExtend>
        </RubricatorUnit>
        <RubricatorUnit>
          <UnitHeading>НАПРАВЛЕНИЯ</UnitHeading>
          <UnitContent>MOW – SIP</UnitContent>
          <UnitContent>MOW – AER</UnitContent>
          <UnitContent>MOW – TIV</UnitContent>
          <UnitContent>MOW – MRV</UnitContent>
          <UnitContent>LED – MOW</UnitContent>
          <UnitContent>MOW – BKK</UnitContent>
        </RubricatorUnit>
        <RubricatorUnit>
          <UnitHeading>СЕРВИСЫ</UnitHeading>
          <UnitContent>Горящие авиабилеты</UnitContent>
          <UnitContent>Календарь низких цен</UnitContent>
          <UnitContent>Карта низких цен</UnitContent>
          <UnitContent>Спецпредложения</UnitContent>
          <UnitContent>Таблица цен</UnitContent>
          <UnitContent>Блог</UnitContent>
          <UnitContent>Помощь</UnitContent>
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
