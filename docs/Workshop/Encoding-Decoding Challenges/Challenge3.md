---
title: Challenge 3
description: Challenge 3
sidebar_position: 3
hide_table_of_contents: true
tags:
  - challenge 3
---

:::caution Als je het niet vind:

Geen paniek! Click gerust op "Hint:" om je verder te helpen.
Lukt het nog steeds niet? Dan doorlopen we het stap voor stap!

Vergeet ook niet dat je steeds het internet kan gebruiken om deze op te lossen!

:::

## Challenge #3

NASA was onlangs een bepaalde regio van de ruimte aan het afsporen op signalen van buitenaards leven.<br/>
Tot hun verbazen vonden ze een signaal in [deze regio](./assets/cosmos_challenge.jpg) die wel heel buitenaards is!

Ze vermoeden dat dit een signaal is van een buitenaards object, maar ze kunnen de precieze locatie ervan niet vinden. Daarom vroegen ze onze hulp om het alien object te helpen detecteren.  

:::note

De vlag die je moet zoeken is gelijkaardig aan: ``CTF{voorbeeld_flag}``

:::

import { FlagInput } from '@site/src/components/FlagCheck';

<FlagInput flagNumber="2" />

<details>
    <summary>Hint:</summary>
    <div>
        <div><p>Elke file heeft iets genaamd "Metadata". Dit is een opsomming van de karakteristieken van de data van een file. Met andere woorden data die data beschrijft.</p><p>Misschien is er iets meer te vinden in de Metadata van deze afbeelding?</p></div>
        <br/>
        <details>
            <summary>Oplossing:</summary>
            <div>
                <div>Als we een kijkje nemen in de Metadata van de afbeelding vinden we heel wat informatie over de afbeelding. Hier en daar staat er ook geëncodeerde data. Eentje daarvan valt wel enorm op! Namelijk het Model. Als we dit stukje base64 decoderen zou je iets bekends moeten zien!
                Het is een zip bestand! Erin vind je een "file" zonder bestandstype, verander die naar .txt om te zien wat erin zit!</div>
                <br/>
                <details>
                <summary>De vlag:</summary>
                <div>
                    <p>Nu zou je de vlag moeten gevonden hebben!</p>
                    <p>Geef de gevonden vlag in hierboven en zie als ze juist is!</p>
                </div>
                </details>
            </div>
        </details>
  </div>
</details>

import DocusaurusCosmosImage from '@site/static/img/cosmos_challenge.jpg';

<img src={DocusaurusCosmosImage} />