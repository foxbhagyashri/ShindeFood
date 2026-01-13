@echo off
echo ========================================
echo Shinde Foods - Email Setup Helper
echo ========================================
echo.
echo Current Status: Email NOT configured
echo.
echo To enable the contact form email feature:
echo.
echo STEP 1: Enable 2-Step Verification
echo   - Open: https://myaccount.google.com/security
echo   - Enable "2-Step Verification"
echo.
echo STEP 2: Generate App Password
echo   - Open: https://myaccount.google.com/apppasswords
echo   - Select "Mail" and "Other (Custom)"
echo   - Name it: "Shinde Foods Contact"
echo   - Click Generate
echo   - COPY the 16-character password
echo.
echo STEP 3: Update .env file
echo   - Open: backend\.env
echo   - Replace "REPLACE_WITH_16_CHAR_APP_PASSWORD"
echo   - Paste your 16-char app password (no spaces)
echo.
echo STEP 4: Restart Backend Server
echo   - Press Ctrl+C in the backend terminal
echo   - Run: npm run dev
echo.
echo ========================================
echo.
echo Would you like to open the App Password page?
echo.
choice /C YN /M "Open browser now"
if errorlevel 2 goto :end
if errorlevel 1 goto :openbrowser

:openbrowser
start https://myaccount.google.com/apppasswords
echo.
echo Browser opened. Follow the steps above.
echo.

:end
echo.
echo After setup, test the contact form on your website.
echo.
pause
