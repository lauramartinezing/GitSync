@echo off
echo Hola mundo
echo %ruta%
echo %CD%
set datetime = %DATE%
::configuracion de rama 
git init
git remote rm origin
git remote add origin git@github.com:lauramartinezing/GitSync.git
git checkout -b usuario
git add .
git commit -m "autosave"
git push -u origin usuario

pause
