export const days = [
  {
    n: 1, date: "Domenica 17 Agosto", title: "LAX → Pismo Beach",
    drive: "~3 ore di guida", hotel: "Ocean Palms Motel, Pismo Beach", special: false,
    items: [
      { icon: "✈️", text: "Decollo da Milano Linate ore 07:25 (volo BA0581)" },
      { icon: "🔗", text: "Scalo Londra Heathrow Terminal 5 · 11:40 → LAX (AY5469)" },
      { icon: "🛬", text: "Arrivo LAX ore 14:55 (ora locale) — calcola ~3h per uscire" },
      { icon: "🚗", text: "Ritiro auto ore ~18:00 · Volvo XC40 (Hertz Burbank) + Toyota RAV4 (Avis LAX)" },
      { icon: "🌊", text: "Pismo Pier e tramonto sull'oceano, cena" },
    ], warning: null, info: null
  },
  {
    n: 2, date: "Lunedì 18 Agosto", title: "Pismo Beach → San Francisco",
    drive: "~4 ore di guida", hotel: "Nob Hill Hotel, San Francisco", special: false,
    items: [
      { icon: "⏰", text: "Partenza ore 07:30" },
      { icon: "🌉", text: "Arrivo San Francisco ore ~11:30 · pranzo" },
      { icon: "⛓️", text: "Alcatraz Tour ore 14:30 · 6 adulti · 82€ cad · durata 3h", paid: false },
      { icon: "🌁", text: "Golden Gate Bridge ore ~17:30–18:00 · cena" },
    ], warning: null, info: null
  },
  {
    n: 3, date: "Martedì 19 Agosto", title: "San Francisco → Sequoia NP → Kernville",
    drive: "~7 ore di guida (giornata intensa!)", hotel: "Quiet Mind Lodge, Kernville", special: false,
    items: [
      { icon: "⏰", text: "Partenza ore 07:00 (anticipata per avere più tempo a Sequoia)" },
      { icon: "🌲", text: "Sequoia National Park: giro panoramico (General Sherman Tree ecc.)" },
      { icon: "🏕️", text: "Arrivo a Kernville in serata" },
    ],
    warning: "Giornata di guida molto lunga. SF → Sequoia = ~4h, poi Sequoia → Kernville = ~1.5h. Partenza anticipata alle 7:00!",
    info: null
  },
  {
    n: 4, date: "Mercoledì 20 Agosto", title: "Kernville → Death Valley → Las Vegas",
    drive: "~5h30 di guida", hotel: "SAHARA Las Vegas", special: false,
    items: [
      { icon: "⏰", text: "Partenza ore 08:00" },
      { icon: "🏜️", text: "Death Valley: Badwater Basin, Zabriskie Point" },
      { icon: "🛸", text: "Zona Beatty / Area 51 (Extraterrestrial Highway)" },
      { icon: "🎰", text: "Arrivo Las Vegas in serata" },
    ], warning: null, info: null
  },
  {
    n: 5, date: "Giovedì 21 Agosto", title: "Las Vegas",
    drive: "Giorno libero in città", hotel: "SAHARA Las Vegas", special: false,
    items: [
      { icon: "🌅", text: "Mattinata libera" },
      { icon: "🏊", text: "Pranzo e piscina all'hotel" },
      { icon: "🔮", text: "The Sphere — The Wizard of Oz ore 14:00 · 4+2 biglietti · Sez. 405, Fila 12", paid: true },
      { icon: "🎲", text: "Serata libera sul Strip" },
    ], warning: null, info: null
  },
  {
    n: 6, date: "Venerdì 22 Agosto", title: "Las Vegas → Bryce Canyon → Monument Valley",
    drive: "~7.5–8 ore di guida totali", hotel: "Wetherill Inn, Kayenta", special: false,
    items: [
      { icon: "⏰", text: "Partenza ore 06:00 (obbligatorio — giornata lunghissima)" },
      { icon: "🏔️", text: "Bryce Canyon National Park: Bryce Point, Sunset Point — non indugiare troppo" },
      { icon: "🗿", text: "Monument Valley: panoramica dei Mittens e Merrick Butte" },
    ],
    warning: "⚠️ Giornata più dura del viaggio: LV→Bryce ~4h + Bryce→Kayenta ~3.5h + soste = oltre 8h di guida. Antelope Canyon il 23 alle 9:00 è inamovibile.",
    info: null
  },
  {
    n: 7, date: "Sabato 23 Agosto", title: "Kayenta → Antelope Canyon → Horseshoe Bend → Grand Canyon → Seligman",
    drive: "~7 ore di guida totali", hotel: "Supai Motel, Seligman", special: false,
    items: [
      { icon: "⏰", text: "Partenza ore 07:15" },
      { icon: "🏜️", text: "Lower Antelope Canyon ore 09:00 · tour guidato Navajo · 6 adulti · già pagato ✓", paid: true },
      { icon: "🎣", text: "Horseshoe Bend — 15 min da Antelope, sosta ~1h" },
      { icon: "🏞️", text: "Grand Canyon South Rim: Mather Point e Yavapai Point — sosta ~2h" },
      { icon: "🛣️", text: "Route 66 e arrivo a Seligman" },
    ], warning: null, info: "Giornata impegnativa ma ben strutturata geograficamente. Non rilassarti troppo a ogni sosta."
  },
  {
    n: 8, date: "Domenica 24 Agosto", title: "Seligman → San Diego (via Route 66)",
    drive: "~7 ore con soste", hotel: "Uptown Inn, San Diego", special: false,
    items: [
      { icon: "⏰", text: "Partenza ore 07:00" },
      { icon: "🏚️", text: "Amboy — Roy's Motel & Café: insegna al neon anni '50, simbolo della Route 66" },
      { icon: "🛣️", text: "Barstow — Route 66 Mother Road Museum e murales sulla Main Street" },
      { icon: "🌵", text: "Bottle Tree Ranch (Oro Grande) — una delle attrazioni più stravaganti della Mother Road" },
      { icon: "🌊", text: "Arrivo San Diego in serata" },
    ], warning: null, info: null
  },
  {
    n: 9, date: "Lunedì 25 Agosto", title: "San Diego",
    drive: "Giorno libero in città", hotel: "Uptown Inn, San Diego", special: false,
    items: [
      { icon: "🌳", text: "Balboa Park (musei, giardini)" },
      { icon: "🦭", text: "La Jolla Cove (leoni marini)" },
      { icon: "🍸", text: "Gaslamp Quarter la sera" },
    ], warning: null, info: null
  },
  {
    n: 10, date: "Martedì 26 Agosto", title: "San Diego → Poway → Los Angeles",
    drive: "~2.5 ore di guida", hotel: "Hilton Los Angeles Airport", special: true,
    items: [
      { icon: "⏰", text: "Partenza ore 08:00" },
      { icon: "🎸", text: "Poway — città natale dei Blink-182: Poway High School e Sombrero Restaurant (citato in 'Josie')", special: true },
      { icon: "🍔", text: "Pranzo a Los Angeles ore ~11:30" },
      { icon: "🎥", text: "Warner Bros. Studio Tour Hollywood ore 14:30 · 4 adulti · già pagato ✓ · ~3h", paid: true },
      { icon: "🌅", text: "Aperitivo / cena a Santa Monica" },
    ],
    warning: null,
    info: "🎵 Blink-182 si sono formati nel 1992 proprio a Poway! Tom DeLonge e Mark Hoppus frequentavano la Poway High School. Il Sombrero è il ristorante citato nella canzone 'Josie'."
  },
  {
    n: 11, date: "Mercoledì 27 Agosto", title: "Los Angeles — Hollywood & Beverly Hills",
    drive: "Giorno in città", hotel: "Hilton Los Angeles Airport", special: false,
    items: [
      { icon: "⏰", text: "Ore 09:00 — Hollywood Walk of Fame" },
      { icon: "🔭", text: "Ore 11:00 — Griffith Observatory: vista su tutta LA e sull'Hollywood Sign" },
      { icon: "🌮", text: "Pranzo a Los Feliz / Silver Lake" },
      { icon: "💎", text: "Ore 15:00 — Beverly Hills e Rodeo Drive" },
      { icon: "🍹", text: "Aperitivo / cena a West Hollywood — Sunset Strip" },
    ],
    warning: null,
    info: "Hollywood Walk of Fame e Griffith Observatory sono nella stessa zona — conviene fare entrambi al mattino prima che faccia troppo caldo."
  },
  {
    n: 12, date: "Giovedì 28 Agosto", title: "Los Angeles — Venice Beach & Santa Monica",
    drive: "Giornata in spiaggia 🌊", hotel: "Hilton Los Angeles Airport", special: false,
    items: [
      { icon: "⏰", text: "Ore 09:00 — Venice Beach: boardwalk, skate park, buskers, campi di basket" },
      { icon: "🚶", text: "Passeggiata sul lungomare fino a Santa Monica (~20 min a piedi)" },
      { icon: "🏖️", text: "Bagno e relax sulla spiaggia di Santa Monica" },
      { icon: "🍹", text: "Pranzo in un chiosco o ristorante sul lungomare" },
      { icon: "🎡", text: "Pomeriggio: Santa Monica Pier — ruota panoramica, tramonto sul Pacifico" },
      { icon: "🌅", text: "Ultimo tramonto californiano sull'oceano 🌅" },
    ],
    warning: null,
    info: "È l'ultimo giorno pieno prima del volo — godetevi la spiaggia senza fretta. Domani si parte."
  },
  {
    n: 13, date: "Venerdì 29 Agosto", title: "Los Angeles → Volo di rientro",
    drive: "Ultimo giorno", hotel: "—", special: false,
    items: [
      { icon: "🌅", text: "Mattina libera" },
      { icon: "⏰", text: "Partenza per LAX ore 13:00" },
      { icon: "🚗", text: "Restituzione auto e check-in" },
      { icon: "✈️", text: "Volo AY3782 LAX → Londra ore 16:20 (arr. +1 alle 10:50)" },
    ], warning: null, info: null
  },
  {
    n: 14, date: "Sabato 30 Agosto", title: "Londra → Milano Linate",
    drive: "Rientro", hotel: "—", special: false,
    items: [
      { icon: "🏠", text: "Arrivo a Londra alle 10:50" },
      { icon: "🍽️", text: "Pranzo in aeroporto" },
      { icon: "✈️", text: "Volo BA7305 da London City ore 15:45 → Milano Linate 18:40" },
    ], warning: null, info: null
  },
];

