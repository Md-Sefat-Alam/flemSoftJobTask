import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link, useNavigate } from "react-router-dom";
import { Button, Rating } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 808,
  height: 540,
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ProductView() {
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative">
            <div className="flex">
              <div>
                <div
                  style={{ width: "368px", height: "368px" }}
                  className="bg-gray-100 rounded-md"
                ></div>
                <div className="flex justify-between">
                  {[1, 2, 3, 4].map((id) => (
                    <div
                      key={id}
                      style={{ width: "83px", height: "83px" }}
                      className="rounded-md bg-gray-100 mt-5"
                    ></div>
                  ))}
                </div>
              </div>
              {/* end img show */}
              <div
                style={{ height: "450px" }}
                className="flex flex-col justify-between pl-8"
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    Apple iPad Pro 11" (2020) Wifi 128Gb (Silver)- 128Gb/
                    11Inch/ Wifi
                  </h2>
                  <div className="flex items-center py-2">
                    <Rating name="disabled" value={4} readOnly />
                    <span className="text-gray-400">(832 rates)</span>
                  </div>
                  <p className="text-xl font-bold py-2">$884.12</p>
                  <p>Code: Apple iPad Pro 11" (2020) Wifi 128Gb Silver</p>
                  <p>
                    Category:{" "}
                    <span style={{ color: "yellowgreen" }}>Technology</span>
                  </p>
                  <p>
                    KeyWord:{" "}
                    <span style={{ color: "yellowgreen" }}>
                      Apple, Technology, Ipad
                    </span>
                  </p>
                  <ul className="list-disc">
                    <li>Screen: LED-Backlit, 11Inch</li>
                    <li>Chipset/ CPU: Apple A12Z Bionic 2.3Ghz</li>
                    <li>RAM: 128Gb</li>
                    <li>Operating system: iOS 13</li>
                  </ul>
                </div>
                {/* end top text section */}
                <div>
                  <p>Quntity:</p>
                  <div className="flex">
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          if (quantity === 1) {
                            return null;
                          }
                          setQuantity(quantity - 1);
                        }}
                        className="text-3xl text-gray-500 px-2 cursor-pointer select-none"
                      >
                        -
                      </div>
                      <div>
                        <input
                          className="p-1 border-2 w-12 h-10 rounded-md text-center text-xl"
                          type="number"
                          value={quantity}
                          min={0}
                        />
                      </div>
                      <div
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-3xl text-gray-500 px-2 cursor-pointer select-none"
                      >
                        +
                      </div>
                    </div>
                    <Button
                      style={{
                        backgroundColor: "yellowgreen",
                        margin: "5px",
                        width: "120px",
                      }}
                      variant="contained"
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
              {/* end text show */}
            </div>
            <div
              onClick={handleClose}
              className="absolute -top-4 -right-3 hover:text-red-500 cursor-pointer select-none"
            >
              X
            </div>
            {/* close btn */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
