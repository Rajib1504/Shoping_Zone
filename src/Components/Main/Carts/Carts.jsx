import PropTypes from "prop-types";
import Cart from "./Cart";
import { useEffect } from "react";
import { useState } from "react";

const Carts = ({ handelBookmark }) => {
  const [cartValue, setCartValue] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setCartValue(data));
  }, []);
  // console.log(cartValue);
  return (
    <div className="border-2 border-gray-100 sm:col-span-12 md:col-span-9 rounded-lg ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cartValue.map((s) => (
          <Cart key={s.id} cart={s} handelBookmark={handelBookmark}></Cart>
        ))}
        ;
      </div>
    </div>
  );
};
Carts.propTypes = {
  handelBookmark: PropTypes.func.isRequired,
};

export default Carts;
