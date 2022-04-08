import {useEffect, useRef} from 'react';
import {Offer} from '../../types/offer';
import useMap from '../../hooks/use-map';
import {Icon, layerGroup, Marker} from 'leaflet';
import {Markers} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className?: string;
  offersInCurrentCity: Offer[];
  currentId?:number,
}

function Map({className='', offersInCurrentCity, currentId}: MapProps): JSX.Element {
  const [{ city }] = offersInCurrentCity;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const defaultCustomIcon = new Icon({
      iconUrl: Markers.DefaultUrl,
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });

    const currentCustomIcon = new Icon({
      iconUrl: Markers.CurrentUrl,
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });

    const markerGroup = layerGroup();

    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });

      offersInCurrentCity.forEach(( { id, location }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            currentId && currentId === id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerGroup);
      });

      markerGroup.addTo(map);
    }
    return () => {
      markerGroup.clearLayers();
    };
  }, [map, offersInCurrentCity, currentId, city.location.latitude, city.location.longitude]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default Map;