export const excursions = [
  {
    name: "Alcatraz Tour",
    date: "Lunedì 18 Agosto · ore 14:30",
    persons: "6 adulti", price: "€ 492", priceUnit: "82€ × 6",
    duration: "~3 ore", paid: false,
    note: "Traghetto da Pier 33 incluso. Biglietti ancora da pagare — verifica disponibilità.",
    color: "#4A90C4"
  },
  {
    name: "The Sphere — Wizard of Oz",
    date: "Giovedì 21 Agosto · ore 14:00",
    persons: "6 biglietti (4 + 2 sep.)", price: "~€ 588", priceUnit: "98€ × 6",
    duration: "~1h30", paid: true,
    note: "Sezione 405, Fila 12, Posti 27–30. Order #29-39650/NEV. Due prenotazioni separate.",
    color: "#E8A020"
  },
  {
    name: "Lower Antelope Canyon",
    date: "Sabato 23 Agosto · ore 09:00",
    persons: "6 adulti", price: "€ 516", priceUnit: "86€ × 6",
    duration: "~1 ora", paid: true,
    note: "Tour guidato Navajo — già prenotato e pagato ✓. Punto di incontro: Page, Arizona.",
    color: "#C4441C"
  },
  {
    name: "Warner Bros. Studio Tour",
    date: "Martedì 26 Agosto · ore 14:30",
    persons: "4 adulti", price: "€ 260", priceUnit: "65€ × 4",
    duration: "~3 ore", paid: true,
    note: "Hollywood. Prenotato per 4 persone — verificare se Zia Lucia e Vittorio vogliono aggiungere biglietti.",
    color: "#2D5A27"
  },
];

