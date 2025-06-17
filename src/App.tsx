import { useState } from 'react';
import TowerSelector from './components/TowerSelector';
import FloorSelector from './components/FloorSelector';
import ApartmentList from './components/ApartmentList';
import ApartmentDetail from './components/ApartmentDetail';
import './styles.css';

interface Apartment {
  id: number;
  area: string;
  type: string;
  rooms: number;
}

function App() {
  const [tower, setTower] = useState<string | null>(null);
  const [floor, setFloor] = useState<number | null>(null);
  const [apartment, setApartment] = useState<Apartment | null>(null);

  const reset = () => {
    setTower(null);
    setFloor(null);
    setApartment(null);
  };

  return (
    <div className="app">
      <h1>Mini Real Estate Selector</h1>
      {!tower && <TowerSelector onSelect={setTower} />}
      {tower && !floor && <FloorSelector tower={tower} onSelect={setFloor} />}
      {tower && floor && !apartment && (
        <ApartmentList onSelect={setApartment} />
      )}
      {apartment && (
        <ApartmentDetail data={apartment} onBack={() => setApartment(null)} />
      )}
      {(floor || tower) && <button onClick={reset}>🔁 Start Over</button>}
    </div>
  );
}

export default App;
