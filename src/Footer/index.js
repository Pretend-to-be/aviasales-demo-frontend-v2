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
  FooterRubricator,
  FooterRubricatorUnit,
  FooterRubricatorUnitHeading,
  FooterRubricatorUnitContent,
  FooterRubricatorUnitExtend,
  FooterUsefulLinks,
  FooterUsefulLink,
  FooterSocialMedia,
  FooterSocialMediaUnit,
  FooterSocialMediaLogo,
  FooterSocialMediaName,
  FooterHotelReserve,
  FooterHotelReserveLink,
  FooterInstallAppBlock,
  FooterInstallAppButton,
  FooterInstallAppButtonLogo,
  FooterInstallDownloadAt,
  FooterInstallPlace,
  FooterInstallAppButtonText,
  FooterCopyright
} from "./styled";

export default () => (
  <Container>
    <FooterRubricator>
      <FooterRubricatorUnit>
        <FooterRubricatorUnitHeading>СТРАНЫ</FooterRubricatorUnitHeading>
        <FooterRubricatorUnitContent>Россия</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Таиланд</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Черногория</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Кипр</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Болгария</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Грузия</FooterRubricatorUnitContent>
        <FooterRubricatorUnitExtend>Все страны →</FooterRubricatorUnitExtend>
      </FooterRubricatorUnit>
      <FooterRubricatorUnit>
        <FooterRubricatorUnitHeading>ГОРОДА</FooterRubricatorUnitHeading>
        <FooterRubricatorUnitContent>Москва</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>
          Санкт-Петербург
        </FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Симферополь</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Адлер</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Екатеринбург</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Лондон</FooterRubricatorUnitContent>
        <FooterRubricatorUnitExtend>Все города →</FooterRubricatorUnitExtend>
      </FooterRubricatorUnit>
      <FooterRubricatorUnit>
        <FooterRubricatorUnitHeading>АВИАКОМПАНИИ</FooterRubricatorUnitHeading>
        <FooterRubricatorUnitContent>Air Berlin</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Air France</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Alitalia</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Air Baltic</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Emirates</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>KLM</FooterRubricatorUnitContent>
        <FooterRubricatorUnitExtend>
          Все авиакомпании →
        </FooterRubricatorUnitExtend>
      </FooterRubricatorUnit>
      <FooterRubricatorUnit>
        <FooterRubricatorUnitHeading>АЭРОПОРТЫ</FooterRubricatorUnitHeading>
        <FooterRubricatorUnitContent>Шереметьево</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Курумоч</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Домодедово</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Толмачево</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Владивосток</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Гамбург</FooterRubricatorUnitContent>
        <FooterRubricatorUnitExtend>Все аэропорты →</FooterRubricatorUnitExtend>
      </FooterRubricatorUnit>
      <FooterRubricatorUnit>
        <FooterRubricatorUnitHeading>НАПРАВЛЕНИЯ</FooterRubricatorUnitHeading>
        <FooterRubricatorUnitContent>MOW – SIP</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>MOW – AER</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>MOW – TIV</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>MOW – MRV</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>LED – MOW</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>MOW – BKK</FooterRubricatorUnitContent>
      </FooterRubricatorUnit>
      <FooterRubricatorUnit>
        <FooterRubricatorUnitHeading>СЕРВИСЫ</FooterRubricatorUnitHeading>
        <FooterRubricatorUnitContent>
          Горящие авиабилеты
        </FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>
          Календарь низких цен
        </FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>
          Карта низких цен
        </FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>
          Спецпредложения
        </FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Таблица цен</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Блог</FooterRubricatorUnitContent>
        <FooterRubricatorUnitContent>Помощь</FooterRubricatorUnitContent>
      </FooterRubricatorUnit>
    </FooterRubricator>
    <FooterUsefulLinks>
      <FooterUsefulLink>О компании</FooterUsefulLink>
      <FooterUsefulLink>Партнёрская программа</FooterUsefulLink>
      <FooterUsefulLink>Реклама</FooterUsefulLink>
      <FooterUsefulLink>Вакансии</FooterUsefulLink>
      <FooterUsefulLink>Помощь</FooterUsefulLink>
      <FooterUsefulLink>Правила</FooterUsefulLink>
      <FooterUsefulLink>White Label авиабилеты</FooterUsefulLink>
    </FooterUsefulLinks>
    <FooterSocialMedia>
      <FooterSocialMediaUnit>
        <FooterSocialMediaLogo src={vkIcon} alt="VkIcon" />
        <FooterSocialMediaName>Вконтакте</FooterSocialMediaName>
      </FooterSocialMediaUnit>
      <FooterSocialMediaUnit>
        <FooterSocialMediaLogo src={faceIcon} alt="faceIcon" />
        <FooterSocialMediaName>Фейсбук</FooterSocialMediaName>
      </FooterSocialMediaUnit>
      <FooterSocialMediaUnit>
        <FooterSocialMediaLogo src={instIcon} alt="instIcon" />
        <FooterSocialMediaName>Инстаграм</FooterSocialMediaName>
      </FooterSocialMediaUnit>
      <FooterSocialMediaUnit>
        <FooterSocialMediaLogo src={twitterIcon} alt="twitterIcon" />
        <FooterSocialMediaName>Твиттер</FooterSocialMediaName>
      </FooterSocialMediaUnit>
      <FooterSocialMediaUnit>
        <FooterSocialMediaLogo src={viberIcon} alt="viberIcon" />
        <FooterSocialMediaName>Вайбер</FooterSocialMediaName>
      </FooterSocialMediaUnit>
    </FooterSocialMedia>
    <FooterHotelReserve>
      <FooterHotelReserveLink>
        Поиск и бронирование отелей
      </FooterHotelReserveLink>
    </FooterHotelReserve>
    <FooterInstallAppBlock>
      <FooterInstallAppButton>
        <FooterInstallAppButtonLogo src={apple_logo_icon} alt="Apple" />
        <FooterInstallAppButtonText>
          <FooterInstallDownloadAt>Скачайте в </FooterInstallDownloadAt>
          <FooterInstallPlace>App Store</FooterInstallPlace>
        </FooterInstallAppButtonText>
      </FooterInstallAppButton>
      <FooterInstallAppButton>
        <FooterInstallAppButtonLogo src={google_logo_icon} alt="Google" />
        <FooterInstallAppButtonText>
          <FooterInstallDownloadAt>Скачайте в </FooterInstallDownloadAt>
          <FooterInstallPlace>App Store</FooterInstallPlace>
        </FooterInstallAppButtonText>
      </FooterInstallAppButton>
      <FooterInstallAppButton>
        <FooterInstallAppButtonLogo src={win_logo_icon} alt="WindowsPhone" />
        <FooterInstallAppButtonText>
          <FooterInstallPlace>Windows</FooterInstallPlace>
          <FooterInstallPlace>Phone</FooterInstallPlace>
        </FooterInstallAppButtonText>
      </FooterInstallAppButton>
    </FooterInstallAppBlock>
    <FooterCopyright>
      © 2007–2018, Aviasales — дешевые авиабилеты
    </FooterCopyright>
  </Container>
);
