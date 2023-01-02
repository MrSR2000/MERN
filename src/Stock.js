
import React from "react";
import { BsTrash } from "react-icons/bs";
  
  const Stock = ({securityName,symbol,lastTradedPrice,onRemove,...rest}) => {
    // console.log();
    return (
      <div style ={{display : "flex", justifyContent:"space-between", width:700,margin:'20px'}}>
        {/* <h1>{props.securityName}</h1> */}
        <h2>{symbol}</h2>
        <h2>{lastTradedPrice}</h2>
        <BsTrash onClick={() => onRemove(rest.securityId)}/>
      </div>
    );
  };
  
  export default Stock;