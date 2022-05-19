---
id: grep-SecondPage
title: Oefening
description: Oefening GREP
hide_table_of_contents: true
---

## Voorbeelden
Voorbeelden van grep-opdrachten in Linux en Unix
Hieronder wordt een standaard grep-commando uitgelegd met voorbeelden om u op weg te helpen met grep op Linux, macOS en Unix:

Zoek een regel die het woord in bestandsnaam bevat op Linux:
```js
grep 'word' filename
```
Voer een hoofdletterongevoelige zoekopdracht uit naar het woord 'bar' in Linux en Unix:
```js
grep -i 'bar' file1
```
Zoek naar alle bestanden in de huidige map en in al zijn submappen in Linux naar het woord 'httpd':
```js
grep -R 'httpd' .
```
Zoek en toon het totale aantal keren dat de string 'nixcraft' voorkomt in een bestand met de naam frontpage.md:
```js
grep -c 'nixcraft' frontpage.md
```

Hoe gebruik ik grep om een ​​bestand op Linux te doorzoeken?
Zoek in het /etc/passswd-bestand naar een gebruiker met de naam 'boo', voer in:
```js
grep boo /etc/passwd
```
Voorbeelduitvoer:

```js
foo:x:1000:1000:boo,,,:/home/boo:/bin/ksh
```
We kunnen fgrep/grep gebruiken om alle regels van een bestand te vinden die een bepaald woord bevatten. Als u bijvoorbeeld alle regels van een bestand met de naam address.txt in de huidige map wilt weergeven die het woord "California" bevatten, voert u het volgende uit:
```js
fgrep California address.txt
```
