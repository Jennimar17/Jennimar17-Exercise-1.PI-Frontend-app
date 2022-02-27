import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-img--logo">
          <img src="/assets/zignaly_logo.svg" alt="" className="logo" />
        </div>
        <div className="card-img--subtitle">
          <img src="/assets/PhoneShop.png" alt="phone logo" />
        </div>
        <Link to="/phones">
          <button className="card-button">Entrar</button>
        </Link>
      </div>
    </div>
  );
}
