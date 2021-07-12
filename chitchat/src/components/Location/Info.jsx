import React from "react";
import Map from "./Map";
const Info = ({ item }) => {
  return (
    <div class="card-container">
      <span class="info">{item.country_code}</span>
      <img class="round" src={item.country_flag} alt="brazil" />
      <h3>{item.city}</h3>
      <h6>{item.country}</h6>

      <h4>IP: {item.ip}</h4>
      <div class="footer">{item && <Map coordinates={{ latitude: item.latitude, longitude: item.longitude }} />}</div>
    </div>
  );
};

export default Info;
