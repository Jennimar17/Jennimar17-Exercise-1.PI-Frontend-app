import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../../redux/actions/phoneActions.js";
import PhoneComponent from "../Phone/PhoneComponent.jsx";
import "./phone-listing.css";
const PhoneListing = () => {
  const phones = useSelector((state) => state.allPhones.phones);
  const dispatch = useDispatch();

  const getPhones = async () => {
    const response = await axios
      .get("http://localhost:4000/api/phones")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPhones(response.data));
  };

  useEffect(() => {
    getPhones();
  }, []);

  console.log("phones :", phones);
  return (
    <div className="containerPhone">
      <PhoneComponent />
    </div>
  );
};

export default PhoneListing;
