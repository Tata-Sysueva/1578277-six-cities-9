import {Offer} from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import L, {Icon, Marker} from 'leaflet';
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
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    const markerGroup = L.layerGroup();
    if (map) {
      offersInCurrentCity.forEach(( { id, location }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        markerGroup.addTo(map);
        marker
          .setIcon(
            currentId !== undefined &&  currentId === id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerGroup);
      });
    }
    return () => {
      markerGroup.clearLayers();
    };
  }, [map, offersInCurrentCity, currentId]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
