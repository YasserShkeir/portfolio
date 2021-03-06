import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import SocialDetails from "./SocialDetails";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <DiCssdeck size="3rem"></DiCssdeck>
          <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects &nbsp;</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies &nbsp;</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About &nbsp;</NavLink>
        </Link>
      </li>
      <li>
        <Link
          href="https://drive.google.com/drive/folders/1owjuPV0Ati-zIiJDT1wGnj9VKSViBvhC?usp=sharing"
          passHref
          download
        >
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <SocialDetails></SocialDetails>
  </Container>
);

export default Header;
