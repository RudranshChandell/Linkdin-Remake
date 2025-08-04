@echo off
echo Setting up LinkedIn Remake Project...
echo.

echo Installing backend dependencies...
cd Server
npm install
echo Backend dependencies installed!
echo.

echo Installing frontend dependencies...
cd ..\client
npm install
echo Frontend dependencies installed!
echo.

echo Setup complete!
echo.
echo To start the application:
echo 1. Open a terminal and run: cd Server && npm run dev
echo 2. Open another terminal and run: cd client && npm run dev
echo.
echo The application will be available at:
echo - Frontend: http://localhost:3000
echo - Backend: http://localhost:5000
echo.
echo Demo accounts:
echo - Email: john@demo.com, Password: password
echo - Email: jane@demo.com, Password: password
pause 