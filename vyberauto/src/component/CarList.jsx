import React from 'react';
import "../CSSstyly/CarList.css"; 

const CarList = () => {
  return (
    <div className="car-card-container">
      <div className="car-card">
        <img 
          src="https://www.skodovky.cz/files/cars/786296501/950_713_e/786296501-1.jpg?1711658547" 
          alt="Škoda Kodiaq" 
          className="car-image" 
        />
        <h3>Škoda Kodiaq</h3>
        <p>Rok: 2017</p>
        <p>Motor: 2.0 TDI</p>
        <p>Cena: 500 000 Kč</p>
      </div>
      <div className="car-card">
        <img 
          src="https://aaaautoeuimg.vshcdn.net/thumb/900472989_640x480x95.jpg?95523" 
          alt="Škoda Superb" 
          className="car-image" 
        />
        <h3>Škoda Superb</h3>
        <p>Rok: 2019</p>
        <p>Motor: 2.0 TDI</p>
        <p>Cena: 440 000 Kč</p>
      </div>
      <div className="car-card">
        <img 
          src="https://aaaautoeuimg.vshcdn.net/thumb/900455832_640x480x95.jpg?88675" 
          alt="Volkswagen Passat" 
          className="car-image" 
        />
        <h3>Volkswagen Passat</h3>
        <p>Rok: 2020</p>
        <p>Motor: 2.0 TDI</p>
        <p>Cena: 425 000 Kč</p>
      </div>
    </div>
  );
};

export default CarList;
