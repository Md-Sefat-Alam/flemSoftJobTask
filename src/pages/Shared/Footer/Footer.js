import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-black flex justify-center">
        <div className="footerWrapper flex mt-20">
          <div className="footerContent p-1">
            <div className="text-gray-300">
              <h3 className="text-xl">Contact</h3>
              <span className="text-sm block mt-10">Ftribe Co.Ltd</span>
            </div>
            <div className="">
              <div className="flex items-center text-gray-300 mt-8">
                <div>
                  <i class="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div className="ml-4">
                  <p>
                    1658 Rosedood Lane <br /> New York city, NY
                  </p>
                </div>
              </div>
              {/* end contact/location */}
              <div className="flex items-center text-gray-300 mt-8">
                <div>
                  <i class="fas fa-phone-alt text-2xl"></i>
                </div>
                <div className="ml-4">
                  <p style={{ color: "#68D237" }}>212 929 9953</p>
                </div>
              </div>
              {/* end contact/phone */}
              <div className="flex items-center text-gray-300 mt-8">
                <div>
                  <i class="far fa-envelope text-3xl"></i>
                </div>
                <div className="ml-4">
                  <p style={{ color: "#68D237" }}>admin@ftribe.com</p>
                </div>
              </div>
              {/* end contact/location */}
            </div>
          </div>
          {/* end footer col1 row1 */}

          <div className="footerContent p-1">
            <div className="text-gray-300">
              <h3 className="text-xl">Coorperation-Association</h3>
              <span className="text-sm block mt-10">
                Operation Regulation of EC-Exchange
              </span>
            </div>
            <div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Return Policy</p>
              </div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Privacy Policy</p>
              </div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Selling With ftribe</p>
              </div>
            </div>
          </div>
          {/* end footer col2 row1 */}
          <div className="footerContent p-1">
            <div className="text-gray-300">
              <h3 className="text-xl">Customer Support</h3>
              <span className="text-sm block mt-10">
                Hotline Customer Serviece <br />
                <span style={{ color: "#68D237" }} className="">
                  212 929 9953
                </span>
              </span>
            </div>
            <div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Frequently asked Questions</p>
              </div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Ordering Guide</p>
              </div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Shipping Methods</p>
              </div>
            </div>
          </div>
          {/* end footer col3 row1 */}
          <div className="footerContent p-1">
            <div className="h-24"></div>
            <div>
              <div className="text-gray-300 cursor-pointer">
                <p>Installment Purchese Guide</p>
              </div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Customer Support:</p>
                <p style={{ color: "#68D237" }} className="">
                  customer@ftribe.com
                </p>
              </div>
              <div className="text-gray-300 mt-8 cursor-pointer">
                <p>Security Error Report:</p>
                <p style={{ color: "#68D237" }} className="">
                  admin@ftribe.com
                </p>
              </div>
            </div>
          </div>
          {/* end footer col4 row1 */}
        </div>
      </div>
      {/* end footer top black part */}
      <div>
        <div className="bg-white flex justify-center">
          <div className="footerBottom flex items-center">
            <div className="flex items-center">
              <div className="text-xl font-bold">
                Copyright 2020 &copy; ftribe
              </div>
              <div className="ml-5">
                <ul className="text-black flex text-sm">
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
      </div>
      {/* end footer end white part */}
    </div>
  );
};

export default Footer;
