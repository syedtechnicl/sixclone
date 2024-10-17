import React, { useEffect, useState } from "react";
import "../Styles/Cardpro.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/createSlice";
const Cardproduct = () => {
  const dispatch = useDispatch();

  const [data, setdata] = useState([]);
  useEffect(() => {
    const mainfunc = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const res2 = await res.json();
      setdata(res2);
    };
    mainfunc();
  }, []);

  const AddtoCart = (Elem) => {
    dispatch(add(Elem));
  };

  return (
    <div>
      <div className="card-container">
        {data.map((elem, index) => (
          <div className="card" key={index}>
            <img src={elem.image} alt={elem.title} className="card-img" />
            <div className="card-content">
              <b className="card-price">${elem.price}</b>
              <h3 className="card-title">{elem.title}</h3>
              <h5 className="card-description">{elem.description}</h5>
              <button
                onClick={() => {
                  AddtoCart(elem);
                }}
                className="btn"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardproduct;
