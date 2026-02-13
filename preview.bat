@echo off
set PORT=%1
if "%PORT%"=="" set PORT=8000

python -m http.server %PORT% 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo Python not found — trying Node serve.js
  if exist serve.js (
    node serve.js %PORT%
  ) else (
    echo No server available. Install Python or Node, or open index.html directly.
  )
)
