import React from "react";
import "./header.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="header_logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <span className="absolute-center location-icon">
                <HiOutlineLocationMarker color="#ff7e8b" size={20} />
              </span>

              <div>bangladesh</div>
            </div>
            <span className="absolute-center">
              <AiOutlineCaretDown />
            </span>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBer">
            <span className="absolute-center search-icon">
              <BiSearchAlt2 size={20} color="gray" />
            </span>
            <input
              type="text"
              placeholder="Search for restaurant,cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            className="header-profile-image"
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="Profile"
          />
          <span className="header-user-name">ebrahim</span>
          <span className="profile-options-icon absolute-center">
            <RiArrowDropDownLine size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
