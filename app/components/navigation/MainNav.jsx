import React from "react";

import WhoWeAre from "../../../public/images/svg/qmark.svg";
import Pricing from "../../../public/images/svg/pricing.svg";
import Gear from "../../../public/images/svg/gear.svg";
import BookIt from "../../../public/images/svg/schedule.svg";
import QuadArrow from "../../../public/images/svg/quadarrow.svg";
import ContactUs from "../../../public/images/svg/contact.svg";

import Image from "next/image";
import "./nav.css";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link href="/" className="nav-link">
            <span className="link-text-logo">imperial studios</span>
            <Image
              src={QuadArrow}
              alt="arrow"
              width={40}
              height={40}
              className="logo-img"
            />
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#about" className="nav-link">
            <Image
              src={WhoWeAre}
              alt="question-mark"
              width={40}
              height={40}
              className="w-6 ml-[1.5rem]"
            />
            <span className="link-text">about</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#pricing" className="nav-link">
            <Image
              src={Pricing}
              alt="dollar-symbol"
              width={40}
              height={40}
              className="w-6 ml-[1.5rem]"
            />
            <span className="link-text">pricing</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="#services" className="nav-link">
            <Image
              src={Gear}
              alt="microphone"
              width={40}
              height={40}
              className="w-[2rem] ml-[1.3rem]"
            />
            <span className="link-text">services</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="#contact" className="nav-link">
            <Image
              src={BookIt}
              alt="calendar"
              width={40}
              height={40}
              className="w-[2rem] ml-[1.5rem]"
            />
            <span className="link-text">book it</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#contact" className="nav-link">
            <Image
              src={ContactUs}
              alt="contact-link"
              width={40}
              height={40}
              className="w-[2rem] ml-[1.5rem]"
            />
            <span className="link-text">contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
