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
import Billing from "./components/billing";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillBagFill, BsFillPenFill } from "react-icons/bs";
import { CiStopwatch, CiMoneyBill } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || 200}px;
  min-height: 100vh;
  transition: 0.85s;
`;

function App() {
  const [selectedList, setSelectedList] = useState("");
  const [expanded, setExpanded] = useState(true);

  const LISTS = [
    {
      name: "productsList",
      title: "Products List",
      path: "/productsList",
      component: <ProductsList />,
      icon: <BsFillBagFill />,
    },
    {
      name: "homework",
      title: "homework List",
      path: "/homework",
      component: <Homework />,
      icon: <BsFillPenFill />,
    },
    {
      name: "counter",
      title: "counter ",
      path: "/counter",
      component: <Counter />,
      icon: <CiStopwatch />,
    },
    {
      name: "billing",
      title: "billings",
      path: "/billinggg",
      component: <Billing />,
      icon: <CiMoneyBill />,
    },
  ];
  return (
    <div className="App">
      <div className="container">
        {/* <div className={`links ${expanded ? "" : "not-expanded"}`}> */}
        <LinksContainer width={expanded ? 200 : 90}>
          <div className="burger-menu" onClick={(e) => setExpanded(!expanded)}>
            <BiMenu size={32} />
          </div>

          {LISTS.map((l) => (
            <NavLink
              key={l.name}
              //  onClick={() => setSelectedList(l.name) }
              to={l.path}
              className="link"
            >
              {l.icon}
              {expanded && <span>{l.title}</span>}
            </NavLink>
          ))}
          </LinksContainer>
        {/* </div> */}
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
    </div>
  );
}

export default App;
