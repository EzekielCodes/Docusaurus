---
id: docs-grepAdvanced
title: Advanced Operations
description: Oefening GREP
hide_table_of_contents: true
---

## Grep OR Operation (|)
Pipe-teken (|) in grep wordt gebruikt om aan te geven dat een van de twee hele subexpressies in een positie voorkomt. "subexpression1|subexpression2" komt overeen met subexpression1 of subexpression2.

In het volgende voorbeeld worden drie verschillende soorten commentaarregels in een bestand verwijderd met OR in een grep-opdracht.

```js

echo "Dit bestand toont het commentaarteken in verschillende programmeer-/scripttalen 
### Perl / shell-scripting 
Als de regel begint met een enkel hash-symbool, 
dan is het een opmerking in Perl en shell-scripting. 
' VB Scripting commentaar 
De regel moet beginnen met een enkel aanhalingsteken om commentaar te geven in VB scripting. 
// C programmering enkele regel commentaar. 
Dubbele schuine strepen aan het begin van de regel voor commentaar op één regel in C." > commments.txt
```


Bekijk het bestand comments.txt

```js
cat comments 
```

Het bestand met de naam "opmerkingen" heeft perl, VB-script en C-programmeercommentaarregels. Nu zoekt het volgende grep-commando naar de regel die niet begint met # of enkele aanhalingstekens (') of dubbele slashes (//).

```js
 grep -v "^#\|^'\|^\/\/" comments
```

### OUTPUT
```js
Dit bestand toont het commentaarteken in verschillende programmeer-/scripttalen 
. Als de regel begint met een enkel hash-symbool, 
dan is het een opmerking in Perl en shellscripting . 
De regel moet beginnen met een enkel aanhalingsteken om commentaar te geven in VB-scripting. 
Dubbele schuine strepen aan het begin van de regel voor commentaar op één regel in C.
```


### Karakterklasse-expressie
De opdracht Grep ondersteunt enkele speciale tekenklassen die bepaalde gemeenschappelijke bereiken aangeven. Weinigen van hen worden hier vermeld. Raadpleeg de man-pagina van grep om verschillende karakterklasse-expressies te kennen.

```js
[:cijfer:] Alleen de cijfers 0 tot 9 
[:alnum:] Elk alfanumeriek teken 0 tot 9 OF A tot Z of a tot z. 
[:alpha:] Elk alfateken A tot Z of a tot z. 
[:blank:] Alleen spatie- en TAB-tekens.

```

Deze worden altijd tussen vierkante haken gebruikt in de vorm [[:digit:]]. Laten we nu alle proces-ID's van het ntpd-daemonproces gebruiken met behulp van de juiste tekenklasse-expressie.

```js
grep -e "ntpd\[[[:digit:]]\+\]" /var/log/messages.4 
```




### M tot N voorvallen ({m,n})

Een reguliere expressie gevolgd door {m,n} geeft aan dat het voorgaande item minstens m keer, maar niet meer dan n keer wordt gevonden. De waarden van m en n moeten niet-negatief zijn en kleiner dan 255.

In het volgende voorbeeld wordt de regel afgedrukt als deze in het bereik van 0 tot 99999 ligt.

```js
echo "12
12345
123456
19816282 
" > nummer.txt
```


```js
grep "^[0-9]\{1,5\}$" nummer.txt
```

# OUTPUT

```js
12 
12345
```

Het bestand met de naam "nummer" heeft de lijst met nummers, het bovenstaande grep-commando komt alleen overeen met het nummer van 1 (minimaal 0) tot 5 cijfers (maximaal 99999).

### Exact M voorkomen ({m})

Een reguliere expressie gevolgd door {m} komt exact overeen met m exemplaren van de voorgaande expressie. De volgende grep-opdracht geeft alleen het nummer weer dat uit 5 cijfers bestaat.

```js
grep "^[0-9]\{5\}$" nummer.txt 
```

# OUTPUT
```js
12345
```

### M of meer voorkomens ({m,})
Een reguliere expressie gevolgd door {m,} komt overeen met m of meer exemplaren van de voorgaande expressie. De volgende grep-opdracht geeft het nummer weer met 5 of meer cijfers.

```js
grep "[0-9]\{5,\}" nummer.txt 
```

# OUTPUT

```js

12345 
123456 
19816282

```


