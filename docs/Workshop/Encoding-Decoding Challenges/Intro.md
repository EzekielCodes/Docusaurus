---
title: Intro
description: Intoductie tot encoding en decoding
sidebar_position: 0
hide_table_of_contents: true
tags:
  - Getting started
---

## Encoding/Decoding

Om te beginnen zullen we even bespreken wat encoderen/decoderen nu precies is. 
Encoderen is het omzetten van data (o.a. teksts) van 1 vorm naar een andere met de bedoeling de data te behouden in een vorm leesbaar voor een (al dan niet) ander systeem en die dan tevens (als nodig) terug om te draaien (decoderen) eens ontvangen.

Een zeer veel gebruikte encodering is base64. Deze wordt vooral gebruikt om [binaire data](https://nl.wikipedia.org/wiki/Binaire_code) om te zetten naar [ASCII-tekens](https://nl.wikipedia.org/wiki/ASCII_(tekenset)).
Base64 bestaat uit 64 characters, namelijk:
``ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/``

En daarbij wordt vaak "``=``" toegevoegd als "padding" (opvulling) zodat alles altijd mooi in gelijke "blokken" is opgedeeld in het geval dat de originele data niet in even grote blokken kan opgedeeld worden. 

Deze wordt onder andere gebruikt in e-mails om bijlagen te versturen.

Stel dat we een email hebben met een afbeelding in de bijlage. Het versturen (transport) van een email is gebaseerd op het versturen van textuele data, wat problemen zou opleveren dus als we data willen versturen die niet textueel is, zoals een afbeelding. (Met tot gevolg dat de afbeelding gedeeltelijk of niet juist toekomt. De afbeelding is dan 'corrupted')
Hier wordt dan base64 gebruikt om de afbeelding als textuele data te representeren vooraleer die verstuurd word met de email.

Encoderen is dus het representeren van data in een andere data vorm en decoderen is via dezelfde manier dat deze geëncodeerd werd ze terug om te vormen naar de originele data vorm.

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::caution Opgelet

<Tabs>
  <TabItem value="Opgelet" label="Encoding vs Encryption">Encoderen/Decoderen is niet hetzelfde als encryptie/decryptie. Bij encryptie is het de bedoeling om data te verbergen in een niet leesbare vorm tenzij je de juiste sleutel hebt om de encryptie ongedaan te maken en de originele leesbare vorm terug te krijgen. Encoderen wil net data wel leesbaar behouden, enkel in een andere vorm.</TabItem>
  <TabItem value="Encryption" label="Encryption">Een zeer bekende (maar ook een slecht voorbeeld van) encryptie is <a href="https://nl.wikipedia.org/wiki/Rot13">ROT13</a> ook wel bekend als het <a href="https://nl.wikipedia.org/wiki/Caesarcijfer">'Caesar-cijfer'</a>. Waarbij men bij data (in dit geval tekst) ieder character omwisselt met die 13 plaatsen verder.
Maar aangezien ons alfabet maar bestaat uit 26 characters betekent dit dat als we deze opnieuw uitvoeren we terug de originele tekst krijgen.</TabItem>
</Tabs>

:::

## Base64 live editor
In deze live code editor kun je zelf de code wat aanpassen en de gewone text (= string) veranderen & zien wat de base64 ervan word.
```jsx live

function Base64EncodingDecoding() {
  //Dit is onze gewone tekst
  string = 'Hello'; // <=== Deze 'Hello' kan je zelf veranderen, dubbel click erop!

  //Dit zet de string om naar base64
  encodedString = btoa(string);
  //Dit decodeerd de base64 tekst
  decodedString = atob(encodedString);

  return(
      <div>
          <p>
              Gewone text '{string}'
          </p>
          <p>
              Base64 encoded: {encodedString}
          </p>
          <p>
              Base64 decoded: {decodedString}
          </p>
      </div>
  )
}
```

Verander de 'Hello' eens naar een 1 letter, dan naar 2 letters en daarna naar 3 letters. Merk op dat '=' wordt toegevoegd voor ieder 'ontbrekende' character per 'blokje' dat base64 onze gewone tekst in opdeeld. Base64 deelt de originele data dus op in blokjes van 3.

## Requirements
Om deze workshop uit te voeren heb je enkele dingen nodig:

* Internet toegang
* Engels kunnen lezen/schrijven (als je iets moet opzoeken, is engels aangeraden)
* Een interesse in CTF opgaves