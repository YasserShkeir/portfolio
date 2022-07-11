import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import SocialDetails from "../Header/SocialDetails";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shkeiryasser@gmail.com">
            click to email me
          </LinkItem>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+961 81 758 391">
            click to call me
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with ❤️ by Y.S.</Slogan>
        </CompanyContainer>
        <SocialDetails></SocialDetails>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
