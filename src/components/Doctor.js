import React from "react";
import "../styles/Doctor.css";

export default function Doctor({ doctor }) {
  return (
    <div className="doctor">
      <div className="doctor-image">
        <img src={doctor.image} alt="" />
      </div>
      <div className="doctor-info text-center">
        <h4>{doctor.name}</h4>
        <p>{doctor.category}</p>
      </div>
    </div>
  );
}
