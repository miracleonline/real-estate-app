import React from 'react';
import placeholder from '../assets/placeholder.jpg';

interface Apartment {
  id: number;
  area: string;
  type: string;
  rooms: number;
}

interface ApartmentDetailProps {
  data: Apartment;
  onBack: () => void;
}

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({ data, onBack }) => {
  return (
    <div className="detail-view">
      <button onClick={onBack}>← Back</button>
      <img src={placeholder} alt="Full Layout" />
      <h3>Apartment Details</h3>
      <p>Area: {data.area}</p>
      <p>Type: {data.type}</p>
      <p>Rooms: {data.rooms}</p>
    </div>
  );
};

export default ApartmentDetail;
