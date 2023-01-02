import React, { useState, useRef } from "react";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { PRODUCTS } from "../constants";
import { toast } from "react-toastify";

const ProductsList = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [selectedProduct, setSelectdProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const nameRef = useRef(null);
  const brandRef = useRef(null);
  const priceRef = useRef(null);

  const addProduct = () => {
    if (name === "" || brand === "" || price === "") {
      toast.error("Fill all the details !!");
    } else {
      setProducts([
        ...products,
        {
          name,
          brand,
          price,
          id: new Date().getTime(),
        },
      ]);
      // setName("");
      setBrand("");
      setPrice("");
      toast.success(name + " Product added!");
      nameRef?.current.focus();
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

  const removeProduct = (selectedId) =>
    setProducts(products.filter((p) => p.id !== selectedId));

  const handleEditProduct = (product) => {
    setName(product.name);
    setBrand(product.brand);
    setPrice(product.price);
    setEditMode(true);
    setSelectdProduct(product);
  };

  const updateProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === selectedProduct.id
          ? { ...selectedProduct, name, brand, price }
          : p
      )
    );
    setEditMode(false);
    setName("");
    setBrand("");
    setPrice("");
    setSelectdProduct(null);
    toast.success(name + " Product updated!");
    nameRef?.current.focus();
  };
  const cancelEdit = () => {
    setEditMode(false);
    setName("");
    setBrand("");
    setPrice("");
    setSelectdProduct(null);
  };

  return (
    <div>
      <h1>Products List</h1>
      <div className="products-container">
        {products.map((p, j) => (
          <div className="product" key={p.id}>
            <div className="sn">
              <span>{j + 1}</span>
            </div>
            <div className="col">
              <span>{p.name}</span>
            </div>
            <div className="col">
              <span>{p.brand}</span>
            </div>
            <div className="col">
              <span>{p.price}</span>
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
          id="name"
          value={name}
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) =>
            e.code === "Enter" ? brandRef?.current.focus() : void 0
          }
          placeholder="Product Name"
        />
        <input
          name="brand"
          id="brand"
          value={brand}
          ref={brandRef}
          onChange={(e) => setBrand(e.target.value)}
          onKeyDown={(e) =>
            e.code === "Enter" ? priceRef?.current.focus() : void 0
          }
          placeholder="Brand"
        />
        <input
          name="price"
          id="price"
          value={price}
          ref={priceRef}
          onChange={(e) => setPrice(e.target.value)}
          onKeyDown={handlePressEnterAtPrice}
          placeholder="Price"
          type="number"
        />
        <button className="" onClick={editMode ? updateProduct : addProduct}>
          {editMode ? "Update" : "Add"}
        </button>
        {editMode ? (
          <button className="cancel" onClick={cancelEdit}>
            cancel
          </button>
        ) : null}
        <select closeMenuOnSelect={false} />
      </div>
    </div>
  );
};

export default ProductsList;
