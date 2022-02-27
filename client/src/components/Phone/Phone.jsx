import React from "react";
import "./phone.css";
import { BsStarFill, BsStarHalf, BsStar, BsHeartFill } from "react-icons/bs";

function PhoneList({ props }) {
  const { image, brand, name, price } = props;

  return (
    <div className="phone-card">
      <div className="phone-header">
        <p className="phone-brand">{brand}</p>
        <BsHeartFill className="phone-like" />
      </div>
      <div className="phone-card__img">
        <img src={image} alt={name} />
      </div>

      <p className="phone-name">{name}</p>
      <p className="phone-price">{price}</p>
      <button className="button">Comprar</button>
      <div className="phone-review">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
        <p className="phone-review--text">(4.5)</p>
      </div>
    </div>
  );
}

export default PhoneList;
