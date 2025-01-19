const { createClient } = require('@supabase/supabase-js');
const { generateCarData } = require('./generateCars'); // Import funkce z generateCars.js

// Konfigurace klienta Supabase
const supabaseUrl = 'https://uuolxxnaefxdnbantftz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1b2x4eG5hZWZ4ZG5iYW50ZnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODE3MDUsImV4cCI6MjA0OTc1NzcwNX0.NhmZiviwOPCH7iveksEa3E4JM3t2LoryWlIrTdvJ_2I';  // Doporučuji změnit tuto hodnotu na environmentální proměnnou
const supabase = createClient(supabaseUrl, supabaseKey);

// Funkce pro nahrání aut do Supabase
const insertCarsToSupabase = async () => {
  const cars = [];
  for (let i = 1; i <= 1000; i++) {
    let carData = generateCarData(i);

    // Nepřiřazujeme obrázek, tento řádek byl odstraněn
    // carData.image_url = imageUrls[i % imageUrls.length];

    cars.push(carData); // Přidání auta do pole
  }

  // Rozdělení na dávky po 100 autech
  const batchSize = 100;
  for (let i = 0; i < cars.length; i += batchSize) {
    const batch = cars.slice(i, i + batchSize);

    try {
      // Nahrání do Supabase
      const { data, error } = await supabase
        .from('cars') // Název tabulky v Supabase
        .insert(batch);

      if (error) {
        throw error;
      }

      console.log(`Úspěšně nahráno ${batch.length} aut.`);
    } catch (error) {
      console.error('Chyba při nahrávání dat do Supabase:', error);
      return;
    }
  }

  console.log('Auta byla úspěšně nahrána do Supabase!');
};

// Spuštění funkce pro nahrání dat
insertCarsToSupabase();
