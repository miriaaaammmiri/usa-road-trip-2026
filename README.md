# 🇺🇸 USA Road Trip 2026

App di viaggio per il road trip negli Stati Uniti — 17–29 Agosto 2026.

## Come deployare su Vercel

### 1. Ottieni la Google Maps API Key

1. Vai su [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuovo progetto (o usa uno esistente)
3. Vai su **APIs & Services → Library**
4. Abilita **Maps JavaScript API** e **Directions API**
5. Vai su **APIs & Services → Credentials**
6. Clicca **Create Credentials → API Key**
7. Copia la chiave

> 💡 Google offre $200 di credito gratuito al mese — più che sufficiente per uso personale.

### 2. Inserisci la API Key nell'app

Apri `index.html` e trova questa riga in fondo:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=Function.prototype"></script>
```

Sostituisci `YOUR_API_KEY` con la tua chiave.

### 3. Deploy su Vercel

**Opzione A — Via GitHub (consigliata):**
1. Crea un repo GitHub e carica i file
2. Vai su [vercel.com](https://vercel.com) → **Add New Project**
3. Importa il repo GitHub
4. Clicca **Deploy** — Vercel lo rileva automaticamente come sito statico

**Opzione B — Via Vercel CLI:**
```bash
npm i -g vercel
cd usa-road-trip
vercel
```

### Struttura del progetto

```
usa-road-trip/
├── index.html          # App completa
├── data/
│   └── tripData.js     # Tutti i dati del viaggio
└── README.md
```

## Funzionalità

- 📅 **Itinerario** — 14 giorni con tappe, orari, hotel e avvisi
- 🗺️ **Mappa** — Percorso completo in azzurro con Google Maps
- 🎟️ **Escursioni** — Dettagli e stato pagamento
- ✅ **Checklist** — Da fare prima della partenza
- 💰 **Costi** — Riepilogo completo delle spese
- 👥 **Gruppo** — I 6 partecipanti e le 2 auto

## Condividi l'app

Una volta su Vercel, condividi il link con tutto il gruppo:
- Miri, Thomas, Daniele, Nicola, Vittorio, Zia Lucia
