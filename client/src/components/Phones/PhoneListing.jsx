import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../../redux/actions/phoneActions.js";
import PhoneComponent from "../Phone/PhoneComponent.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import "./phone-listing.css";
const PhoneListing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const phones = useSelector((state) => state.allPhones.phones);
  const dispatch = useDispatch();

  const getPhones = async () => {
    const response = await axios
      .get("http://localhost:4000/api/phones")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPhones(response.data));
    setIsLoading(false);
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="containerPhone">
      <PhoneComponent />
      {isLoading && <Spinner />}
    </div>
  );
};

export default PhoneListing;
