import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="headerMenuWrapper flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-3">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.24872 1.4368C5.24872 1.02258 5.5845 0.686798 5.99872 0.686798H17.0033C17.4175 0.686798 17.7533 1.02258 17.7533 1.4368C17.7533 1.85101 17.4175 2.1868 17.0033 2.1868H5.99872C5.5845 2.1868 5.24872 1.85101 5.24872 1.4368Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.24872 7.00011C5.24872 6.58589 5.5845 6.25011 5.99872 6.25011H17.0033C17.4175 6.25011 17.7533 6.58589 17.7533 7.00011C17.7533 7.41432 17.4175 7.75011 17.0033 7.75011H5.99872C5.5845 7.75011 5.24872 7.41432 5.24872 7.00011Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.24872 12.5634C5.24872 12.1492 5.5845 11.8134 5.99872 11.8134H17.0033C17.4175 11.8134 17.7533 12.1492 17.7533 12.5634C17.7533 12.9776 17.4175 13.3134 17.0033 13.3134H5.99872C5.5845 13.3134 5.24872 12.9776 5.24872 12.5634Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.246643 1.43679C0.246643 0.746322 0.80638 0.186584 1.49685 0.186584C2.18732 0.186584 2.74706 0.746322 2.74706 1.43679C2.74706 2.12726 2.18732 2.687 1.49685 2.687C0.80638 2.687 0.246643 2.12726 0.246643 1.43679Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.246643 7.00012C0.246643 6.30965 0.806381 5.74991 1.49685 5.74991C2.18732 5.74991 2.74706 6.30965 2.74706 7.00012C2.74706 7.69059 2.18732 8.25033 1.49685 8.25033C0.806381 8.25033 0.246643 7.69059 0.246643 7.00012Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.246643 12.5634C0.246643 11.873 0.806381 11.3132 1.49685 11.3132C2.18732 11.3132 2.74706 11.873 2.74706 12.5634C2.74706 13.2539 2.18732 13.8136 1.49685 13.8136C0.806381 13.8136 0.246643 13.2539 0.246643 12.5634Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <FormControl sx={{ m: 0, p: 0, minWidth: 110, border: "none" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={0}
                label="Age"
                defaultValue={"category"}
                // onChange={handleChange}
              >
                <MenuItem value={"category"}>Category</MenuItem>
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
          </div>
        </div>
        {/* end categoy */}
        <div>
          <ul className="flex">
            <Link className="px-2" to={"/home"}>
              <li>Home</li>
            </Link>
            <Link className="px-2" to={"/home/product"}>
              <li>New Product</li>
            </Link>
            <Link className="px-2" to="/">
              <li>Promotion</li>
            </Link>
          </ul>
        </div>
        {/* end menu */}
        <div>
          <ul className="flex">
            <Link className="px-2" to={"/"}>
              <li>Track Your Order</li>
            </Link>
            <Link className="px-2" to={"/"}>
              <li>Sign In/Register</li>
            </Link>
          </ul>
        </div>
        {/* end identification user/track order */}
      </div>
    </div>
  );
};

export default HeaderMenu;
