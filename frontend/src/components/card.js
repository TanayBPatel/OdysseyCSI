import React from "react";
import "./DeviceCard.css";

const DeviceCard = ({ title, status, location, details, icon, toggleLabel }) => {
  return (
    <div className="device-card">
      <div className="device-card-header">
        <h3>{title}</h3>
        <div className="icon">{icon}</div>
      </div>
      <p className="status">
        <span className={status === "Online" ? "online" : "offline"}></span>
        {status}
      </p>
      <p className="location">Location: {location}</p>
      <div className="details">{details}</div>
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" defaultChecked={true} />
          <span className="slider"></span>
        </label>
        <span>{toggleLabel}</span>
      </div>
    </div>
  );
};

export default DeviceCard;