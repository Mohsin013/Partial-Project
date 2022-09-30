import React from "react";

export const LeftSide = (props) => {
  const maindiv = {
    width: "100%",
    height: "350px",
    border: "1px solid pink",
    margin: "10px 0"
  };
  const upperdiv = {
    width: "90%",
    height: "200px",
    border: "1px solid orange",
    display: "flex"
  };
  const img = {
    width: "20%",
    height: "80%",
    margin: "10px 0 5px 10px"
  };
  const middiv = {
    textAlign: "left"
  };
  const innerdiv = {
    border: "1px solid red",
    textAlign: "left",
    marginLeft: "20px"
  };
  const btmdiv = {
    border: "1px solid green",
    width: "98%",
    height: "70px",
    display: "flex"
  };

  const btm1 = {
    width: "50%",
    textAlign: "center",
    border: "1px solid red",
    padding: "20px 20px"
  };

  const btm2 = {
    display: "flex",
    width: "50%",
    justifyContent: "center",
    border: "1px solid red"
  };

  const btn = {
    border: "0",
    padding: "5px 20px",
    height: "50px",
    margin: "10px 20px",
    color: "rgb(48,58,178)",
    fontSize: "30px",
    textAlign:"center",
    backgroundColor:"white"
  };

  console.log(props.data, props.setData);
  const {
    image_url,
    name,
    brand,
    size,
    
    price,
    Category,
    strikedoffprice
  } = props.data;
  const [count, setCount] = React.useState(1);

  return (
    <>
      <div style={maindiv}>
        <div style={upperdiv}>
          <img src={image_url} style={img} />
          <div style={innerdiv}>
            <h3>{name}</h3>
            <h4>₹{price}</h4>
            <p>BRAND: {brand}</p>
            <p>SIZE: {size}</p>
          </div>
        </div>
        <div style={middiv}>
          <h3>Delivery in Enter Pincode above</h3>
        </div>
        <div style={btmdiv}>
          <div style={btm1}>
            <button style={btn2}>Remove</button>
          </div>
          <div style={btm2}>
            <button style={btn}  onClick={()=>{ if(count<=1){setCount(1)}else{setCount(count-1)}}}>-</button>
            <p style={{ margin: "25px 0" }}>{count}</p>
            <button style={btn} onClick={()=>{setCount(count+1)}}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};
