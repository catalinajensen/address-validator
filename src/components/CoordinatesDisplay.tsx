import { FC } from 'react';
import './CoordinatesDisplay.css';

interface IProps {
  latitude: number;
  longitude: number;
}

const CoordinatesDisplay: FC<IProps> = ({ latitude, longitude }) => {
  return (
    <div className="coordinates-container">
      {latitude && <div className="coordinates">Latitude: {latitude}</div>}
      {longitude && <div className="coordinates">Longitude: {longitude}</div>}

      {!latitude && !longitude && (
        <div>
          <b>Valid address</b> with no coordinates available
        </div>
      )}
    </div>
  );
};

export default CoordinatesDisplay;
