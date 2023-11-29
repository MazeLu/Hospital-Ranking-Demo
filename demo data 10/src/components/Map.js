import React, { useState, useEffect, useRef } from "react"
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  Polygon,
  Marker,
  MarkerClusterer,
  TransitLayer,
  StandaloneSearchBox,
  TrafficLayer
} from "@react-google-maps/api"
import Popup from "./Popup"
import marker from "../marker1.svg"
import markerSelected from "../marker2.svg"
import { getLAGeoJson } from "../api"
import { mapStyle } from "../mapStyle"
import "../styles.css"

const containerStyle = {
  width: "100%",
  height: "100vh"
}

const Map = ({
  data,
  scrollToItem,
  centerCoordinates,
  zoomLevel,
  seletectedItem
}) => {
  const [displayHospitals, setDisplayHospitals] = useState(null);
  const [map, setMap] = useState(null)
  const [laMap, setLaMap] = useState(null)
  const searchRef = useRef()

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onPlacesChanged = () => console.log(searchRef.current.value)

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCbll8tLBXWpHeb0VDuCTLi8NVwWG7Y7Hs"
      libraries={["places"]}
    >
      {displayHospitals && <Popup displayHospitals={displayHospitals} setDisplayHospitals={setDisplayHospitals} />}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerCoordinates}
        zoom={zoomLevel}
        onUnmount={onUnmount}
        options={{ styles: mapStyle }}
      >
        <StandaloneSearchBox onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            ref={searchRef}
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </StandaloneSearchBox>
        {/* <div
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            padding: 10,
            borderRadius: 5,
            fontSize: 8,
            width: 180,
            position: "absolute",
            zIndex: 100,
            bottom: 20,
            left: 20,
            color: "#333",
            fontStyle: "italic"
          }}
        >
          Note: Some crime incidents's coordinates are mislabeled and have been
          assigned the coordinates for Los Angeles.
        </div> */}
        {/* <TransitLayer/> */}
        {/* <TrafficLayer/> */}
        {/* <MarkerClusterer maxZoom={13}>
          {(clusterer) => */}
        {data.map((item, i) => {
          return (
            <div key={i}>
              {item === seletectedItem ? (
                <div style={{ zIndex: 500 }}>
                  <Marker
                    position={{
                      lat: item.lat === "0" ? Number(34.05) : Number(item.lat),
                      lng: item.lon === "0" ? Number(-118.24) : Number(item.lon)
                    }}
                    icon={{
                      url: markerSelected
                    }}
                    onMouseOver={() => {
                      setDisplayHospitals(item)
                    }}
                    onMouseOut={() => {
                      setDisplayHospitals(null)
                    }}
                    onClick={() => scrollToItem(i)}
                  />
                </div>
              ) : (
                <Marker
                  key={i}
                  // clusterer={clusterer}
                  // options={options}
                  position={{
                    lat: item.lat === "0" ? Number(34.05) : Number(item.lat),
                    lng: item.lon === "0" ? Number(-118.24) : Number(item.lon)
                  }}
                  // clusterer={clusterer}
                  // options={options}
                  icon={{
                    url: marker
                  }}
                  onMouseOver={() => {
                    setDisplayHospitals(item)
                  }}
                  onMouseOut={() => {
                    setDisplayHospitals(null)
                  }}
                  onClick={() => scrollToItem(i)}
                />
              )}
            </div>
          )
        })}
        {/* }
        </MarkerClusterer> */}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
