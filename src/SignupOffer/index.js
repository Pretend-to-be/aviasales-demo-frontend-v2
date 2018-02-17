import React from "react";

import vkLogo from "./vk-logo.svg";
import fbLogo from "./fb-logo.svg";
import twitterLogo from "./twitter-logo.svg";
import rssLogo from "./rss-logo.svg";

import {
  Container,
  InviteText,
  HowToSignUp,
  SocialMedia,
  SocialMediaLabel,
  EmailSignup,
  EmailField,
  SubmitButton,
  SocialMediaBg,
  MediaLink,
  SaleOffer
} from "./styled";

export default () => (
  <div className="Container">
    <div className="row">
      <div className="col-xl-offset-1 col-xl-10">
        <Container>
          <SaleOffer>
            <InviteText>Хотите знать всё о скидках на авиабилеты?</InviteText>
            <HowToSignUp>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </HowToSignUp>
          </SaleOffer>
          <SocialMedia>
            <MediaLink>
              <SocialMediaBg>
                <SocialMediaLabel src={twitterLogo} alt="twitterLogo" />
              </SocialMediaBg>
            </MediaLink>
            <SocialMediaBg>
              <SocialMediaBg>
                <SocialMediaLabel src={fbLogo} alt="fbLogo" />
              </SocialMediaBg>
            </SocialMediaBg>
            <SocialMediaBg>
              <SocialMediaBg>
                <SocialMediaLabel src={vkLogo} alt="vkLogo" />
              </SocialMediaBg>
            </SocialMediaBg>
            <SocialMediaBg>
              <SocialMediaBg>
                <SocialMediaLabel src={rssLogo} alt="rssLogo" />
              </SocialMediaBg>
            </SocialMediaBg>
          </SocialMedia>
          <EmailSignup>
            <EmailField placeholder="Ваш email" />
            <SubmitButton> Подписаться</SubmitButton>
          </EmailSignup>
        </Container>
      </div>
    </div>
  </div>
);
