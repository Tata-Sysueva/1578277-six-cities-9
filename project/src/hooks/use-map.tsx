import {MutableRefObject, useEffect, useState} from 'react';
import {City} from '../types/offer';
import {Map, TileLayer} from 'leaflet';
import {COPYRIGHT_MAP, LAYER_URL} from '../const';

const layerUrl =  LAYER_URL;
const copyright = COPYRIGHT_MAP;

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const { latitude, longitude, zoom } = city.location;

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
  }, [mapRef, city, map ]);

  return map;
}

export default useMap;
