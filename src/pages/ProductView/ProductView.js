import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { Button, CircularProgress, Rating } from "@mui/material";

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
  p: 3,
};

export default function ProductView({ products }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { productId } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate();

  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    setIsLoading(true);
    products.forEach((product) => {
      if (products.length > 0) {
        if (product.id === parseInt(productId)) {
          setProduct(product);
          setIsLoading(false);
        }
      }
    });

    setIsLoading(false);
  }, [products]);
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
          {!isLoading && product?.id ? (
            <div className="relative">
              <div className="flex">
                <div>
                  <div
                    style={{ width: "368px", height: "368px" }}
                    className={
                      product.image
                        ? "rounded-md flex justify-center"
                        : "bg-gray-100 rounded-md flex justify-center"
                    }
                  >
                    <img
                      style={{ maxHeight: "368px", maxWidth: "368px" }}
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
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
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <div className="flex items-center py-2">
                      <Rating
                        name="disabled"
                        value={product.rating.rate}
                        readOnly
                      />
                      <span className="text-gray-400">
                        ({product.rating.count} rates)
                      </span>
                    </div>
                    <p className="text-xl font-bold py-2">
                      ${parseFloat(product.price)}
                    </p>
                    <div
                      style={{ width: "", height: "250px" }}
                      className="overflow-y-scroll bg-slate-50 p-2"
                    >
                      <p>Code: Apple iPad Pro 11" (2020) Wifi 128Gb Silver</p>
                      <p>
                        Category:{" "}
                        <span style={{ color: "yellowgreen" }}>
                          {product.category}
                        </span>
                      </p>
                      <p>
                        KeyWord:{" "}
                        <span style={{ color: "yellowgreen" }}>
                          {product.title.split(" ").map((single) => {
                            let desData = "";
                            if (single.length > 3) {
                              desData += single + " ";
                            }
                            return desData;
                          }) +
                            "," +
                            product.category}
                        </span>
                      </p>
                      <ul className="list-disc">
                        <li>{product.description}</li>
                      </ul>
                    </div>
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
                            readOnly
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
          ) : (
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
                <div>
                  <CircularProgress />
                </div>
              </div>
              <div
                onClick={handleClose}
                className="absolute -top-4 -right-3 hover:text-red-500 cursor-pointer select-none"
              >
                X
              </div>
              {/* close btn */}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
