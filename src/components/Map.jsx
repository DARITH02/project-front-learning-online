import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MapPin } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Company location (example: Phnom Penh, Cambodia)
const companyLocation = {
  lat: 11.5622054,
  lng: 104.89051,
};

function Map() {
  const [showMap, setShowMap] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAQHaRi2-CivzkTqjpF2MbIhaDS67Vqbro",
  });

  // const handleShowMap = () => {
  //   setShowMap(true);
  // };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div>
      <span className="flex gap-2.5 cursor-pointer hover:text-blue-600 ">
        <MapPin className=" h-5 text-primary" />
        <button className="cursor-pointer">ETEC2, St 160, Phnom Penh</button>
      </span>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={companyLocation}
        zoom={15}
      >
        <Marker position={companyLocation} />
      </GoogleMap>
    </div>
  );
}

export default Map;
