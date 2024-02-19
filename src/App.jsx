import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ShoppingCart from "./Components/ShoppingCart";
import Footer from "./Components/Footer";

const App = () => {
  const [value, setValue] = useState(0);
  const obj = [
    {
      title: "Fancy Products",
      price: "$40.00 - $80.00",
      inStock: false,
      id: 1,
      options: false,
      ratings: false,
    },
    {
      id: 2,
      title: "Special Item",
      price: " $18.00",
      original_usd: "$20.00 ",
      inStock: true,
      options: true,
      ratings: true,
    },
    {
      title: "Sale item",
      price: " $25.00",
      original_usd: "$50.00",
      inStock: true,
      id: 3,
      options: true,
      ratings: false,
    },
    {
      title: "Popular Item",
      ratings: true,
      price: "$ 40.00",
      inStock: false,
      options: true,
    },
    {
      title: "Sale item",
      price: " $25.00",
      original_usd: "$50.00",
      inStock: true,
      id: 3,
      options: true,
      ratings: false,
    },
    {
      title: "Fancy Products",
      price: "$120.00 - $280.00",
      inStock: false,
      id: 1,
      options: false,
      ratings: false,
    },
    {
      title: "Special Item",
      price: " $18.00",
      original_usd: "$20.00 ",
      inStock: true,
      id: 2,
      options: true,
      ratings: true,
    },
    {
      title: "Popular Item",
      price: "$ 40.00",
      inStock: false,
      options: true,
      ratings: true,
    },
  ];
  const [Product, setProduct] = useState(obj);
  return (
    <div>
      <Navbar value={value} />
      <Header />
      <div className="container">
        <div className="row">
          {Product.map((item, index) => {
            return (
              <ShoppingCart
                item={item.title}
                price={item.price}
                original={item.original_usd}
                stock={item.inStock}
                index={index}
                id={item.id}
                options={item.options}
                value={value}
                setValue={setValue}
                ratings={item.ratings}
                Details={item.Details}
                Image={item.Image}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;