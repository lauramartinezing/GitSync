@echo off
echo Hola mundo
echo %ruta%
echo %CD%
git init
git log
git branch
git status
git add .
git commit -m "prueba commit" 
git log
git push
echo Press Enter...
read