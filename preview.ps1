param(
  [int]$Port = 8000
)

# Try Python 3 http.server first
try {
  & python -m http.server $Port
} catch {
  Write-Host "Python not found. Trying Node (serve.js)..."
  if (Test-Path .\serve.js) {
    node .\serve.js $Port
  } else {
    Write-Error "No server available. Install Python or Node, or open index.html directly."
  }
}
