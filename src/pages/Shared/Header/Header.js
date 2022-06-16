import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Badge, Button, FormControl, MenuItem, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import CartView from "../CartView/CartView";
import SearchResult from "../SearchResult/SearchResult";

const Header = ({ products, getDataFromLocalStorage, cartData }) => {
  const searchField = useRef();
  const [searchFocusOrNot, setSearchFocusOrNot] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="fullWrapper  bg-black flex justify-center">
        <div className="wrapper headerContent flex items-center justify-between">
          <div>
            <svg
              width="84"
              height="67"
              viewBox="0 0 84 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M47.4781 36.482L77.4148 36.4757C77.4148 36.4757 77.4148 36.4757 77.4148 36.482C77.4148 52.9077 63.8975 66.4187 47.4781 66.4187V36.482Z"
                fill="#68D237"
              />
              <path
                d="M7.43895 27.719C8.74579 27.719 9.91022 28.0038 10.9322 28.5735C11.971 29.1431 12.7836 29.9473 13.37 30.9861C13.9564 32.0249 14.2496 33.2228 14.2496 34.5799C14.2496 35.937 13.9564 37.1434 13.37 38.1989C12.7836 39.2376 11.971 40.0419 10.9322 40.6115C9.91022 41.1812 8.74579 41.466 7.43895 41.466C5.62947 41.466 4.19697 40.8628 3.14145 39.6565V46.1656H0V27.8698H2.99066V29.629C3.51004 28.9923 4.14671 28.5148 4.90066 28.1965C5.67136 27.8782 6.51745 27.719 7.43895 27.719ZM7.0871 38.7769C8.24316 38.7769 9.18978 38.3916 9.92697 37.6209C10.6809 36.8502 11.0579 35.8365 11.0579 34.5799C11.0579 33.3234 10.6809 32.3097 9.92697 31.539C9.18978 30.7683 8.24316 30.383 7.0871 30.383C6.33316 30.383 5.6546 30.5589 5.05145 30.9107C4.44829 31.2458 3.97079 31.7317 3.61895 32.3684C3.2671 33.005 3.09118 33.7422 3.09118 34.5799C3.09118 35.4177 3.2671 36.1548 3.61895 36.7915C3.97079 37.4282 4.44829 37.9224 5.05145 38.2743C5.6546 38.6094 6.33316 38.7769 7.0871 38.7769Z"
                fill="white"
              />
              <path
                d="M23.2604 41.466C21.9033 41.466 20.6803 41.1728 19.5912 40.5864C18.5022 40 17.6477 39.1874 17.0278 38.1486C16.4247 37.0931 16.1231 35.9035 16.1231 34.5799C16.1231 33.2563 16.4247 32.0752 17.0278 31.0364C17.6477 29.9976 18.5022 29.185 19.5912 28.5986C20.6803 28.0122 21.9033 27.719 23.2604 27.719C24.6343 27.719 25.8658 28.0122 26.9548 28.5986C28.0438 29.185 28.8899 29.9976 29.4931 31.0364C30.113 32.0752 30.4229 33.2563 30.4229 34.5799C30.4229 35.9035 30.113 37.0931 29.4931 38.1486C28.8899 39.1874 28.0438 40 26.9548 40.5864C25.8658 41.1728 24.6343 41.466 23.2604 41.466ZM23.2604 38.7769C24.4165 38.7769 25.3715 38.3916 26.1254 37.6209C26.8794 36.8502 27.2564 35.8365 27.2564 34.5799C27.2564 33.3234 26.8794 32.3097 26.1254 31.539C25.3715 30.7683 24.4165 30.383 23.2604 30.383C22.1044 30.383 21.1494 30.7683 20.3954 31.539C19.6583 32.3097 19.2897 33.3234 19.2897 34.5799C19.2897 35.8365 19.6583 36.8502 20.3954 37.6209C21.1494 38.3916 22.1044 38.7769 23.2604 38.7769Z"
                fill="white"
              />
              <path
                d="M39.5842 41.466C38.1936 41.466 36.9454 41.1728 35.8396 40.5864C34.7338 40 33.8709 39.1874 33.251 38.1486C32.6311 37.0931 32.3212 35.9035 32.3212 34.5799C32.3212 33.2563 32.6311 32.0752 33.251 31.0364C33.8709 29.9976 34.7254 29.185 35.8145 28.5986C36.9202 28.0122 38.1768 27.719 39.5842 27.719C40.9078 27.719 42.0638 27.9871 43.0523 28.5232C44.0576 29.0594 44.8116 29.8301 45.3142 30.8353L42.9016 32.2427C42.5162 31.6228 42.0303 31.162 41.4439 30.8605C40.8743 30.5421 40.246 30.383 39.5591 30.383C38.3863 30.383 37.4145 30.7683 36.6438 31.539C35.8731 32.293 35.4877 33.3066 35.4877 34.5799C35.4877 35.8533 35.8647 36.8753 36.6187 37.646C37.3894 38.3999 38.3695 38.7769 39.5591 38.7769C40.246 38.7769 40.8743 38.6261 41.4439 38.3245C42.0303 38.0062 42.5162 37.5371 42.9016 36.9172L45.3142 38.3245C44.7948 39.3298 44.0325 40.1089 43.0272 40.6618C42.0387 41.1979 40.891 41.466 39.5842 41.466Z"
                fill="white"
              />
              <path
                d="M53.3857 35.5349L51.0485 37.7465V41.2901H47.9071V22.6424H51.0485V33.9014L57.5576 27.8698H61.3273L55.723 33.4993L61.8551 41.2901H58.0351L53.3857 35.5349Z"
                fill="white"
              />
              <path
                d="M63.7615 27.8698H66.903V41.2901H63.7615V27.8698ZM65.3448 25.6582C64.7752 25.6582 64.2977 25.4823 63.9123 25.1305C63.527 24.7619 63.3343 24.3095 63.3343 23.7734C63.3343 23.2372 63.527 22.7932 63.9123 22.4414C64.2977 22.0728 64.7752 21.8885 65.3448 21.8885C65.9145 21.8885 66.392 22.0644 66.7773 22.4163C67.1627 22.7513 67.3554 23.1786 67.3554 23.698C67.3554 24.2509 67.1627 24.72 66.7773 25.1053C66.4087 25.4739 65.9312 25.6582 65.3448 25.6582Z"
                fill="white"
              />
              <path
                d="M83.6422 34.6553C83.6422 34.8731 83.6254 35.1831 83.5919 35.5852H73.0618C73.2461 36.5737 73.7236 37.3612 74.4943 37.9476C75.2818 38.5172 76.2535 38.802 77.4096 38.802C78.8839 38.802 80.0986 38.3162 81.0536 37.3444L82.7375 39.2795C82.1343 40 81.372 40.5445 80.4505 40.9131C79.529 41.2817 78.4902 41.466 77.3342 41.466C75.8598 41.466 74.5613 41.1728 73.4388 40.5864C72.3162 40 71.445 39.1874 70.8251 38.1486C70.2219 37.0931 69.9204 35.9035 69.9204 34.5799C69.9204 33.2731 70.2136 32.1003 70.8 31.0615C71.4031 30.006 72.2325 29.185 73.288 28.5986C74.3435 28.0122 75.5331 27.719 76.8567 27.719C78.1635 27.719 79.3279 28.0122 80.35 28.5986C81.3887 29.1683 82.1929 29.9809 82.7626 31.0364C83.349 32.0752 83.6422 33.2815 83.6422 34.6553ZM76.8567 30.2322C75.8514 30.2322 74.9969 30.5337 74.2932 31.1369C73.6063 31.7233 73.1875 32.5108 73.0367 33.4993H80.6515C80.5175 32.5275 80.107 31.7401 79.4201 31.1369C78.7332 30.5337 77.8787 30.2322 76.8567 30.2322Z"
                fill="white"
              />
              <path
                d="M44.5634 25.1284C44.5634 25.1284 24.2429 20.7181 27.8195 0.97673C27.8195 0.97673 47.179 10.6756 44.5634 25.1284Z"
                fill="#FFF7AD"
              />
            </svg>
          </div>
          {/* end icon */}
          <div className="flex">
            <div className="flex items-center relative">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 580,
                  height: 48,
                  zIndex: 5,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="What are you looking for?"
                  // inputProps={{ "aria-label": "search google" }}
                  onFocus={() => setSearchFocusOrNot(true)}
                  onChange={(e) => handleSearchText(e)}
                  ref={searchField}
                />
                <SearchResult
                  searchText={searchText}
                  searchFocusOrNot={searchFocusOrNot}
                />
                {searchText.length > 0 && (
                  <div
                    style={{ left: "380px" }}
                    className="absolute left- top-3 font-bold cursor-pointer select-none text-red-500"
                    onClick={() => {
                      setSearchFocusOrNot(false);
                      searchField.current.childNodes[0].value = "";
                      setSearchText("");
                    }}
                  >
                    X
                  </div>
                )}
                <FormControl sx={{ m: 0, p: 0, minWidth: 180, border: "none" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={0}
                    label="Age"
                    defaultValue={"allproducts"}
                    // onChange={handleChange}
                  >
                    <MenuItem value={"allproducts"}>All Products</MenuItem>
                    <MenuItem value={"technology"}>Technology</MenuItem>
                    <MenuItem
                      style={{ paddingLeft: "30px" }}
                      value={"technology/smartWatch"}
                    >
                      Smart Watch
                    </MenuItem>
                    <MenuItem
                      style={{ paddingLeft: "30px" }}
                      value={"technology/laptop"}
                    >
                      Laptop
                    </MenuItem>
                    <p
                      style={{
                        paddingLeft: "50px",
                        marginBottom: "8px",
                        userSelect: "none",
                        cursor: "not-allowed",
                        color: "gray",
                      }}
                    >
                      Apple
                    </p>
                    <p
                      style={{
                        paddingLeft: "50px",
                        userSelect: "none",
                        cursor: "not-allowed",
                        color: "gray",
                      }}
                    >
                      Dell
                    </p>
                    <MenuItem
                      style={{ paddingLeft: "30px" }}
                      value={"technology/desktop"}
                    >
                      Desktop
                    </MenuItem>
                    <p
                      style={{
                        paddingLeft: "50px",
                        marginBottom: "8px",
                        userSelect: "none",
                        cursor: "not-allowed",
                        color: "gray",
                      }}
                    >
                      Mac
                    </p>
                    <p
                      style={{
                        paddingLeft: "50px",
                        userSelect: "none",
                        cursor: "not-allowed",
                        color: "gray",
                      }}
                    >
                      Mac Mini
                    </p>
                  </Select>
                </FormControl>
              </Paper>
              <Button
                sx={{
                  m: "0px 20px",
                  width: 110,
                  height: 48,
                  backgroundColor: "#68D237",
                }}
                variant="contained"
              >
                Search
              </Button>
            </div>
            <div className="flex items-center">
              <div className="px-5">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.304 1.75C3.65217 1.75 1.75 4.27613 1.75 6.755C1.75 9.34506 3.37381 11.7196 5.33666 13.4969C6.30654 14.3752 7.32777 15.0778 8.20366 15.557C8.64168 15.7967 9.03413 15.9754 9.35768 16.0924C9.69628 16.2147 9.90705 16.25 10 16.25C10.0929 16.25 10.3037 16.2147 10.6423 16.0924C10.9659 15.9754 11.3583 15.7967 11.7963 15.557C12.6722 15.0778 13.6935 14.3752 14.6633 13.4969C16.6262 11.7196 18.25 9.34506 18.25 6.755C18.25 4.27613 16.3478 1.75 13.696 1.75C12.1617 1.75 11.162 2.5059 10.5701 3.19834C10.4276 3.36502 10.2193 3.461 10 3.461C9.78071 3.461 9.5724 3.36502 9.42991 3.19834C8.83799 2.5059 7.83832 1.75 6.304 1.75ZM0.25 6.755C0.25 3.68387 2.60583 0.25 6.304 0.25C7.96317 0.25 9.17646 0.910711 10 1.64228C10.8235 0.910711 12.0368 0.25 13.696 0.25C17.3942 0.25 19.75 3.68387 19.75 6.755C19.75 9.96594 17.7628 12.7139 15.6702 14.6088C14.6123 15.5667 13.4946 16.3377 12.5163 16.8729C12.0273 17.1405 11.5638 17.3543 11.1521 17.5031C10.7554 17.6464 10.3516 17.75 10 17.75C9.64844 17.75 9.24459 17.6464 8.84792 17.5031C8.4362 17.3543 7.97273 17.1405 7.48365 16.8729C6.50535 16.3377 5.38771 15.5667 4.32984 14.6088C2.23719 12.7139 0.25 9.96594 0.25 6.755Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="px-4">
                <div
                  onMouseEnter={() => {
                    getDataFromLocalStorage();
                  }}
                  className="text-white pl-5 relative cartContainer"
                >
                  <Badge
                    className="cursor-pointer"
                    badgeContent={cartData.length}
                    color="primary"
                  >
                    <ShoppingCartIcon color="white" />
                  </Badge>
                  <CartView
                    getDataFromLocalStorage={getDataFromLocalStorage}
                    allCartData={cartData}
                  />
                </div>
                {/* ---------------------end shopping cart----------------------- */}
              </div>
            </div>
          </div>
          {/* end search field and button */}
        </div>
      </div>
      <HeaderMenu />
    </>
  );
};

export default Header;
