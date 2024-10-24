import Cart from "./Cart";
import { useEffect } from "react";
import { useState } from "react";

const Carts = () => {
  const [cartValue, setCartValue] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setCartValue(data));
  }, []);
  console.log(cartValue);

  return (
    <div className="border-2 border-gray-100 col-span-8 rounded-lg">
      {cartValue.map((s) => (
        <Cart key={s.id} cart={s}></Cart>
      ))}
      ;
    </div>
  );
};

export default Carts;
