@echo off
chcp 65001 >nul
echo Removing original JPG/JPEG files from src\assets...

if exist "src\assets\AufbruchI-web.jpg" (git rm --quiet "src\assets\AufbruchI-web.jpg" & echo removed: AufbruchI-web.jpg) else echo missing: AufbruchI-web.jpg
if exist "src\assets\AufbruchII-web.jpg" (git rm --quiet "src\assets\AufbruchII-web.jpg" & echo removed: AufbruchII-web.jpg) else echo missing: AufbruchII-web.jpg
if exist "src\assets\Ausstellung-Aumann.jpg" (git rm --quiet "src\assets\Ausstellung-Aumann.jpg" & echo removed: Ausstellung-Aumann.jpg) else echo missing: Ausstellung-Aumann.jpg
if exist "src\assets\Ausstellung-Giesecke.jpg" (git rm --quiet "src\assets\Ausstellung-Giesecke.jpg" & echo removed: Ausstellung-Giesecke.jpg) else echo missing: Ausstellung-Giesecke.jpg
if exist "src\assets\Ausstellung-Offenes Atelier.jpg" (git rm --quiet "src\assets\Ausstellung-Offenes Atelier.jpg" & echo removed: Ausstellung-Offenes Atelier.jpg) else echo missing: Ausstellung-Offenes Atelier.jpg
if exist "src\assets\Eismeer-web.jpg" (git rm --quiet "src\assets\Eismeer-web.jpg" & echo removed: Eismeer-web.jpg) else echo missing: Eismeer-web.jpg
if exist "src\assets\Fruehling-web.jpg" (git rm --quiet "src\assets\Fruehling-web.jpg" & echo removed: Fruehling-web.jpg) else echo missing: Fruehling-web.jpg
if exist "src\assets\Kontakt.jpg" (git rm --quiet "src\assets\Kontakt.jpg" & echo removed: Kontakt.jpg) else echo missing: Kontakt.jpg
if exist "src\assets\Küchenphilosophie-web.jpg" (git rm --quiet "src\assets\Küchenphilosophie-web.jpg" & echo removed: Küchenphilosophie-web.jpg) else echo missing: Küchenphilosophie-web.jpg
if exist "src\assets\ohneTitel-a-web.jpg" (git rm --quiet "src\assets\ohneTitel-a-web.jpg" & echo removed: ohneTitel-a-web.jpg) else echo missing: ohneTitel-a-web.jpg
if exist "src\assets\ohneTitel1-web.jpg" (git rm --quiet "src\assets\ohneTitel1-web.jpg" & echo removed: ohneTitel1-web.jpg) else echo missing: ohneTitel1-web.jpg
if exist "src\assets\ohneTitelb-web.jpg" (git rm --quiet "src\assets\ohneTitelb-web.jpg" & echo removed: ohneTitelb-web.jpg) else echo missing: ohneTitelb-web.jpg
if exist "src\assets\power-web.jpg" (git rm --quiet "src\assets\power-web.jpg" & echo removed: power-web.jpg) else echo missing: power-web.jpg
if exist "src\assets\Sonnenblumen-web.jpg" (git rm --quiet "src\assets\Sonnenblumen-web.jpg" & echo removed: Sonnenblumen-web.jpg) else echo missing: Sonnenblumen-web.jpg
if exist "src\assets\Spuren-web.jpg" (git rm --quiet "src\assets\Spuren-web.jpg" & echo removed: Spuren-web.jpg) else echo missing: Spuren-web.jpg
if exist "src\assets\Tanzende-a-web.jpg" (git rm --quiet "src\assets\Tanzende-a-web.jpg" & echo removed: Tanzende-a-web.jpg) else echo missing: Tanzende-a-web.jpg
if exist "src\assets\Tanzende-b-web.jpg" (git rm --quiet "src\assets\Tanzende-b-web.jpg" & echo removed: Tanzende-b-web.jpg) else echo missing: Tanzende-b-web.jpg
if exist "src\assets\UM0.jpeg" (git rm --quiet "src\assets\UM0.jpeg" & echo removed: UM0.jpeg) else echo missing: UM0.jpeg
if exist "src\assets\UM1.jpg" (git rm --quiet "src\assets\UM1.jpg" & echo removed: UM1.jpg) else echo missing: UM1.jpg
if exist "src\assets\UM2.jpg" (git rm --quiet "src\assets\UM2.jpg" & echo removed: UM2.jpg) else echo missing: UM2.jpg
if exist "src\assets\UM3.jpg" (git rm --quiet "src\assets\UM3.jpg" & echo removed: UM3.jpg) else echo missing: UM3.jpg
if exist "src\assets\UM4.jpg" (git rm --quiet "src\assets\UM4.jpg" & echo removed: UM4.jpg) else echo missing: UM4.jpg
if exist "src\assets\UM5.jpg" (git rm --quiet "src\assets\UM5.jpg" & echo removed: UM5.jpg) else echo missing: UM5.jpg
if exist "src\assets\UM6.jpg" (git rm --quiet "src\assets\UM6.jpg" & echo removed: UM6.jpg) else echo missing: UM6.jpg
if exist "src\assets\UM7.jpg" (git rm --quiet "src\assets\UM7.jpg" & echo removed: UM7.jpg) else echo missing: UM7.jpg
if exist "src\assets\UM8.jpg" (git rm --quiet "src\assets\UM8.jpg" & echo removed: UM8.jpg) else echo missing: UM8.jpg
if exist "src\assets\Zaghaft-beginnt-etwas-Neues-web.jpg" (git rm --quiet "src\assets\Zaghaft-beginnt-etwas-Neues-web.jpg" & echo removed: Zaghaft-beginnt-etwas-Neues-web.jpg) else echo missing: Zaghaft-beginnt-etwas-Neues-web.jpg

echo.
echo Git status (porcelain):
git status --porcelain

echo.
echo Attempting commit (if there are staged changes)...
git commit -m "chore(images): remove original jpg/jpeg sources (webp-only)" || echo "No commit (probably no staged changes)"

echo.
echo Last commit summary:
git show --name-only --pretty=format:"%h %s" HEAD || echo "No commits available"

echo.
echo Remaining files in src\assets:
dir /B src\assets

echo Done.

