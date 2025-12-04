@echo off
echo ========================================
echo Fazendo push para o repositorio...
echo ========================================
echo.

git add -A
echo.
echo Arquivos adicionados ao staging
echo.

git commit -m "Atualizacao: %date% %time%"
echo.
echo Commit realizado
echo.

git push origin main
echo.
echo ========================================
echo Push concluido!
echo ========================================
pause
