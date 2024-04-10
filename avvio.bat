rem File per avviare i server e lanciare l'applicazione

@echo off

rem Avvia npm start nella cartella backend in modo asincrono
start cmd /c "cd backend && npm i && node server.js"

rem Avvia npm run dev nella cartella frontend
start cmd /c "cd frontend && npm i && npm run dev"

rem Tornare alla cartella precedente
cd ..
