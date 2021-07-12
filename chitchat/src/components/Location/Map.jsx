import ReactMapGL from "react-map-gl";
import React, { useState } from "react";

const Map = ({ coordinates }) => {
  const { latitude, longitude } = coordinates;
  const token = "pk.eyJ1Ijoic25pcGVyc3NzODgiLCJhIjoiY2txZ3Jpa2l6MDdzaTJ3bnk0dzF1N25xZiJ9.gOziOmXAF-111s9vxY8M4Q";
  const [viewport, setViewport] = useState({
    width: 320,
    height: 150,
    latitude: parseInt(latitude),
    longitude: parseInt(longitude),
    zoom: 3,
  });
  return <ReactMapGL {...viewport} mapboxApiAccessToken={token} onViewportChange={(nextViewport) => setViewport(nextViewport)} />;
};

export default Map;
