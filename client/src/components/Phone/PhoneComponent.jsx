import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsStarFill, BsStarHalf, BsStar, BsHeartFill } from "react-icons/bs";
import "./phone.css";

const PhoneComponent = () => {
  const phones = useSelector((state) => state.allPhones.phones);
  const renderPhones = phones.map((phone) => {
    const { id, brand, name, price, image } = phone;

    /*     debugger */
    return (
      <div className="phone-card" key={id}>
        <Link to={`/phones/${id}`}>
          <div className="phone-header">
            <p className="phone-brand">{brand}</p>
            <BsHeartFill className="phone-like" />
          </div>
          <div className="phone-card__img">
            <img src={image} alt={name} />
          </div>
          <p className="phone-name">{name}</p>
          <p className="phone-price">{price}</p>
          <div className="button-container">
            <button className="button">Comprar</button>
          </div>

          <div className="phone-review">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <p className="phone-review--text">(4.5)</p>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderPhones}</>;
};

export default PhoneComponent;
