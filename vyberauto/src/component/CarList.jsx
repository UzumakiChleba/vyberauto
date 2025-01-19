import React, { useState, useEffect } from 'react';
import "../CSSstyly/CarList.css";
import { fetchCarData } from '../supabaseClient'; // Import funkce pro načítání dat

const CarList = () => {
  const [cars, setCars] = useState([]); // Skladování aut
  const [loading, setLoading] = useState(true); // Stav načítání
  const [currentPage, setCurrentPage] = useState(1); // Aktuální stránka
  const [totalCars, setTotalCars] = useState(0); // Celkový počet aut
  const carsPerPage = 36; // Počet aut na jednu stránku

  // Funkce pro získání URL obrázku na základě značky a modelu
  const fetchCarImage = async (brand, model) => {

    /*const url = `https://api.unsplash.com/search/photos?query=${brand} ${model}&client_id=-b3EU8rhH6mYfx_xuYHOU0SP5ENiBt6RERU68QIfcwg`;*/
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].urls.small; // Vrátí URL prvního obrázku
      } else {
        return 'default-image-url'; // Vrátí výchozí obrázek, pokud není k dispozici
      }
    } catch (error) {
      console.error('Chyba při získávání obrázku:', error);
      return 'default-image-url'; // Vrátí výchozí obrázek v případě chyby
    }
  };

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCarData(currentPage, carsPerPage); // Načítání aut podle stránky
        if (data.cars) {
          // Pro každé auto přidáme obrázek
          const carsWithImages = await Promise.all(data.cars.map(async (car) => {
            const imageUrl = await fetchCarImage(car.znacka, car.model);
            return { ...car, image_url: imageUrl }; 
          }));
          
          setCars(carsWithImages);
          setTotalCars(data.total); // Uložení celkového počtu aut pro stránkování
        }
      } catch (error) {
        console.error('Chyba při načítání dat:', error);
      } finally {
        setLoading(false); // Nastavení načítání na false po získání dat
      }
    };

    loadCars(); // Volání funkce pro načítání aut při změně stránky
  }, [currentPage]); // Načítání při každé změně stránky

  // Funkce pro přechod na předchozí stránku
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Funkce pro přechod na další stránku
  const nextPage = () => {
    if (currentPage * carsPerPage < totalCars) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Funkce pro přechod na první stránku
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  if (loading) {
    return <div>Načítání aut...</div>;
  }

  if (!cars.length) {
    return <div>Žádná auta nebyla nalezena.</div>;
  }

  return (
    <div>
      <div className="car-card-container">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img
              src={car.image_url} // Dynamický obrázek auta
              alt={`${car.znacka} ${car.model}`} // Zobrazení značky a modelu v alt textu
              className="car-image"
            />
            <div className="car-details">
              {/* Zobrazení značky a modelu */}
              <h3>{car.znacka} {car.model}</h3> 
              
              {/* Zobrazení roku výroby */}
              <p>Rok výroby: {car.rok_vyroby}</p>

              {/* Zobrazení typu paliva */}
              <p>Palivo: {car.palivo}</p>

              {/* Cena auta */}
              <p className="price">Cena: {car.cena} Kč</p>  
            </div>
          </div>
        ))}
      </div>

      {/* Tlačítka pro přechod mezi stránkami */}
      <div className="pagination">
        <button onClick={goToFirstPage} disabled={currentPage === 1} className="pagination-btn">První</button>
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">Předchozí</button>
        <span>Strana {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage * carsPerPage >= totalCars} className="pagination-btn">Další</button>
      </div>
    </div>
  );
};

export default CarList;
