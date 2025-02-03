import React from "react";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiCrunchyroll } from "react-icons/si";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-radius: 8px;
  position: relative;
  bottom: 0;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #ff5733;
      transform: scale(1.2);
    }
  }
`;

const CrunchyrollLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ff640a;
  font-weight: bold;

  span {
    font-size: 1.2rem;
  }

  &:hover {
    color: #ff4500;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com.br/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SocialMediaLinks>
      <CrunchyrollLink href="https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba">
        <SiCrunchyroll size={30} />
        <span>Assista no Crunchyroll</span>
      </CrunchyrollLink>
    </FooterContainer>
  );
};

export default Footer;
