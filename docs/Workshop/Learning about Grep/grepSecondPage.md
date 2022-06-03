---
id: docs-grepOefening
title: Voorbeeld oefening
description: Oefening GREP
sidebar_position: 2
hide_table_of_contents: true
---

## Voorbeelden
Voorbeelden van grep-opdrachten in Linux en Unix
Hieronder wordt een standaard grep-commando uitgelegd met voorbeelden om u op weg te helpen met grep op Linux, macOS en Unix:

We gaan eerst een bestand aanmaken en al direct een zin wegschreven naaar het bestand.
```bash
echo "THIS LINE IS THE 1ST UPPER CASE LINE IN THIS FILE
this line is the 1st lower case line in this file
This Line Has All Its First Character Of The Word With Upper Case

Two lines above this line is empty
And this is the last line" > fileDemo.txt
```
Zoek een regel die het woord in bestandsnaam bevat op Linux:
```bash
grep 'this' fileDemo.txt
```

we gaan een kopie maken van fileDemo.txt 
```bash
cp fileDemo.txt fileDemo.txt1
```

We kunnen nu grep doen op multiple file
```bash
grep "this" fileDemo.txt*
```
Voer een hoofdletterongevoelige zoekopdracht uit naar het woord 'bar' in Linux en Unix:
```bash
grep -i 'bar' fileDemo.txt
```
Zoek naar alle bestanden in de huidige map en in al zijn submappen in Linux naar het woord 'httpd':
```bash
grep -R 'httpd' .
```
Zoek en toon het totale aantal keren dat de string 'nixcraft' voorkomt in een bestand met de naam frontpage.md:
```bash
grep -c 'nixcraft' frontpage.md
```

Hoe gebruik ik grep om een ​​bestand op Linux te doorzoeken?
Zoek in het /etc/passswd-bestand naar een gebruiker met de naam 'boo', voer in:
```bash
grep boo /etc/passwd
```
Voorbeelduitvoer:

```bash
foo:x:1000:1000:boo,,,:/home/boo:/bin/ksh
```

