@echo off
echo Hola mundo
set /p ruta = Nombre
echo %ruta%
echo %CD%
git init
git log
git branch
git status
git add .
git commit -m "prueba commit" 
git log
Pause
git push
echo Press Enter...
read