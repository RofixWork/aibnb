import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React from "react";
import getCenter from "geolib/es/getCenter";
const Map = ({ searchResult }) => {
  const coordinates = searchResult.map((result) => {
    return {
      latitude: result.lat,
      longitude: result.long,
    };
  });

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  const [location, setLocation] = React.useState({});

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/rofixwork/ckt9zkvi13cnr18pha3kvzv3z"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResult.map((result, index) => {
        return (
          <>
            <Marker
              key={index}
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p className="hi" onClick={() => setLocation(result)}>
                🖐
              </p>
            </Marker>

            {location?.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setLocation({})}
                longitude={result.long}
                latitude={result.lat}
              >
                <h5 style={{ fontWeight: 500 }}>{location.title}</h5>
              </Popup>
            ) : (
              false
            )}
          </>
        );
      })}
    </ReactMapGL>
  );
};

export default Map;
