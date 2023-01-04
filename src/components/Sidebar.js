import React from "react";
import ProductsList from "./productsList";
import Homework from "./homework";
import { BsFillBagFill, BsFillPenFill } from "react-icons/bs";
import { CiStopwatch, CiMoneyBill } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import Counter from "../Counter";
import Billing from "./billing";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || 200}px;
  min-height: 100vh;
  transition: 0.85s;
`;


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

const Sidebar = ({expanded, setExpanded}) => {
  // const [expanded, setExpanded] = useState(true);

 

  return (
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
  );
};

export default Sidebar;