import React, { useState } from 'react';
import '../CSSstyly/Filtr.css';

const Filtr = ({ onFilterChange }) => {
  // Stav pro ovládání viditelnosti filtru
  const [isFilterVisible, setIsFilterVisible] = useState(true); 

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible); 
  };

  const [znacka, setZnacka] = useState('');
  const [model, setModel] = useState('');
  const [rokOd, setRokOd] = useState('');
  const [rokDo, setRokDo] = useState('');
  const [najetoOd, setNajetoOd] = useState('');
  const [najetoDo, setNajetoDo] = useState('');
  const [cenaOd, setCenaOd] = useState('');
  const [cenaDo, setCenaDo] = useState('');
  const [palivo, setPalivo] = useState('');
  const [karoserie, setKaroserie] = useState('');
  const [prevodovka, setPrevodovka] = useState('');
  const [pohon4x4, setPohon4x4] = useState(false);
  const [kategorie, setKategorie] = useState('');

  const handleSearch = () => {
    const filters = {
      znacka,
      model,
      rokOd,
      rokDo,
      najetoOd,
      najetoDo,
      cenaOd,
      cenaDo,
      palivo,
      karoserie,
      prevodovka,
      pohon4x4,
      kategorie,
    };
    onFilterChange(filters); 
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.type === 'checkbox' ? e.target.checked : e.target.value); 
  };

  return (
    <div className="filtr-panel">
      <h3>
        Filtrovat podle
        <span 
          className={`arrow-icon ${isFilterVisible ? '' : 'rotate'}`} 
          onClick={toggleFilterVisibility}
        >
          &#x2193;
        </span>
      </h3>
      
      {/* Panel filtru */}
      <div className="filtr-skupina" style={{ display: isFilterVisible ? 'block' : 'none' }}>
        <label>Značka</label>
        <select value={znacka} onChange={handleInputChange(setZnacka)}>
          <option value="">Značka</option>
        </select>

        <label>Model</label>
        <select value={model} onChange={handleInputChange(setModel)}>
          <option value="">Model</option>
        </select>

        <label>Rok od</label>
        <input type="number" placeholder="Od" value={rokOd} onChange={handleInputChange(setRokOd)} />
        <label>Rok do</label>
        <input type="number" placeholder="Do" value={rokDo} onChange={handleInputChange(setRokDo)} />

        <label>Najeto od (km)</label>
        <input type="number" placeholder="Od" value={najetoOd} onChange={handleInputChange(setNajetoOd)} />
        <label>Najeto do (km)</label>
        <input type="number" placeholder="Do" value={najetoDo} onChange={handleInputChange(setNajetoDo)} />

        <label>Cena od</label>
        <input type="number" placeholder="Od" value={cenaOd} onChange={handleInputChange(setCenaOd)} />
        <label>Cena do</label>
        <input type="number" placeholder="Do" value={cenaDo} onChange={handleInputChange(setCenaDo)} />

        <label>Palivo</label>
        <select value={palivo} onChange={handleInputChange(setPalivo)}>
          <option value="">Palivo</option>
        </select>

        <label>Karoserie</label>
        <select value={karoserie} onChange={handleInputChange(setKaroserie)}>
          <option value="">Karoserie</option>
        </select>

        <label>Převodovka</label>
        <select value={prevodovka} onChange={handleInputChange(setPrevodovka)}>
          <option value="">Převodovka</option>
        </select>

        <label>
          <input type="checkbox" checked={pohon4x4} onChange={handleInputChange(setPohon4x4)} />
          Pohon 4x4
        </label>

        <label>Kategorie</label>
        <select value={kategorie} onChange={handleInputChange(setKategorie)}>
          <option value="">Kategorie</option>
        </select>

        <button className="vyhledat-tlacitko" onClick={handleSearch}>Vyhledat</button>
      </div>
    </div>
  );
};

export default Filtr;
