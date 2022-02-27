import React, { useState, useEffect } from "react";
import axios from "axios";
import Phone from "../Phone/Phone.jsx";
import Spinner from "../Spinner/Spinner.jsx";
export default function Phones() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL_API = "http://localhost:4000/api/phones";

  useEffect(() => {
    axios
      .get(`${URL_API}`)
      .then((res) => {
        setPhones(res.data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {phones.map((phone) => {
        return (
          <Phone
            props={phone}
            key={phone.id}
            className="card__phone-container"
          />
        );
      })}
      {phones.length === 0 && <p>cargando</p>}
    </>
  );
}
