import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import ProductList from "./component/ProductList.jsx";
import Footer from "./component/Footer.jsx";
import AddItem from "./component/addItem.jsx";
function App() {
  const phones = [
    {
      price: 9999,
      itemName: "Oppo A3s",
      brand: "Oppo",
      quantity: 0,
    },
    {
      price: 12999,
      itemName: "Oppo A6",
      brand: "Oppo",
      quantity: 0,
    },
    {
      price: 7999,
      itemName: "Oppo A1",
      brand: "Oppo",
      quantity: 0,
    },
    {
      price: 9866,
      itemName: "Oppo A3s mini",
      brand: "Oppo",
      quantity: 0,
    },
  ];
  let [phonelist, setList] = useState(phones);
  let [totalamount, setTotal] = useState(0);
  const increment = (index) => {
    let newproductlist = [...phonelist];
    let newtotal = totalamount;
    newtotal += newproductlist[index].price;
    newproductlist[index].quantity++;
    setTotal(newtotal);
    setList(newproductlist);
  };
  const decrement = (index) => {
    let newproductlist = [...phonelist];
    let newtotal = totalamount;
    if (newproductlist[index].quantity > 0) {
      newproductlist[index].quantity--;
      newtotal -= newproductlist[index].price;
    }
    setTotal(newtotal);
    setList(newproductlist);
  };
  const resetQuantity = () => {
    let newproductlist = [...phonelist];
    newproductlist.map((Products) => (Products.quantity = 0));
    setList(newproductlist);
    setTotal(0);
  };
  const removeItem = (index) => {
    let newproductlist = [...phonelist];
    let newTotal = totalamount;
    newTotal -= newproductlist[index].quantity * newproductlist[index].price;
    newproductlist.splice(index, 1);
    setList(newproductlist);
    setTotal(newTotal);
  };
  const addItemToList = (addName, addPrice, addBrand) => {
    let newproductlist = [...phonelist];
    newproductlist.push({
      price: Number(addPrice),
      itemName: addName,
      brand: addBrand,
      quantity: 0,
    });
    setList(newproductlist);
  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <ProductList
              phoneList={phonelist}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
            />
          </div>
          <div className="col-12 col-md-6">
            <AddItem addItemToList={addItemToList}/>
          </div>
        </div>
      </main>
      <Footer totalamount={totalamount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
