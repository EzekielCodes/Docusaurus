---
title: Challenge 2
description: De tweede challenge
sidebar_position: 3
hide_table_of_contents: true
tags:
  - challenge2
---

:::caution Als je het niet vind:

Geen paniek! Click gerust op "Hint:" om je verder te helpen.
Is het nog niet genoeg? Dan doorlopen we het stap voor stap!

:::

## Challenge #2

Ik kreeg onlangs [dit bestand doorgestuurd](./assets/challenge2.txt) met de vraag "Is dit een ctf challenge?".<br/>Ik weet niet of dit een ctf challenge is, maar als het een is dan zit er zeker een vlag in. En als er een vlag in zit, dan ben ik zeker dat jij deze kan vinden!

:::note

De vlag die je moet zoeken is gelijkaardig aan: ``ctf{voorbeeld_flag}``

:::

<details>
    <summary>Hint:</summary>
    <div>
        <div>Alles van de warm-up zit hierin samen.</div>
        <br/>
        <details>
            <summary>Antwoord:</summary>
            <div>
                <div>Het is een .gif file opgeslaan als .txt en daarna geëncodeerd naar hex en dan naar base64!</div>
                <br/>
                <details>
                <summary>De vlag:</summary>
                <div>
                    <p>Eens je deze decodeert van base64 en dan van hex & daarna opslaat als .gif vind je de vlag:</p>
                    <p>ctf&#123;is_dit_een_ctf_vlag?&#125;</p>
                </div>
                </details>
            </div>
        </details>
  </div>
</details>