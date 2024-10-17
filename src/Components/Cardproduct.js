// mine
import React, { useEffect, useState } from "react";
import "../Styles/Cardpro.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/createSlice";
import { fetchProducts, STATUSES } from "../Store/productSlice";
const Cardproduct = () => {
  const dispatch = useDispatch();

  // const [data, setdata] = useState([]);
  const { data: data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const mainfunc = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const res2 = await res.json();
    //   setdata(res2);
    // };
    // mainfunc();
  }, []);

  const AddtoCart = (Elem) => {
    dispatch(add(Elem));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading Please Wait...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

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
