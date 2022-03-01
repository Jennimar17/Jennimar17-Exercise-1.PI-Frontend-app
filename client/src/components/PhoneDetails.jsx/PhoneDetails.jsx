import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../../redux/actions/phoneActions.js";
import { BsStarFill, BsStarHalf, BsStar, BsHeartFill } from "react-icons/bs";
import "../Phone/phone.css";

const PhoneDetails = () => {
  const { id } = useParams();
  let phones = useSelector((state) => state.allPhones.phones);
  let phone = phones.filter((phone) => phone.id === id)[0];
  const dispatch = useDispatch();

  const getPhones = async (id) => {
    const response = await axios
      .get(`http://localhost:4000/api/phones/` + id)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPhones(response.data));
  };

  useEffect(() => {
    getPhones(id);
  }, []);

  console.log(phone);

  return (
    <div className="e">
      {phones.map.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="container">
        <div className="phone-card">
          <div className="phone-header">
            <p className="phone-brand">{phone.brand}</p>
            <BsHeartFill className="phone-like" />
          </div>
          <div className="phone-card__img">
            <img src={phone.image} alt={phone.name} />
          </div>
          <p className="phone-name">{phone.name}</p>
          <p className="phone-price">{phone.price}</p>
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
        </div>
        </div>
      )}
    </div>
  );
};

export default PhoneDetails;
