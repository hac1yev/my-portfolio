import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

const Nav = ({ activeNav, setActiveNav }) => {
  return (
    <nav>
      <LinkS
        to="header"
        smooth={true}
        duration={700}
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "actives" : ""}
      >
        <AiOutlineHome />
      </LinkS>
      <LinkS
        to="about"
        smooth={true}
        duration={700}
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "actives" : ""}
      >
        <AiOutlineUser />
      </LinkS>
      <LinkS
        to="experience"
        smooth={true}
        duration={700}
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "actives" : ""}
      >
        <BiBook />
      </LinkS>
      <LinkS
        to="services"
        smooth={true}
        duration={700}
        onClick={() => setActiveNav("services")}
        className={activeNav === "services" ? "actives" : ""}
      >
        <RiServiceLine />
      </LinkS>
      <LinkS
        to="portfolio"
        smooth={true}
        duration={700}
        onClick={() => setActiveNav("portfolio")}
        className={activeNav === "portfolio" ? "actives" : ""}
      >
        <MdWork />
      </LinkS>
      <LinkS
        to="contact"
        smooth={true}
        duration={700}
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "actives" : ""}
      >
        <BiMessageSquareDetail />
      </LinkS>
    </nav>
  );
};

export default Nav;
