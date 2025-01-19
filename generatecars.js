const generateCarData = (id) => {
  // Mapování značek na modely
  const brandsAndModels = {
    "Škoda": ["Octavia", "Fabia", "Superb", "Kodiaq", "Rapid"],
    "Volkswagen": ["Golf", "Passat", "Tiguan", "Polo", "Arteon"],
    "Hyundai": ["i30", "Tucson", "Kona", "i20", "Santa Fe"],
    "BMW": ["3 Series", "X5", "X3", "5 Series", "i8"],
    "Toyota": ["Corolla", "Yaris", "RAV4", "Land Cruiser", "Camry"],
    "Ford": ["Focus", "Mondeo", "Fiesta", "Kuga", "Edge"],
    "Audi": ["A4", "A6", "Q5", "Q7", "A3"],
    "Mercedes": ["A-Class", "C-Class", "E-Class", "S-Class", "GLC"],
    "Honda": ["Civic", "CR-V", "Accord", "Jazz", "HR-V"],
    "Peugeot": ["208", "308", "3008", "5008", "508"],
    "Kia": ["Ceed", "Sportage", "Picanto", "Niro", "Seltos"],
    "Nissan": ["Qashqai", "X-Trail", "Leaf", "Juke", "Murano"],
    "Renault": ["Clio", "Megane", "Captur", "Koleos", "Kadjar"],
    "Opel": ["Astra", "Insignia", "Corsa", "Mokka", "Grandland"],
    "Mazda": ["CX-5", "Mazda 6", "Mazda 3", "MX-5", "CX-3"],
    "Seat": ["Leon", "Ateca", "Ibiza", "Tarraco", "Arona"],
    "Citroën": ["C4", "C3", "C5 Aircross", "Berlingo", "C1"],
    "Fiat": ["Panda", "500", "Tipo", "Doblo", "500X"],
    "Dacia": ["Duster", "Spring", "Lodgy", "Dokker", "Sandero"],
    "Mitsubishi": ["Outlander", "ASX", "L200", "Eclipse Cross", "Pajero"],
    "Alfa Romeo": ["Giulia", "Stelvio", "Giulietta", "4C", "MiTo"],
    "Land Rover": ["Discovery", "Range Rover", "Defender", "Evoque", "Velar"],
    "Jaguar": ["F-Type", "XE", "XF", "XJ", "I-Pace"],
    "Porsche": ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
    "Tesla": ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
    "Chrysler": ["300C", "Voyager", "Pacifica", "Aspen", "Town & Country"],
    "Volvo": ["XC90", "XC60", "S60", "V60", "XC40"],
    "Suzuki": ["Swift", "Vitara", "Ignis", "S-Cross", "Baleno"],
    "Subaru": ["Outback", "Forester", "Impreza", "XV", "Legacy"],
    "Jeep": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Renegade"],
    "Lexus": ["RX", "NX", "ES", "LX", "IS"],
    "Mini": ["Cooper", "Countryman", "Clubman", "Paceman", "Roadster"],
    "Bentley": ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne", "Azure"],
    "Ferrari": ["488", "Portofino", "F8 Tributo", "Roma", "LaFerrari"],
    "McLaren": ["720S", "570S", "P1", "Artura", "Senna"],
    "Aston Martin": ["DB11", "Vantage", "DBX", "Rapide", "One-77"],
    "Bugatti": ["Chiron", "Veyron", "Divo", "Centodieci", "EB110"]
  };

  const fuelTypes = ["diesel", "benzín", "elektrické", "hybridní", "LPG"];
  const bodyTypes = ["sedan", "hatchback", "SUV", "kabriolet", "terénní vozidlo"];
  const transmissionTypes = ["manuál", "automat"];
  const pohonTypes = ["přední", "zadní", "4x4"];
  const prices = [300000, 350000, 400000, 450000, 500000, 550000, 600000, 700000, 800000, 900000, 1000000];

  // Výběr značky a modelu
  const brand = Object.keys(brandsAndModels)[Math.floor(Math.random() * Object.keys(brandsAndModels).length)];
  const model = brandsAndModels[brand][Math.floor(Math.random() * brandsAndModels[brand].length)];
  const fuel = fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
  const bodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
  const transmission = transmissionTypes[Math.floor(Math.random() * transmissionTypes.length)];
  const pohon = pohonTypes[Math.floor(Math.random() * pohonTypes.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const year = 2010 + Math.floor(Math.random() * 11);  // Rok výroby

  // Vytvoření dat pro auto
  return {
    znacka: brand,
    model: model,
    cena: price,
    rok_vyroby: year,
    pohon: pohon,
    palivo: fuel,
    karoserie: bodyType,
    prevodovka: transmission,
  };
};

module.exports = { generateCarData };
