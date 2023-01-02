import logo from "./logo.svg";
import "./App.css";
import Stock from "./Stock";
import { STOCKS } from "./constants";
import Counter from "./Counter";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ProductsList from "./components/productsList";
import Homework from "./components/homework";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Billing  from "./components/billing";

function App() {
  const [selectedList, setSelectedList] = useState("");
  const LISTS = [
    {
      name: "productsList",
      title: "Products List",
      path: "/productsList",
      component: <ProductsList />,
    },
    {
      name: "homework",
      title: "homework List",
      path: "/homework",
      component: <Homework />,
    },
    {
      name: "counter",
      title: "counter ",
      path: "/counter",
      component: <Counter />,
    },
    {
      name: "billing",
      title: "billings",
      path: "/billinggg",
      component: <Billing  />
    }
  ];
  return (
    <div className="App">
      <div className="links">
        {LISTS.map((l) => (
          <NavLink
            key={l.name}
            //  onClick={() => setSelectedList(l.name) }
            to={l.path}
            className="link"
          >
            {l.title}
          </NavLink>
        ))}
      </div>
      {/* {LISTS.map((l) => selectedList === l.name && l.component )} */}
      {/* <button onClick={() => setSelectedList("homework")} className = {selectedList == "homework" ? "selected" : ""}>Homework</button>
      <button onClick={() => setSelectedList("counter")} className = {selectedList == "counter" ? "selected" : ""}>Counter</button> */}
      {/* {selectedList === "homework" && <Homework />}
      {selectedList === "counter" && <Counter />} */}

      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="productsList" element={<ProductsList />} />
        <Route path="homework" element={<Homework />} />
        <Route path="counter" element={<Counter />} />
        <Route path="billinggg" element={<Billing />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
