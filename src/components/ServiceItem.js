import React from "react";
import "../styles/ServiceItem.css";
import { useHistory } from "react-router-dom";

export default function ServiceItem({ service }) {
  const history = useHistory();

  const handleRoute = () => {
    history.push(`/services/${service.id}`);
  };

  return (
    <div className="service-item">
      <div className="service-image">
        <img src={service.image} alt="" />
      </div>
      <div className="service-info">
        <h4>{service.title}</h4>
        <p className="text-muted">{service.description}</p>
        <button onClick={handleRoute} className="d-btn">
          Read More
        </button>
      </div>
    </div>
  );
}
