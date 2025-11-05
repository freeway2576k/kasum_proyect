import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useState } from "react";
export const MapBox = () => {
  //const [center, setCenter] = useState([42.25110877470024, -8.689692353114784])
  const [lat, setLat] = useState(42.25110877470024)
  const [lon, setLon] = useState(-8.689692353114784)
  const [zoom, setZoom] = useState(11)
  return (
    <Map  provider={osm}
    defaultCenter={[lat, lon]}
    defaultZoom={zoom}>
      <Marker width={50} anchor={[42.25110877470024, -8.689692353114784]} />
    </Map>
  );
};
