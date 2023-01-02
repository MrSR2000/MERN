import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { BILLS } from "../constants";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
// import { PRODUCTS } from "../constants";

const Billing = () => {
  const [products, setProducts] = useState(BILLS);
  const [name, setName] = useState("");
  const [units, setUnits] = useState("");
  const [rate, setRate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [selectedProduct, setSelectdProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const nameRef = useRef(null);
  const unitRef = useRef(null);
  const rateRef = useRef(null);
  const totalAmountRef = useRef(null);

  const addProduct = () => {
    if (name == "" || units == "" || rate == "") {
      toast.error("Fill all the details !!");
    } else {
      setProducts([
        ...products,
        {
          name,
          units,
          rate,
          id: new Date().getTime(),
        },
      ]);

      // clear the input field
      setName("");
      setUnits("");
      setRate("");
    }
  };

  const handlePressEnterAtPrice = (e) => {
    if (e.code === "Enter") {
      if (editMode) {
        updateProduct();
      } else {
        addProduct();
      }
    }
  };

  const removeProduct = (selectedId) => {
    setProducts(products.filter((p) => p.id !== selectedId));
  };

  const handleEditProduct = (product) => {
    setName(product.name);
    setRate(product.rate);
    setEditMode(true);
    setSelectdProduct(product);
  };

  const updateProduct = () => {
    setProducts(
      products.map((p) => 
        p.id === selectedProduct.id
          ? { ...selectedProduct, name, units, rate }
          : p
      )
    );

    setEditMode(false);
    setName("");
    setUnits("");
    setRate("");
    setSelectdProduct(null);
    toast.success(name + " Product updated!");
    nameRef?.current.focus();
  };

  const cancelEdit = () => {
    setEditMode(false);
    setName("");
    setUnits("");
    setRate("");
    setSelectdProduct(null);
  };

  return (
    <div>
      <h1>Bill</h1>
      <div className="bill-container">
        {products.map((p, j) => (
          <div className="product" key={p.id}>
            <div className="sn">
              <span>{j + 1}</span>
            </div>
            <div className="col">
              <span>{p.name}</span>
            </div>
            <div className="col">
              <span>{p.units}</span>
            </div>
            <div className="col">
              <span>{p.rate}</span>
            </div>
            <div className="col">
              <BsTrash color={"red"} onClick={() => removeProduct(p.id)} />
              <BiEdit color={"blue"} onClick={() => handleEditProduct(p)} />
            </div>
          </div>
        ))}
      </div>
      <div className="product">
        <input
          name="name"
          id="id"
          value={name}
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) =>
            e.code === "Enter" ? unitRef?.current.focus() : void 0
          }
          placeholder="Product Name"
        />
        <input
          name="Units"
          id="Units"
          value={units}
          ref={unitRef}
          onChange={(e) => setUnits(e.target.value)}
          onKeyDown={(e) =>
            e.code === "Enter" ? rateRef?.current.focus() : void 0
          }
          placeholder="Product Units"
        />
        <input
          name="rate"
          id="rate"
          value={rate}
          ref={rateRef}
          onChange={(e) => setRate(e.target.value)}
          onKeyDown={handlePressEnterAtPrice}
          placeholder="Product Rate"
          type="number"
        />
        <button className="" onClick={editMode ? updateProduct : addProduct}>
          {editMode ? "Update" : "Add"}
        </button>
        {editMode ? (
          <button className="cancel" onClick={cancelEdit}>
            Cancel
          </button>
        ) : null}
        <select closeMenuOnSelect={false} />
      </div>
    </div>
  );
};

export default Billing;
