import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import ProductsList from "./components/productsList";
import Homework from "./components/homework";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import Billing from "./components/billing";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

const PageContainer = styled.div`
  width: calc(100% - (${(props) => props.width || 1000}px));
  background-color: ${props => props.bgColor  || "#ffffff"};
  transition: all 0.5s;
`;




function App() {
  // const [selectedList, setSelectedList] = useState("");
  const [expanded, setExpanded] = useState(true);


 
  return (
    <div className="App">
      <div className="container">
        {/* <div className={`links ${expanded ? "" : "not-expanded"}`}> */}
        <Sidebar expanded={expanded} setExpanded={setExpanded} bgColor={expanded? '#fe000050' : '#00fe0044'}/>
       
        {/* </div> */}
        {/* {LISTS.map((l) => selectedList === l.name && l.component )} */}
        {/* <button onClick={() => setSelectedList("homework")} className = {selectedList == "homework" ? "selected" : ""}>Homework</button>
      <button onClick={() => setSelectedList("counter")} className = {selectedList == "counter" ? "selected" : ""}>Counter</button> */}
        {/* {selectedList === "homework" && <Homework />}
      {selectedList === "counter" && <Counter />} */}

        <PageContainer width={expanded ? 1000 : 1300}  bgColor={expanded ? ' #00FF00 ' : '#FF0000'}>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="productsList" element={<ProductsList />} />
          <Route path="homework" element={<Homework />} />
          <Route path="counter" element={<Counter />} />
          <Route path="billinggg" element={<Billing />} />
        </Routes>
        </PageContainer>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
