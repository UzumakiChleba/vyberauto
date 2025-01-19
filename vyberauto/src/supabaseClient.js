import { createClient } from '@supabase/supabase-js';

// Konfigurace klienta Supabase
const supabaseUrl = 'https://uuolxxnaefxdnbantftz.supabase.co'; // Nahraďte svou URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1b2x4eG5hZWZ4ZG5iYW50ZnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODE3MDUsImV4cCI6MjA0OTc1NzcwNX0.NhmZiviwOPCH7iveksEa3E4JM3t2LoryWlIrTdvJ_2I'; // Nahraďte svým klíčem

// Vytvoření klienta Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// Funkce pro načítání dat z tabulky `cars` s podporou stránkování
export async function fetchCarData(currentPage, carsPerPage) {
  const start = (currentPage - 1) * carsPerPage;
  const end = currentPage * carsPerPage - 1;

  // Načítání aut z tabulky 'cars' s počtem pro stránkování
  const { data, error, count } = await supabase
    .from('cars')
    .select('*', { count: 'exact' }) // Můžete přidat konkrétní sloupce místo '*', pokud chcete
    .range(start, end);  // Nastavení rozsahu pro stránkování

  if (error) {
    console.error('Chyba při načítání dat z tabulky cars:', error);
    return { cars: [], total: 0 };  // Vrací prázdná data v případě chyby
  }

  return { cars: data, total: count };  // Vrací auta a celkový počet záznamů
}
