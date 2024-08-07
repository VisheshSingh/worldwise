import React from 'react';
import styles from './Map.module.css';
import { useSearchParams } from 'react-router-dom';

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      Map
      <h1>
        Position: {lat} {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 25, lng: 24 })}>
        Change Pos
      </button>
    </div>
  );
};

export default Map;
