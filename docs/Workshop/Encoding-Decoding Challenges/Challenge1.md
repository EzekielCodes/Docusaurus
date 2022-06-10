---
title: Challenge 1
description: De eerste challenge
sidebar_position: 2
hide_table_of_contents: true
tags:
  - challenge1
---
:::caution Als je het niet vind:

Geen paniek! Click gerust op "Hint:" om je verder te helpen.
Lukt het nog steeds niet? Dan doorlopen we het stap voor stap!

Vergeet ook niet dat je steeds het internet kan gebruiken om deze op te lossen!

:::

## Challenge #1
Ik had net iets neergeschreven in notepad toen ik onverwachts even weg moest. Toen ik echter terugkwam stond [dit plots in mijn notepad](./assets/challenge1.zip) in plaats van de originele tekst.
Vast een grap van mijn medestudent... Les geleerd dus, vergrendel altijd je pc in plaats van die open te laten staan.

Maar mijn originele tekst... Kan jij ze terug vinden?

:::note

Je zal de challenge1.txt eerst uit de zip file moeten halen!
De vlag die je moet zoeken is gelijkaardig aan: ``ctf{voorbeeld_flag}``

:::

import { FlagInput } from '@site/src/components/FlagCheck';

<FlagInput flagNumber="0" />

<details>
    <summary>Hint:</summary>
    <div>
        <div>Het is een bepaald bestandstype dat werd opgeslaan als een .txt bestand (zie de warm-up!)</div>
        <br/>
        <details>
            <summary>Oplossing:</summary>
            <div>
                <div>Het bestandstype is eigenlijk een .zip bestand. Hierin vind je een "file.txt" met vanonderen base64 encodering erin.</div>
                <br/>
                <details>
                <summary>De vlag:</summary>
                <div>
                    <p>Eens je de base64 erin decodeerd zoals in de warm-up vind je de vlag:</p>
                    <p>Geef de gevonden vlag in hierboven en zie als ze juist is!</p>
                </div>
                </details>
            </div>
        </details>
  </div>
</details>