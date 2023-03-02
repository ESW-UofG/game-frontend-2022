import React from "react";
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import "./styles/Map.css";

function Map(){
    const center = [43.5327, -80.2262];

    return(
        <div id="#main-container">
            <div id="map">
            <MapContainer center={center} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
    );
}

export default Map;