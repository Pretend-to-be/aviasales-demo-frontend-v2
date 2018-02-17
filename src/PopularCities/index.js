import React from "react";

import compass from "./Compass.svg";
import pencil from "./Pencil.svg";
import globe from "./globe.svg";
import tree from "./Palm_tree.svg";
import cart from "./Shopping_cart.svg";
import culture from "./Culture.svg";
import coctail from "./Coctail.svg";
import child from "./Child_car.svg";
import underline from "./Rectangle2.svg";
import pop_bg_1 from "./backgroundImage-17.png";
import pop_bg_2 from "./Group 11.png";
import pop_bg_3 from "./Group 9.png";
import pop_bg_4 from "./Group 8.png";
import pop_bg_5 from "./Group.png";
import pop_bg_6 from "./Group-3.png";

import {
  Container,
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
} from "./styled";

export default () => (
  <Container>
    <div className="container">
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
      <div className="row">
        <div className="col-xl-offset-1 col-lg-offset-1 col-md-offset-1 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
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
        </div>
      </div>
    </div>
  </Container>
);
