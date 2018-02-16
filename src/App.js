import React, { Component } from "react";
import logo from "./images/logo.svg";
import aero from "./images/aero.svg";
import calendar from "./images/date-calendar.svg";
import arrowDown from "./images/downarrow.svg";

import compass from "./images/Compass.svg";
import pencil from "./images/Pencil.svg";
import globe from "./images/globe.svg";
import tree from "./images/Palm_tree.svg";
import cart from "./images/Shopping_cart.svg";
import culture from "./images/Culture.svg";
import coctail from "./images/Coctail.svg";
import child from "./images/Child_car.svg";
import underline from "./images/Rectangle2.svg";
import pop_bg_1 from "./images/backgroundImage-17.png";
import pop_bg_2 from "./images/Group 11.png";
import pop_bg_3 from "./images/Group 9.png";
import pop_bg_4 from "./images/Group 8.png";
import pop_bg_5 from "./images/Group.png";
import pop_bg_6 from "./images/Group-3.png";

import calendar_starred from "./images/calendar-starred.svg";
import rus from "./images/rus.png";
import arm from "./images/arm.svg";
import mol from "./images/mol.svg";

import sliderLeft from "./images/slider-left.svg";
import sliderRight from "./images/slider-right.svg";
import s7Logo from "./images/agenciesAgencyLogo-1.png";
import oneTwoTrip from "./images/agenciesAgencyLogo-2.png";
import koreanAir from "./images/agenciesAgencyLogo-3.png";
import eltw from "./images/agenciesAgencyLogo-4.png";
import aeroflot from "./images/agenciesAgencyLogo.png";
import coloredOutline from "./images/Rectangle 3.png";

import vkLogo from "./images/vk-logo.svg";
import fbLogo from "./images/fb-logo.svg";
import twitterLogo from "./images/twitter-logo.svg";
import rssLogo from "./images/rss-logo.svg";

import pobeda from "./images/img-2.png";
import lufthansa from "./images/img.png";
import lufthansa_logo from "./images/img-1.png";

import help_at from "./images/HelpAt.png";
import help_plane from "./images/HelpPlane.png";
import help_list from "./images/HelpList.png";

import apple_logo from "./images/apple-logo.svg";
import android_logo from "./images/android-logo.svg";
import win_logo from "./images/windows-logo.svg";
import rating from "./images/stars-rating.svg";

import vkIcon from "./images/vkicon.svg";
import faceIcon from "./images/faceicon.svg";
import instIcon from "./images/insticon.svg";
import twitterIcon from "./images/twiicon.svg";
import viberIcon from "./images/vibicon.svg";
import apple_logo_icon from "./images/Apple_Link_Logo.svg";
import google_logo_icon from "./images/Google_Link_Logo.svg";
import win_logo_icon from "./images/Win_Link_Logo.svg";
import "./App.css";
import {
	Aviasales,
	Header,
	LogoText,
	Logo,
	InviteTextBlock,
	InviteText,
	FlightSearch,
	AirportName,
	CustomerTextCity,
	CustomerTextDate,
	CalendarLogo,
	PassengerInfo,
	PassengerInfoSeatType,
	FindFlight,
	CitySwapper,
	ChoosePassengerType
} from "./header";

import {
	PopCities,
	Compass,
	CompassBg,
	PopularCityDescription,
	PopularCityName,
	PopularCityChooser,
	DirectionTypeBlock,
	DirectionTypeElement,
	DirectionTypeChosenElement,
	DirectionTypeLogo,
	DirectionTypeLogoBg,
	DirectionTypeDesc,
	DirectionTypeDescChosen,
	DirectionTypeChosenUnderline,
	ChosenDirectionTypeProposal,
	ChosenDirectionTypeProposalCity,
	ChosenDirectionTypeProposalPicture,
	ChosenDirectionTypeProposalContent,
	ChosenDirectionTypeProposalCityInfo,
	ChosenDirectionTypeProposalOfferInfo,
	ChosenDirectionTypeProposalCityName,
	ChosenDirectionTypeProposalCountryName,
	ChosenDirectionTypeProposalOfferFlagRus,
	ChosenDirectionTypeProposalOfferFlagSpain,
	ChosenDirectionTypeProposalOfferPrice,
	ChosenDirectionTypeProposalOfferDate
} from "./PopularCities";