export const checklistData = {
  "Prima della partenza": [
    { text: "Acquistare ESTA (Electronic System for Travel Authorization)" },
    { text: "Acquistare assicurazione di viaggio" },
    { text: "America The Beautiful Pass (parchi nazionali)" },
    { text: "Pagare Alcatraz (biglietti da confermare)" },
    { text: "Check-in online volo Finnair (apre 36h prima)" },
    { text: "Scaricare app offline mappe (Google Maps / Maps.me)" },
    { text: "Valuta: cambiare qualche dollaro o caricare carta multi-valuta" },
    { text: "Comunicare numero di prenotazione hotel al gruppo" },
    { text: "Verificare patente internazionale per guida USA" },
  ],
  "Cosa portare": [
    { text: "Passaporto valido (+ fotocopia)" },
    { text: "Patente di guida originale" },
    { text: "Adattatore prese elettriche USA (tipo A/B)" },
    { text: "Crema solare alta protezione" },
    { text: "Scarpe da trekking (Sequoia, Grand Canyon, Horseshoe Bend)" },
    { text: "Giacca leggera (Death Valley di notte, Grand Canyon)" },
    { text: "Bottiglia acqua riutilizzabile" },
    { text: "Powerbank caricabatterie" },
    { text: "Costume da bagno (Venice Beach, Santa Monica, Pismo Beach)" },
  ],
  "Durante il viaggio": [
    { text: "Attivare roaming o SIM USA" },
    { text: "Controllare orari Antelope Canyon la mattina del 23" },
    { text: "Cena — prenotazione consigliata a San Francisco" },
  ]
};

