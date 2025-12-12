# Script de Deploy Automático para Vercel
# Execute: .\deploy.ps1

param(
    [string]$VercelToken = ""
)

Write-Host "🚀 Deploy Automático na Vercel" -ForegroundColor Cyan
Write-Host ""

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na raiz do projeto" -ForegroundColor Red
    exit 1
}

# Verificar se há mudanças não commitadas
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "📝 Fazendo commit das mudanças..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy: Atualizar projeto"
    git push origin main
    Write-Host "✅ Mudanças commitadas" -ForegroundColor Green
}

# Se não tiver token, tentar usar a CLI interativa
if ([string]::IsNullOrEmpty($VercelToken)) {
    Write-Host "🔐 Iniciando deploy via CLI da Vercel..." -ForegroundColor Cyan
    Write-Host "   (Você precisará autenticar se ainda não estiver logado)" -ForegroundColor Yellow
    Write-Host ""
    
    try {
        npx --yes vercel@latest deploy --prod
        Write-Host ""
        Write-Host "✅ Deploy concluído com sucesso!" -ForegroundColor Green
    } catch {
        Write-Host ""
        Write-Host "⚠️  Deploy via CLI falhou." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "📋 Use a interface web da Vercel:" -ForegroundColor Cyan
        Write-Host "   1. Acesse: https://vercel.com/new" -ForegroundColor White
        Write-Host "   2. Selecione o repositório: 24games/tipstervicente" -ForegroundColor White
        Write-Host "   3. Clique em 'Deploy'" -ForegroundColor White
        Write-Host ""
        Start-Process "https://vercel.com/new?import=24games/tipstervicente"
    }
} else {
    Write-Host "🔑 Usando token fornecido..." -ForegroundColor Cyan
    $env:VERCEL_TOKEN = $VercelToken
    npx --yes vercel@latest deploy --prod --token $VercelToken
    Write-Host "✅ Deploy concluído!" -ForegroundColor Green
}

