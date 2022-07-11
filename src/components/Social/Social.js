import React from "react";
import { SocialItems } from "./SocialItems";
import "./Social.css";

function Social() {
  return (
    <>
      <ul className="socials">
        {SocialItems.map((item, index) => (
          <li className="social" key={index}>
            <a className="social-link" href={item.path}>
              <i class={item.cName}></i>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Social;
