import {Offer} from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className?: string;
  offersInCurrentCity: Offer[];
  currentId?:number,
}

function Map ({ className='', offersInCurrentCity, currentId }: MapProps): JSX.Element {
  const [{ city }] = offersInCurrentCity;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offersInCurrentCity.forEach(( { id, location }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            currentId !== undefined &&  currentId === id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offersInCurrentCity]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