import {
	LastMonthOffer,
	LastMonthOfferLogo,
	LastMonthOfferLogoBg,
	LastMonthOfferText,
	LastMonthOfferDirectionList,
	LastMonthOfferDirection,
	LastMonthOfferDirectionLabel,
	LastMonthOfferDirectionLabelText,
	LastMonthOfferDirectionFlagRus,
	LastMonthOfferDirectionFlagArm,
	LastMonthOfferDirectionFlagMol,
	LastMonthOfferDirectionCity,
	LastMonthOfferDirectionCountry,
	LastMonthOfferDirectionDepartureList,
	LastMonthOfferDirectionDepartureListElement,
	LastMonthOfferDirectionDepartureCity,
	LastMonthOfferDirectionDeparturePrice,
	LastMonthOfferDirectionBorder,
	CheapTicketsInfo,
	NotAnOfferWarning
} from "./LastMonthOffer";

import {
	CheapestTickets,
	CheapestTicketsInviteText,
	CheapestTicketslider,
	CheapestTicketsSliderButtonLeft,
	CheapestTicketsSliderButtonRight,
	CheapestTicketsSliderStateDisplay,
	CheapestTicketsSliderState,
	CheapestTicketsSliderContent,
	CheapestTicketsCompanyLogo,
	CheapestTicketsOutline
} from "./CheapTicketsOffer";

import {
	SpecialOffer,
	SpecialOfferGreetingText,
	SpecialOfferBestOffers,
	SpecialOfferBlock,
	SpecialOfferBlockHeader,
	SpecialOfferPriceInfo,
	SpecialOfferCompanyLogo,
	SpecialOfferContent,
	SpecialOfferCompanyOffer,
	SpecialOfferCompanyOfferText,
	SpecialOfferCompanyOfferLogo,
	SpecialOfferPricePrefix,
	SpecialOfferPrice,
	SpecialOfferExpirationDate,
	SpecialOfferOfferInfo,
	SpecialOfferViewDetails,
	SpecialOfferAdditionalInfo,
	SpecialOfferViaeAllOffers,
	SpecialOfferDisclamer
} from "./TicketSpecialOffers";

import {
	CustomerHelp,
	CustomerHelpArticle,
	CustomerHelpLabel,
	CustomerHelpHeader,
	CustomerHelpText,
	CustomerHelpMore
} from "./CustomerHelp";

import {
	MobileApp,
	MobileAppInviteText,
	MobileAppRating,
	MobileAppRate,
	MobileAppRateAmount,
	MobileAppPhoneImage,
	MobileAppImage,
	MobileAppPlatformList,
	MobileAppPlatform,
	MobileAppPlatformLogo,
	MobileAppPlatformName
} from "./MobileApp";

import {
	SignupOffer,
	SignupOfferHeader,
	SignupOfferInfo,
	SignupOfferSocialMediaBlock,
	SignupOfferSocialMediaLabel,
	SignupOfferEmailSignupBlock,
	SignupOfferEmailField,
	SignupOfferSubmitButton,
	SignupOfferSocialMediaBg,
	SignupOfferMediaLink
} from "./SignupOffer";

import {
	Footer,
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
} from "./Footer";

