import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import { RiSendPlaneFill as PaperPlane } from 'react-icons/ri';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';
import osm from './osm-providers';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function BasicMap({
  onPopupClick,
  futureTrips,
  history,
  viewPort,
}) {
  mapboxgl.accessToken = process.env.REACT_APP_ACCESSTOKEN;

  const markerIconBlack = new L.Icon({
    iconUrl: require('../../images/location-marker-gray.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const markerIconYellow = new L.Icon({
    iconUrl: require('../../images/location-marker-yellow.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const [destinationMapbox, setDestinationMapbox] = useLocalStorage(
    'destinationMapBox',
    [23.113592, -82.366592]
  );
  const ZOOM_LEVEL = 8;
  const mapRef = useRef();
  const [center, setCenter] = useLocalStorage('center', {
    lat: destinationMapbox[0],
    lng: destinationMapbox[1],
  });
  const position = [destinationMapbox[0], destinationMapbox[1]];

  const tripCoordinates = futureTrips.filter(
    futureTrip => futureTrip.coordinates[0] !== null
  );

  const historyCoordinates = history.filter(
    history => history.coordinates[0] !== null
  );

  useEffect(() => {
    const geocoderDestination = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: 'country, region, place, poi',
      limit: 5,
      placeholder: 'Search for destinations...',
      minLength: 2,
    });
    handleShowOnMap(viewPort);
    geocoderDestination.on('result', e => {
      return setDestinationMapbox([
        e.result.center[1],
        e.result.center[0],
        e.result,
      ]);
    });
    geocoderDestination.addTo('#geocoderdestination');
  }, []);

  return (
    <>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} id="map">
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        {destinationMapbox[2] ? (
          <Marker position={position} icon={markerIconBlack}>
            <Popup>
              <PopupText>Add new trip?</PopupText>
              <StyledLink
                to="/formPage"
                aria-label="add-new-destination"
                onClick={() => onPopupClick(destinationMapbox)}
              >
                <AddDestination size={20} />
              </StyledLink>
            </Popup>
          </Marker>
        ) : undefined}
        {tripCoordinates.map(trip => (
          <Marker
            key={trip.coordinates}
            position={trip.coordinates}
            icon={markerIconBlack}
          >
            <Popup>
              <PopupText>{trip.destination}</PopupText>
              <PopupText>
                {dayjs(trip.startDate).format('DD-MM-YY')} <span>- </span>
                {dayjs(trip.endDate).format('DD-MM-YY')}
              </PopupText>
            </Popup>
          </Marker>
        ))}
        {historyCoordinates?.map(trip => (
          <Marker
            key={trip.coordinates}
            position={trip.coordinates}
            icon={markerIconYellow}
          >
            <Popup>
              <p>{trip.destination}</p>
              <p>
                {dayjs(trip.startDate).format('DD-MM-YY')} <span>to </span>
                {dayjs(trip.endDate).format('DD-MM-YY')}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <SearchWrapper>
        <GeoCoderDestination
          id={'geocoderdestination'}
          onKeyDown={handleEnterClick}
        ></GeoCoderDestination>
      </SearchWrapper>
    </>
  );

  function handleShowOnMap(viewPort) {
    if (viewPort !== '') {
      return (
        setCenter({ lat: viewPort[0], lng: viewPort[1] }),
        window.location.reload()
      );
    } else {
      return;
    }
  }

  function handleEnterClick(event) {
    let code = 0;
    code = event.keyCode;
    if (code === 13) {
      setCenter({ lat: destinationMapbox[0], lng: destinationMapbox[1] });
      window.location.reload();
    }
  }
}

const SearchWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 10px;
  max-width: 80vw;
  z-index: 400;
`;

const GeoCoderDestination = styled.div`
  margin-top: 10px;
  display: ${props => (props.display === 'none' ? 'none' : '')};
  height: 28px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: darkslategray;
`;

const AddDestination = styled(PaperPlane)`
  color: var(--color-dark-gray);
  margin: 5px;
`;

const PopupText = styled.p`
  font-size: 16px;
`;
