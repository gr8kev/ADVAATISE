import React from "react";
import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

const Map = () => {
  const position = [6.4453, 3.461];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="leaflet-container"
      scrollWheelZoom={false} // Disable zoom on scroll
      dragging={false} // Disable map dragging
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>6A, Babajide George, Lekki Phase 1, Lagos</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
