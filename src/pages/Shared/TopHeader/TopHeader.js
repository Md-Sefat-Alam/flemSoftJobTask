import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="fullWrapper  bg-black flex justify-center">
      <div className="wrapper topHeader flex items-center">
        <div className="w-full flex justify-between">
          <div>
            <ul className="text-white flex">
              <a
                href="https://www.facebook.com/"
                target={"_blank"}
                rel="noreferrer"
                className="px-2 hover:text-orange-400"
              >
                <li>
                  <i class="fa fa-facebook-square"></i>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/"
                target={"_blank"}
                rel="noreferrer"
                className="px-2 hover:text-orange-400"
              >
                <li>
                  <i class="fab fa-linkedin"></i>
                </li>
              </a>
              <a
                href="https://twitter.com/"
                target={"_blank"}
                rel="noreferrer"
                className="px-2 hover:text-orange-400"
              >
                <li>
                  <i class="fa fa-twitter-square"></i>
                </li>
              </a>
              <a
                href="https://mail.google.com/"
                target={"_blank"}
                rel="noreferrer"
                className="px-2 hover:text-orange-400"
              >
                <li>
                  <i class="fa fa-envelope"></i>
                </li>
              </a>
            </ul>
          </div>
          <div>
            <ul className="text-white flex text-sm">
              <li className="px-2 hover:text-orange-400 cursor-pointer">
                Introduce
              </li>
              .
              <li className="px-2 hover:text-orange-400 cursor-pointer">
                Partner Incentives
              </li>
              .
              <li className="px-2 hover:text-orange-400 cursor-pointer">
                Promotion
              </li>
              .
              <li className="px-2 hover:text-orange-400 cursor-pointer">
                Contact
              </li>
              .
              <li className="px-2 hover:text-orange-400 cursor-pointer">
                Frequently asked questions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
