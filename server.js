const express = require("express");
const path = require("path");

const app = express();

// Railway gibt den Port über die Umgebungsvariable PORT vor.
// Lokal (auf deinem Rechner) wird 3000 verwendet.
const PORT = process.env.PORT || 3000;

// Liefert die Dateien aus dem Hauptverzeichnis aus (z. B. index.html).
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Kundenstatus läuft auf Port ${PORT}`);
});
