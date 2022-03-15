import {MutableRefObject, useEffect, useState} from 'react';
import {Offer} from '../types/offer';
import {Map, TileLayer} from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Offer['city'],
): Map | null {
  const { latitude, longitude, zoom } = city.location;

  const [map, setMap] = useState<Map | null>(null);
  const layerUrl =  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(
        layerUrl,
        {
          attribution: copyright,
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
