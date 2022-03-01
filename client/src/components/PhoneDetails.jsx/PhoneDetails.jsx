import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../../redux/actions/phoneActions.js";

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
        <div>{phone.name}
        <img src={phone.image}/></div>
      )}
    </div>
  );
};

export default PhoneDetails;