export const costs = {
  voli: [{ name: "Voli andata e ritorno", sub: "Finnair · ref. 9BHOMW · 1 biglietto Nicola", amount: "€ 852" }],
  hotel: [
    { name: "Ocean Palms Motel", sub: "Pismo Beach · 17–18 agosto", amount: "€ 341" },
    { name: "Nob Hill Hotel ×2", sub: "San Francisco · 18–19 agosto", amount: "€ 469" },
    { name: "Quiet Mind Lodge ×3", sub: "Kernville · 19–20 agosto", amount: "€ 409" },
    { name: "SAHARA Las Vegas", sub: "Las Vegas · 20–22 agosto", amount: "€ 538" },
    { name: "Wetherill Inn ×2", sub: "Kayenta · 22–23 agosto", amount: "€ 374" },
    { name: "Supai Motel ×2", sub: "Seligman · 23–24 agosto", amount: "€ 262" },
    { name: "Uptown Inn ×2", sub: "San Diego · 24–26 agosto", amount: "€ 378" },
    { name: "Hilton LAX ×2", sub: "Los Angeles · 26–29 agosto", amount: "€ 1.123" },
  ],
  auto: [
    { name: "Volvo XC40 o simili", sub: "Hertz · Burbank · 17–29 agosto", amount: "€ 397" },
    { name: "Toyota RAV4 o simili", sub: "Avis · Los Angeles · 17–29 agosto", amount: "€ 670" },
  ],
  escursioni: [
    { name: "Alcatraz Tour ×6", sub: "82€ × 6 — da pagare", amount: "€ 492" },
    { name: "The Sphere Wizard of Oz", sub: "98€ × 6 — pagato ✓", amount: "~€ 588" },
    { name: "Antelope Canyon ×6", sub: "86€ × 6 — pagato ✓", amount: "€ 516" },
    { name: "Warner Bros. ×4", sub: "65€ × 4 — pagato ✓", amount: "€ 260" },
  ],
  dafare: [
    { name: "ESTA ×6", sub: "~21 USD a persona", amount: "~€ 120" },
    { name: "America The Beautiful Pass", sub: "Accesso parchi illimitato · 80 USD", amount: "~€ 75" },
    { name: "Assicurazione viaggio ×6", sub: "Da quotare", amount: "TBD" },
  ]
};

export const gruppo = [
  { initials: "MI", name: "Miri", role: "Organizzatrice del viaggio", tag: "★ Trip planner", color: "#C4441C" },
  { initials: "TH", name: "Thomas", role: "Moroso di Miri", tag: "🎸 Blink-182 fan", color: "#4A90C4" },
  { initials: "DA", name: "Daniele", role: "Amico di Thomas", tag: "", color: "#2D5A27" },
  { initials: "NI", name: "Nicola", role: "Cugino di Daniele", tag: "", color: "#6A4A90" },
  { initials: "VI", name: "Vittorio", role: "Cugino di Miri", tag: "", color: "#B07830" },
  { initials: "LU", name: "Zia Lucia", role: "Zia di Miri", tag: "", color: "#C4447A" },
];

// Waypoints for the route in order
export const mapWaypoints = [
  { lat: 33.9425, lng: -118.4081, label: "LAX", day: 1 },
  { lat: 35.1383, lng: -120.6445, label: "Pismo Beach", day: 1 },
  { lat: 37.7749, lng: -122.4194, label: "San Francisco", day: 2 },
  { lat: 36.4864, lng: -118.5658, label: "Sequoia NP", day: 3 },
  { lat: 35.6559, lng: -118.4724, label: "Kernville", day: 3 },
  { lat: 36.2461, lng: -116.8185, label: "Death Valley", day: 4 },
  { lat: 36.1699, lng: -115.1398, label: "Las Vegas", day: 4 },
  { lat: 37.5930, lng: -112.1871, label: "Bryce Canyon", day: 6 },
  { lat: 36.9821, lng: -110.1119, label: "Monument Valley", day: 6 },
  { lat: 36.8619, lng: -111.3743, label: "Antelope Canyon", day: 7 },
  { lat: 36.8769, lng: -111.5057, label: "Horseshoe Bend", day: 7 },
  { lat: 36.0544, lng: -112.1401, label: "Grand Canyon", day: 7 },
  { lat: 35.3267, lng: -112.8885, label: "Seligman", day: 7 },
  { lat: 32.7157, lng: -117.1611, label: "San Diego", day: 8 },
  { lat: 34.0522, lng: -118.2437, label: "Los Angeles", day: 10 },
];
