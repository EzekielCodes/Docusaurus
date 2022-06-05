---
title: Intro
description: Intoductie tot encoding en decoding
sidebar_position: 0
hide_table_of_contents: true
---

## Encoding/Decoding

Om te beginnen zullen we even bespreken wat encoderen/decoderen nu precies is. 
Encoderen is het omzetten van data (o.a. teksts) van 1 vorm naar een andere met de bedoeling de boodschap te behouden in een vorm leesbaar voor een (al dan niet) ander systeem en die dan tevens (als nodig) terug om te draaien (decoderen) eens ontvangen.

Neem bevoorbeeld een tekst bestand met "Hallo" erin. Voor jou is die leesbaar in ons alfabet. Maar een computer zal die omzetten (encoderen) naar binaire data, wat gemakkelijker te verwerken is voor de computer totdat jij die wil zien in leesbare tekst.
Zo wordt bijvoorbeeld "Hallo" => "01001000 01100001 01101100 01101100 01101111" (binair) opgeslaan en dan omgezet naar "Hallo" op jou scherm.

Encoderen is dus het representeren van data in een andere vorm en decoderen is via dezelfde manier dat deze geëncodeerd werd ze terug om te vormen naar de originele vorm.

Een zeer veel gebruikte encodering is base64. Deze wordt vooral gebruikt om [binaire code](https://nl.wikipedia.org/wiki/Binaire_code) om te zetten naar [ASCII-tekens](https://nl.wikipedia.org/wiki/ASCII_(tekenset)).
Deze wordt onder andere gebruikt in e-mails om bijlagen te versturen.

Base64 bestaat uit 64 characters, namelijk:
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/ 
En daarbij wordt vaak "=" toegevoegd als "padding" (opvulling) zodat alles altijd mooi in gelijke "blokken" is opgedeeld in het geval dat de originele data niet in even grote blokken kan opgedeeld worden. 

:::caution Opgelet!

Encoderen/Decoderen is niet hetzelfde als encryptie/decryptie. 
Bij encryptie is het de bedoeling om data te verbergen in een niet leesbare vorm tenzij je de juiste sleutel hebt om deze ongedaan te maken. Encoderen wil net data wel leesbaar is voor alles die datzelfde systeem gebruikt.
Een zeer bekende (maar ook een slecht voorbeeld van) encryptie is ROT13 ook wel bekend als het Caesar-cijfer. Waarbij men bij data (tekst) ieder character omwisselt met die 13 plaatsen verder.
Aangezien ons alfabet maar bestaat uit 26 characters betekend dit dat als we deze opnieuw uitvoeren we terug de originele data krijgen.
TODO: Uitleg hier (mention een paar mogelijks bekende encoderingen, base64, maak duidelijk encoderen vs encryptie, geef ook voorbeeld encryptie)

:::

## Decoding

Het ongedaan maken (reverten) van een of meerdere encoderingen om zo terug de originele tekst te krijgen.

## Requirements
Om deze workshop uit te voeren heb je enkele dingen nodig:

* Internet toegang