import React from "react";

import vkLogo from "./vk-logo.svg";
import fbLogo from "./fb-logo.svg";
import twitterLogo from "./twitter-logo.svg";
import rssLogo from "./rss-logo.svg";

import {
  Container,
  InviteText,
  HowToSignUp,
  SocialMediaBlock,
  SocialMediaLabel,
  EmailSignupBlock,
  EmailField,
  SubmitButton,
  SocialMediaBg,
  MediaLink
} from "./styled";

export default () => (
  <Container>
    <InviteText>Хотите знать всё о скидках на авиабилеты?</InviteText>
    <HowToSignUp>
      Вы можете подписаться на нашу рассылку через соцсети или по электронной
      почте.
    </HowToSignUp>
    <SocialMediaBlock>
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
    </SocialMediaBlock>
    <EmailSignupBlock>
      <EmailField placeholder="Ваш email" />
      <SubmitButton> Подписаться</SubmitButton>
    </EmailSignupBlock>
  </Container>
);
