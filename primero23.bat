@echo off
echo Hola mundo
echo %ruta%
echo %CD%
set datetime = %DATE%
::configuracion de rama 
git init
git remote rm origin
git remote add origin git@github.com:lauramartinezing/GitSync.git
git checkout -b usuarioLaura
git add .
git commit -m "autosave"
git push -u origin usuarioLaura

pause
