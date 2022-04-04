import { useRef, useEffect } from 'react';
import { Icon, Marker, TileLayer } from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  activeOffer: number;
  height: number;
};

const ICON = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const CURRENT_ICON = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, activeOffer, height }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => !(layer instanceof TileLayer) && map.removeLayer(layer));

      offers.forEach(({ id, location: { latitude, longitude } }) => {
        const marker = new Marker({ lat: latitude, lng: longitude });
        marker
          .setIcon(id === activeOffer ? CURRENT_ICON : ICON)
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (<div style={{ height: `${height}px` }} ref={mapRef}></div>);
}

export default Map;