class App extends Component {
	render() {
		return (
			<Aviasales>
				<Header>
					<Logo src={logo} alt="AviasalesLogo" />
					<LogoText>aviasales</LogoText>
					<InviteTextBlock>
						<InviteText>Поиск дешевых авиабилетов</InviteText>
					</InviteTextBlock>
					<FlightSearch>
						<CustomerTextCity departure defaultValue="Москва" />
						<AirportName />
						<CitySwapper />
						<CustomerTextCity arrival placeholder="Город прибытия" />

						<CustomerTextDate departure placeholder="Туда" />
						<CalendarLogo departure />

						<CustomerTextDate arrival placeholder="Обратно" />
						<CalendarLogo />
						<PassengerInfo>
							1 пассажир,
							<PassengerInfoSeatType>&nbsp;эконом</PassengerInfoSeatType>
							<ChoosePassengerType
								src={arrowDown}
								alt="Выбор количества пассажиров и типа билета"
							/>
						</PassengerInfo>
					</FlightSearch>
					<FindFlight>Найти билеты</FindFlight>
				</Header>
				<PopCities>
					<CompassBg>
						<Compass src={compass} alt="Compass" />
					</CompassBg>
					<PopularCityDescription>
						Популярные направления перелетов из&nbsp;города
					</PopularCityDescription>
					<PopularCityName>
						Москва<PopularCityChooser src={pencil} alt="pencil" />
					</PopularCityName>
					<DirectionTypeBlock>
						<DirectionTypeChosenElement>
							<DirectionTypeLogoBg>
								<DirectionTypeLogo src={globe} alt="globe" />
							</DirectionTypeLogoBg>
							<DirectionTypeDescChosen>КУДА УГОДНО</DirectionTypeDescChosen>
							<DirectionTypeChosenUnderline src={underline} />
						</DirectionTypeChosenElement>
						<DirectionTypeElement>
							<DirectionTypeLogoBg>
								<DirectionTypeLogo src={tree} alt="globe" />
							</DirectionTypeLogoBg>
							<DirectionTypeDesc>CОЛНЦЕ И МОРЕ</DirectionTypeDesc>
						</DirectionTypeElement>
						<DirectionTypeElement>
							<DirectionTypeLogoBg>
								<DirectionTypeLogo src={cart} alt="globe" />
							</DirectionTypeLogoBg>
							<DirectionTypeDesc>ШОПИНГ, ГОРОД</DirectionTypeDesc>
						</DirectionTypeElement>
						<DirectionTypeElement>
							<DirectionTypeLogoBg>
								<DirectionTypeLogo src={culture} alt="globe" />
							</DirectionTypeLogoBg>
							<DirectionTypeDesc>КУЛЬТУРА И&nbsp;ИСТОРИЯ</DirectionTypeDesc>
						</DirectionTypeElement>
						<DirectionTypeElement>
							<DirectionTypeLogoBg>
								<DirectionTypeLogo src={coctail} alt="globe" />
							</DirectionTypeLogoBg>
							<DirectionTypeDesc> НОЧНАЯ ЖИЗНЬ </DirectionTypeDesc>
						</DirectionTypeElement>
						<DirectionTypeElement>
							<DirectionTypeLogoBg>
								<DirectionTypeLogo src={child} alt="globe" />
							</DirectionTypeLogoBg>
							<DirectionTypeDesc>ОТДЫХ С ДЕТЬМИ</DirectionTypeDesc>
						</DirectionTypeElement>
					</DirectionTypeBlock>
					<ChosenDirectionTypeProposal>
						<ChosenDirectionTypeProposalCity>
							<ChosenDirectionTypeProposalPicture
								src={pop_bg_1}
								alt="Krasnodar"
							/>
							<ChosenDirectionTypeProposalContent>
								<ChosenDirectionTypeProposalOfferFlagRus />
								<ChosenDirectionTypeProposalCityInfo>
									<ChosenDirectionTypeProposalCityName>
										Краснодар
									</ChosenDirectionTypeProposalCityName>
									<ChosenDirectionTypeProposalCountryName>
										РОССИЯ
									</ChosenDirectionTypeProposalCountryName>
								</ChosenDirectionTypeProposalCityInfo>
								<ChosenDirectionTypeProposalOfferInfo>
									<ChosenDirectionTypeProposalOfferPrice>
										Найти от 1 212 ₽
									</ChosenDirectionTypeProposalOfferPrice>
									<ChosenDirectionTypeProposalOfferDate>
										18 марта
									</ChosenDirectionTypeProposalOfferDate>
								</ChosenDirectionTypeProposalOfferInfo>
							</ChosenDirectionTypeProposalContent>
						</ChosenDirectionTypeProposalCity>
						<ChosenDirectionTypeProposalCity>
							<ChosenDirectionTypeProposalPicture src={pop_bg_2} alt="Sochi" />
							<ChosenDirectionTypeProposalContent>
								<ChosenDirectionTypeProposalOfferFlagRus />
								<ChosenDirectionTypeProposalCityInfo>
									<ChosenDirectionTypeProposalCityName>
										Сочи (Адлер)
									</ChosenDirectionTypeProposalCityName>
									<ChosenDirectionTypeProposalCountryName>
										РОССИЯ
									</ChosenDirectionTypeProposalCountryName>
								</ChosenDirectionTypeProposalCityInfo>
								<ChosenDirectionTypeProposalOfferInfo>
									<ChosenDirectionTypeProposalOfferPrice>
										Найти от 1 334 ₽
									</ChosenDirectionTypeProposalOfferPrice>
									<ChosenDirectionTypeProposalOfferDate>
										27 марта
									</ChosenDirectionTypeProposalOfferDate>
								</ChosenDirectionTypeProposalOfferInfo>
							</ChosenDirectionTypeProposalContent>
						</ChosenDirectionTypeProposalCity>
						<ChosenDirectionTypeProposalCity>
							<ChosenDirectionTypeProposalPicture
								src={pop_bg_3}
								alt="Saint-Petersburg"
							/>
							<ChosenDirectionTypeProposalContent>
								<ChosenDirectionTypeProposalOfferFlagRus />
								<ChosenDirectionTypeProposalCityInfo>
									<ChosenDirectionTypeProposalCityName>
										Санкт-Петербург
									</ChosenDirectionTypeProposalCityName>
									<ChosenDirectionTypeProposalCountryName>
										РОССИЯ
									</ChosenDirectionTypeProposalCountryName>
								</ChosenDirectionTypeProposalCityInfo>
								<ChosenDirectionTypeProposalOfferInfo>
									<ChosenDirectionTypeProposalOfferPrice>
										Найти от 1 508 ₽
									</ChosenDirectionTypeProposalOfferPrice>
									<ChosenDirectionTypeProposalOfferDate>
										19 февраля
									</ChosenDirectionTypeProposalOfferDate>
								</ChosenDirectionTypeProposalOfferInfo>
							</ChosenDirectionTypeProposalContent>
						</ChosenDirectionTypeProposalCity>
						<ChosenDirectionTypeProposalCity>
							<ChosenDirectionTypeProposalPicture
								src={pop_bg_4}
								alt="Min. Vody"
							/>
							<ChosenDirectionTypeProposalContent>
								<ChosenDirectionTypeProposalOfferFlagRus />
								<ChosenDirectionTypeProposalCityInfo>
									<ChosenDirectionTypeProposalCityName>
										Минеральные Воды
									</ChosenDirectionTypeProposalCityName>
									<ChosenDirectionTypeProposalCountryName>
										РОССИЯ
									</ChosenDirectionTypeProposalCountryName>
								</ChosenDirectionTypeProposalCityInfo>
								<ChosenDirectionTypeProposalOfferInfo>
									<ChosenDirectionTypeProposalOfferPrice>
										Найти от 2 074 ₽
									</ChosenDirectionTypeProposalOfferPrice>
									<ChosenDirectionTypeProposalOfferDate>
										13 марта
									</ChosenDirectionTypeProposalOfferDate>
								</ChosenDirectionTypeProposalOfferInfo>
							</ChosenDirectionTypeProposalContent>
						</ChosenDirectionTypeProposalCity>
						<ChosenDirectionTypeProposalCity>
							<ChosenDirectionTypeProposalPicture
								src={pop_bg_5}
								alt="Simferopol"
							/>
							<ChosenDirectionTypeProposalContent>
								<ChosenDirectionTypeProposalOfferFlagRus />
								<ChosenDirectionTypeProposalCityInfo>
									<ChosenDirectionTypeProposalCityName>
										Симферополь (Кр…
									</ChosenDirectionTypeProposalCityName>
									<ChosenDirectionTypeProposalCountryName>
										КРЫМ
									</ChosenDirectionTypeProposalCountryName>
								</ChosenDirectionTypeProposalCityInfo>
								<ChosenDirectionTypeProposalOfferInfo>
									<ChosenDirectionTypeProposalOfferPrice>
										Найти от 2 407 ₽
									</ChosenDirectionTypeProposalOfferPrice>
									<ChosenDirectionTypeProposalOfferDate>
										13 марта
									</ChosenDirectionTypeProposalOfferDate>
								</ChosenDirectionTypeProposalOfferInfo>
							</ChosenDirectionTypeProposalContent>
						</ChosenDirectionTypeProposalCity>
						<ChosenDirectionTypeProposalCity>
							<ChosenDirectionTypeProposalPicture
								src={pop_bg_6}
								alt="Barcelona"
							/>
							<ChosenDirectionTypeProposalContent>
								<ChosenDirectionTypeProposalOfferFlagSpain />
								<ChosenDirectionTypeProposalCityInfo>
									<ChosenDirectionTypeProposalCityName>
										Барселона
									</ChosenDirectionTypeProposalCityName>
									<ChosenDirectionTypeProposalCountryName>
										ИСПАНИЯ
									</ChosenDirectionTypeProposalCountryName>
								</ChosenDirectionTypeProposalCityInfo>
								<ChosenDirectionTypeProposalOfferInfo>
									<ChosenDirectionTypeProposalOfferPrice>
										Найти от 4 247 ₽
									</ChosenDirectionTypeProposalOfferPrice>
									<ChosenDirectionTypeProposalOfferDate>
										24 марта
									</ChosenDirectionTypeProposalOfferDate>
								</ChosenDirectionTypeProposalOfferInfo>
							</ChosenDirectionTypeProposalContent>
						</ChosenDirectionTypeProposalCity>
					</ChosenDirectionTypeProposal>
				</PopCities>
				<LastMonthOffer>
					<LastMonthOfferLogoBg>
						<LastMonthOfferLogo src={calendar_starred} />
					</LastMonthOfferLogoBg>
					<LastMonthOfferText>
						Лучшие цены на авиабилеты за последний месяц
					</LastMonthOfferText>
					<LastMonthOfferDirectionList>
						<LastMonthOfferDirection>
							<LastMonthOfferDirectionLabel>
								<LastMonthOfferDirectionFlagRus />
								<LastMonthOfferDirectionLabelText>
									<LastMonthOfferDirectionCity>
										Симферополь (Крым)
									</LastMonthOfferDirectionCity>
									<LastMonthOfferDirectionCountry>
										КРЫМ
									</LastMonthOfferDirectionCountry>
								</LastMonthOfferDirectionLabelText>
							</LastMonthOfferDirectionLabel>
							<LastMonthOfferDirectionDepartureList>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Москвы
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 4 813 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Санкт-Петербурга
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 7 857 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Новосибирска
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 15 127 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Екатеринбурга
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 9 275 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Челябинска
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 9 148 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
							</LastMonthOfferDirectionDepartureList>
						</LastMonthOfferDirection>
						<LastMonthOfferDirection>
							<LastMonthOfferDirectionLabel>
								<LastMonthOfferDirectionFlagArm />
								<LastMonthOfferDirectionLabelText>
									<LastMonthOfferDirectionCity>
										Ереван
									</LastMonthOfferDirectionCity>
									<LastMonthOfferDirectionCountry>
										АРМЕНИЯ
									</LastMonthOfferDirectionCountry>
								</LastMonthOfferDirectionLabelText>
							</LastMonthOfferDirectionLabel>
							<LastMonthOfferDirectionDepartureList>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Москвы
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 6 758 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Санкт-Петербурга
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 9 932 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Сочи
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 11 951 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Краснодара
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 11 741 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Ростова-на-Дону
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 11 956 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
							</LastMonthOfferDirectionDepartureList>
						</LastMonthOfferDirection>
						<LastMonthOfferDirection>
							<LastMonthOfferDirectionLabel>
								<LastMonthOfferDirectionFlagMol />
								<LastMonthOfferDirectionLabelText>
									<LastMonthOfferDirectionCity>
										Кишинёв
									</LastMonthOfferDirectionCity>
									<LastMonthOfferDirectionCountry>
										МОЛДАВИЯ
									</LastMonthOfferDirectionCountry>
								</LastMonthOfferDirectionLabelText>
							</LastMonthOfferDirectionLabel>
							<LastMonthOfferDirectionDepartureList>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Москвы
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 8 319 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Санкт-Петербурга
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 10 800 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Краснодара
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 12 098 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Сургута
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 16 277 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
								<LastMonthOfferDirectionDepartureListElement>
									<LastMonthOfferDirectionDepartureCity>
										Из Нового Уренгоя
									</LastMonthOfferDirectionDepartureCity>
									<LastMonthOfferDirectionDeparturePrice>
										от 15 987 ₽
									</LastMonthOfferDirectionDeparturePrice>
								</LastMonthOfferDirectionDepartureListElement>
							</LastMonthOfferDirectionDepartureList>
						</LastMonthOfferDirection>
					</LastMonthOfferDirectionList>
					<CheapTicketsInfo>
						Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
						стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
						728 авиакомпаний.
					</CheapTicketsInfo>
					<NotAnOfferWarning>
						Цены, найденные пользователями за последние 48 часов, не являются
						офертой.
					</NotAnOfferWarning>
				</LastMonthOffer>
				<CheapestTickets>
					<CheapestTicketsInviteText>
						Дешевые авиабилеты от крупнейших авиакомпаний и агентств
					</CheapestTicketsInviteText>
					<CheapestTicketslider>
						<CheapestTicketsSliderContent>
							<CheapestTicketsCompanyLogo src={aeroflot} alt="Aeroflot" />
							<CheapestTicketsCompanyLogo src={s7Logo} alt="s7Logo" />
							<CheapestTicketsCompanyLogo src={oneTwoTrip} alt="oneTwoTrip" />
							<CheapestTicketsCompanyLogo src={koreanAir} alt="koreanAir" />
							<CheapestTicketsCompanyLogo src={eltw} alt="eltw" />
						</CheapestTicketsSliderContent>
						<CheapestTicketsSliderButtonLeft src={sliderLeft} />
						<CheapestTicketsSliderButtonRight src={sliderRight} />
						<CheapestTicketsSliderStateDisplay>
							<CheapestTicketsSliderState active />
							<CheapestTicketsSliderState />
							<CheapestTicketsSliderState />
						</CheapestTicketsSliderStateDisplay>
					</CheapestTicketslider>
				</CheapestTickets>
				<CheapestTicketsOutline src={coloredOutline} />
				<SignupOffer>
					<SignupOfferHeader>
						Хотите знать всё о скидках на авиабилеты?
					</SignupOfferHeader>
					<SignupOfferInfo>
						Вы можете подписаться на нашу рассылку через соцсети или по
						электронной почте.
					</SignupOfferInfo>
					<SignupOfferSocialMediaBlock>
						<SignupOfferMediaLink>
							{" "}
							<SignupOfferSocialMediaBg>
								<SignupOfferSocialMediaLabel
									src={twitterLogo}
									alt="twitterLogo"
								/>
							</SignupOfferSocialMediaBg>
						</SignupOfferMediaLink>
						<SignupOfferSocialMediaBg>
							<SignupOfferSocialMediaBg>
								<SignupOfferSocialMediaLabel src={fbLogo} alt="fbLogo" />
							</SignupOfferSocialMediaBg>
						</SignupOfferSocialMediaBg>
						<SignupOfferSocialMediaBg>
							<SignupOfferSocialMediaBg>
								<SignupOfferSocialMediaLabel src={vkLogo} alt="vkLogo" />
							</SignupOfferSocialMediaBg>
						</SignupOfferSocialMediaBg>
						<SignupOfferSocialMediaBg>
							{" "}
							<SignupOfferSocialMediaBg>
								<SignupOfferSocialMediaLabel src={rssLogo} alt="rssLogo" />
							</SignupOfferSocialMediaBg>
						</SignupOfferSocialMediaBg>
					</SignupOfferSocialMediaBlock>
					<SignupOfferEmailSignupBlock>
						<SignupOfferEmailField placeholder="Ваш email" />
						<SignupOfferSubmitButton> Подписаться</SignupOfferSubmitButton>
					</SignupOfferEmailSignupBlock>
				</SignupOffer>
				<SpecialOffer>
					<SpecialOfferGreetingText>
						Спецпредложения на авиабилеты
					</SpecialOfferGreetingText>
					<SpecialOfferBestOffers>
						<SpecialOfferBlock>
							<SpecialOfferBlockHeader>
								<SpecialOfferPriceInfo>
									Билеты от 499 рублей!
								</SpecialOfferPriceInfo>
							</SpecialOfferBlockHeader>
							<SpecialOfferContent>
								<SpecialOfferCompanyOffer>
									<SpecialOfferCompanyOfferLogo src={pobeda} alt="PobedaLogo" />
									<SpecialOfferCompanyOfferText>
										<SpecialOfferPricePrefix>
											от
											<SpecialOfferPrice>499 ₽</SpecialOfferPrice>
										</SpecialOfferPricePrefix>
										<SpecialOfferExpirationDate>
											Осталось 45 дней
										</SpecialOfferExpirationDate>
									</SpecialOfferCompanyOfferText>
								</SpecialOfferCompanyOffer>
								<SpecialOfferOfferInfo>
									Билеты от 499 рублей!<br /> Специальное предложение от
									авиакомпании Победа
								</SpecialOfferOfferInfo>
								<SpecialOfferViewDetails>
									Узнать подробности
								</SpecialOfferViewDetails>
							</SpecialOfferContent>
						</SpecialOfferBlock>
						<SpecialOfferBlock>
							<SpecialOfferBlockHeader>
								<SpecialOfferPriceInfo>
									В Нью-Йорк от 20 680 ₽
								</SpecialOfferPriceInfo>
								<SpecialOfferCompanyLogo
									src={lufthansa_logo}
									alt="LufthansaLabel"
								/>
							</SpecialOfferBlockHeader>
							<SpecialOfferContent>
								<SpecialOfferCompanyOffer>
									<SpecialOfferCompanyOfferLogo
										src={lufthansa}
										alt="LufthansaLogo"
									/>
									<SpecialOfferCompanyOfferText>
										<SpecialOfferPricePrefix>
											от
											<SpecialOfferPrice>20 680 ₽</SpecialOfferPrice>
										</SpecialOfferPricePrefix>
										<SpecialOfferExpirationDate>
											Осталось 19 дней
										</SpecialOfferExpirationDate>
									</SpecialOfferCompanyOfferText>
								</SpecialOfferCompanyOffer>
								<SpecialOfferOfferInfo>
									Из Москвы в США от 20680 рублей! Специальное предложение от
									авиакомпании Lufthansa
								</SpecialOfferOfferInfo>
								<SpecialOfferViewDetails>
									Узнать подробности
								</SpecialOfferViewDetails>
							</SpecialOfferContent>
						</SpecialOfferBlock>
						<SpecialOfferBlock>
							<SpecialOfferBlockHeader>
								<SpecialOfferPriceInfo>
									В Лос-Анджелес от…
								</SpecialOfferPriceInfo>
								<SpecialOfferCompanyLogo
									src={lufthansa_logo}
									alt="LufthansaLabel"
								/>
							</SpecialOfferBlockHeader>
							<SpecialOfferContent>
								<SpecialOfferCompanyOffer>
									<SpecialOfferCompanyOfferLogo
										src={lufthansa}
										alt="LufthansaLogo"
									/>
									<SpecialOfferCompanyOfferText>
										<SpecialOfferPricePrefix>
											от
											<SpecialOfferPrice>20 360 ₽</SpecialOfferPrice>
										</SpecialOfferPricePrefix>
										<SpecialOfferExpirationDate>
											Осталось 19 дней
										</SpecialOfferExpirationDate>
									</SpecialOfferCompanyOfferText>
								</SpecialOfferCompanyOffer>
								<SpecialOfferOfferInfo>
									Из Москвы в США от 22360 рублей! Специальное предложение от
									авиакомпании Lufthansa
								</SpecialOfferOfferInfo>
								<SpecialOfferViewDetails>
									Узнать подробности
								</SpecialOfferViewDetails>
							</SpecialOfferContent>
						</SpecialOfferBlock>
					</SpecialOfferBestOffers>
					<SpecialOfferAdditionalInfo>
						<SpecialOfferViaeAllOffers>
							Смотреть все спецпредложения
						</SpecialOfferViaeAllOffers>
						<SpecialOfferDisclamer>
							* средняя цена по направлению
						</SpecialOfferDisclamer>
					</SpecialOfferAdditionalInfo>
				</SpecialOffer>
				<CustomerHelp>
					<CustomerHelpArticle>
						<CustomerHelpLabel src={help_plane} />
						<CustomerHelpHeader>
							КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?
						</CustomerHelpHeader>
						<CustomerHelpText>
							Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
							самолет по сотням авиакомпаний и находим за считанные минуты самые
							дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
							нашим поиском, который совершенно бесплатно сравнивает цены на
							авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
							смысла ходить в авиакассы, обзванивать агентства — дешевый билет
							находится на расстоянии клика. На нашем сайте вы можете подобрать
							дешевые билеты на самолет в Европу, Азию и на другие континенты.
							Мы написали для вас простую инструкцию о том, как пользоваться
							поиском и экономить на перелетах от 1000 до 20 000 руб в год.
							<CustomerHelpMore>Подробнее</CustomerHelpMore>
						</CustomerHelpText>
					</CustomerHelpArticle>
					<CustomerHelpArticle>
						<CustomerHelpLabel src={help_at} />
						<CustomerHelpHeader>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</CustomerHelpHeader>
						<CustomerHelpText>
							Электронный авиабилет — это, по сути, обычный билет на самолет, но
							только в менее привычном для путешественника виде. Вся информация
							об авиаперелете (данные пассажира, маршрут следования) хранится в
							электронной базе, а пассажир получает на руки маршрут-квитанцию.
							Некоторые пассажиры, купив авиабилет онлайн и получив
							маршрут-квитанцию, удивлены ее видом — это обыкновенный лист
							формата А4, на котором распечатана вся информация о предстоящем
							перелете. Однако это действительно официальный документ,
							подтверждающий договор между авиаперевозчиком и пассажиром. При
							регистрации на рейс пассажир должен предъявить маршрут-квитанцию
							вместе с удостоверением личности точно так же, как предъявляют
							обыкновенный бумажный билет. Следует отметить, что электронный
							билет, приобретенный онлайн, стоит дешевле своего бумажного
							аналога.
							<CustomerHelpMore>Подробнее</CustomerHelpMore>
						</CustomerHelpText>
					</CustomerHelpArticle>
					<CustomerHelpArticle>
						<CustomerHelpLabel src={help_list} />
						<CustomerHelpHeader>
							20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ
						</CustomerHelpHeader>
						<CustomerHelpText>
							Есть масса путеводителей по странам, но ни одного о том, как
							провести время в самолете. Для того, чтобы сделать ваш перелет
							максимально комфортным, мы написали 20 советов о подготовке к
							путешествию. Ведь настоящее путешествие начинается со слов «Добро
							пожаловать на борт нашего самолета»!
							<CustomerHelpMore>Подробнее</CustomerHelpMore>
						</CustomerHelpText>
					</CustomerHelpArticle>
				</CustomerHelp>
				<MobileApp>
					<MobileAppInviteText>
						Скачай мобильное приложение Aviasales.ru
					</MobileAppInviteText>
					<MobileAppRating>
						<MobileAppRate src={rating} alt="AppRating" />
						<MobileAppRateAmount>Более 103 000 оценок</MobileAppRateAmount>
					</MobileAppRating>
					<MobileAppPlatformList>
						<MobileAppPlatform>
							<MobileAppPlatformLogo src={apple_logo} alt="Apple Logo" />
							<MobileAppPlatformName>iPhone или iPad</MobileAppPlatformName>
						</MobileAppPlatform>
						<MobileAppPlatform>
							<MobileAppPlatformLogo src={android_logo} alt="Apple Logo" />
							<MobileAppPlatformName>Android</MobileAppPlatformName>
						</MobileAppPlatform>
						<MobileAppPlatform>
							<MobileAppPlatformLogo src={win_logo} alt="Apple Logo" />
							<MobileAppPlatformName>Windows Phone</MobileAppPlatformName>
						</MobileAppPlatform>
					</MobileAppPlatformList>
				</MobileApp>
				<Footer>
					<FooterRubricator>
						<FooterRubricatorUnit>
							<FooterRubricatorUnitHeading>СТРАНЫ</FooterRubricatorUnitHeading>
							<FooterRubricatorUnitContent>Россия</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Таиланд</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Черногория
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Кипр</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Болгария
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Грузия</FooterRubricatorUnitContent>
							<FooterRubricatorUnitExtend>
								Все страны →
							</FooterRubricatorUnitExtend>
						</FooterRubricatorUnit>
						<FooterRubricatorUnit>
							<FooterRubricatorUnitHeading>ГОРОДА</FooterRubricatorUnitHeading>
							<FooterRubricatorUnitContent>Москва</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Санкт-Петербург
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Симферополь
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Адлер</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Екатеринбург
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Лондон</FooterRubricatorUnitContent>
							<FooterRubricatorUnitExtend>
								Все города →
							</FooterRubricatorUnitExtend>
						</FooterRubricatorUnit>
						<FooterRubricatorUnit>
							<FooterRubricatorUnitHeading>
								АВИАКОМПАНИИ
							</FooterRubricatorUnitHeading>
							<FooterRubricatorUnitContent>
								Air Berlin
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Air France
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Alitalia
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Air Baltic
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Emirates
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>KLM</FooterRubricatorUnitContent>
							<FooterRubricatorUnitExtend>
								Все авиакомпании →
							</FooterRubricatorUnitExtend>
						</FooterRubricatorUnit>
						<FooterRubricatorUnit>
							<FooterRubricatorUnitHeading>
								АЭРОПОРТЫ
							</FooterRubricatorUnitHeading>
							<FooterRubricatorUnitContent>
								Шереметьево
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Курумоч</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Домодедово
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Толмачево
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								Владивосток
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>Гамбург</FooterRubricatorUnitContent>
							<FooterRubricatorUnitExtend>
								Все аэропорты →
							</FooterRubricatorUnitExtend>
						</FooterRubricatorUnit>
						<FooterRubricatorUnit>
							<FooterRubricatorUnitHeading>
								НАПРАВЛЕНИЯ
							</FooterRubricatorUnitHeading>
							<FooterRubricatorUnitContent>
								MOW – SIP
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								MOW – AER
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								MOW – TIV
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								MOW – MRV
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								LED – MOW
							</FooterRubricatorUnitContent>
							<FooterRubricatorUnitContent>
								MOW – BKK
							</FooterRubricatorUnitContent>
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
							<FooterRubricatorUnitContent>
								Таблица цен
							</FooterRubricatorUnitContent>
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
							<FooterInstallAppButtonLogo
								src={win_logo_icon}
								alt="WindowsPhone"
							/>
							<FooterInstallAppButtonText>
								<FooterInstallPlace>Windows</FooterInstallPlace>
								<FooterInstallPlace>Phone</FooterInstallPlace>
							</FooterInstallAppButtonText>
						</FooterInstallAppButton>
					</FooterInstallAppBlock>
					<FooterCopyright>
						© 2007–2018, Aviasales — дешевые авиабилеты
					</FooterCopyright>
				</Footer>
			</Aviasales>
		);
	}
}

export default App;
