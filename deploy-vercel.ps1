# Script de Deploy Automático para Vercel
# Execute: .\deploy-vercel.ps1

Write-Host "🚀 Iniciando deploy na Vercel..." -ForegroundColor Cyan

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na raiz do projeto" -ForegroundColor Red
    exit 1
}

# Verificar se o código está commitado
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  Há mudanças não commitadas. Fazendo commit automático..." -ForegroundColor Yellow
    git add .
    git commit -m "Preparar para deploy na Vercel"
    git push origin main
}

# Tentar deploy via CLI
Write-Host "📦 Tentando deploy via CLI da Vercel..." -ForegroundColor Cyan
try {
    npx vercel@latest --prod --yes
    Write-Host "✅ Deploy concluído com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Deploy via CLI falhou. Use a interface web:" -ForegroundColor Yellow
    Write-Host "   https://vercel.com/new?import=24games/tipstervicente" -ForegroundColor Cyan
    Start-Process "https://vercel.com/new?import=24games/tipstervicente"
}

