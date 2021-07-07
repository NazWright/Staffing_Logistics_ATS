import React, { useEffect, useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { Container, Form, Row } from "react-bootstrap";

const libraries = ["places"];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCJ590ZkdA4P9dmFwj2cyuH9Szz8J98Dig",
    libraries,
  });

  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  const [center, setCenter] = useState({
    lat: 36.08656,
    lng: 79.77202,
  });

  const [map, setMap] = React.useState(null);
  const [address, setAddress] = React.useState(
    "1030 Homeland Ave, Greensboro, NC"
  );

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Container style={containerStyle}>
      <Form.Label>Enter Address</Form.Label>

      <Row style={{ height: "100%", marginTop: "15px" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={2}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ center: center }}
          c
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
          <Marker position={center} />
          kngkernsn
        </GoogleMap>
      </Row>
    </Container>
  ) : (
    <></>
  );
}

export default React.memo(Map);
