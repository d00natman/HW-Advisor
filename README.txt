Hero Wars Advisor PWA v0.6

Neu in dieser Version
- vollständig leerer Standardaccount
- sichtbarer Export-v1-Download als JSON-Datei
- optionale Exportvorschau
- komfortable Importdatei-Auswahl
- Formatprüfung für schemaVersion 1
- Import älterer roher Account-JSONs aus v0.2–v0.4
- optionaler Knopf zur Übernahme alter Browserdaten
- isolierter Speicher für v0.6, damit eine Neuinstallation wirklich leer beginnt
- IndexedDB und localStorage werden parallel verwendet

Benutzung
1. PWA über HTTPS oder localhost bereitstellen.
2. Im Account-Editor Daten eintragen oder eine Exportdatei importieren.
3. Unter „Import / Export“ regelmäßig „Export-v1-Datei herunterladen“ wählen.
4. Die JSON-Datei sicher aufbewahren, z. B. in Google Drive.
5. Auf einem neuen Gerät dieselbe PWA öffnen und die JSON-Datei über „Import aus Datei“ auswählen.

Test lokal
Im entpackten Ordner:
  python -m http.server 8080
Dann im Browser:
  http://localhost:8080
