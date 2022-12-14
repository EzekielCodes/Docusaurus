---
title: Warm-up
description: Een paar simpele oefeningen
sidebar_position: 1
hide_table_of_contents: true
tags:
  - Warm-up
---
## Meer dan enkel base64
Zoals de titel zegt is er natuurlijk meer dan alleen base64. Hier zul je een paar andere encoderingen vinden & word je verwacht de naam van de codering te vinden & de originele tekst/vlag. (hint: je zal dus gebruik moeten maken van het internet!)

:::caution Als je het niet vind:

Geen paniek! Click gerust op "Antwoord:" om te weten te komen welke soort encodering het was.
Eens je die weet zou het gemakkelijk moeten zijn om de originele tekst/vlag te vinden met de juiste site(s)! Maar indien je het dan nog niet vind, kun je de vlag vinden onder "de vlag:".

:::
## Oefeningen

import { TrialFlags } from '@site/src/components/TrialFlagCheck';

Hier is de eerste dan (het gedecodeerde antwoord is in het formaat van de vlaggen van een CTF, namelijk ``ctf{voorbeeld_flag}``)
```
63 74 66 7b 68 33 74 5f 77 34 73 5f 68 33 78 7d
```

<TrialFlags flagNumber="0" />

<details>
  <summary>Antwoord:</summary>
  <div>
    <div>De encoding is Hex (hexadecimal encoding)</div>
    <br/>
    <details>
      <summary>
        De vlag:
      </summary>
      <div>
        <p>ctf&#123;h3t_w4s_h3x&#125;</p>
      </div>
    </details>
  </div>
</details>

De tweede oefening (vlag is in hetzelfde formaat als de eerste):

Hoewel deze waarschijnlijk enorm gelijkt op de eerste voor jullie, zijn ze niet hetzelfde. Zie je het verschil?
De eerste challenge heeft namelijk ook letters erin zitten.
```
99 116 102 123 100 105 116 95 105 115 95 100 101 99 105 109 97 108 125
```

<TrialFlags flagNumber="1" />

<details>
  <summary>Antwoord:</summary>
  <div>
    <div>De encoding is decimal</div>
    <br/>
    <details>
      <summary>
        De vlag:
      </summary>
      <div>
        <p>ctf&#123;dit_is_decimal&#125;</p>
      </div>
    </details>
  </div>
</details>

De derde oefening (vlag is in hetzelfde formaat):
```
@ru=0ATD.(BkhNmD.R:!A7]dm?XdGbARB"d@rGmlDJ+$=
```

<TrialFlags flagNumber="2" />

<details>
  <summary>Antwoord:</summary>
  <div>
    <div>Deze encoding is base85! Er bestaan meerdere soorten base encoderingen.</div>
    <br/>
    <details>
      <summary>
        De vlag:
      </summary>
      <div>
        <p>ctf&#123;er_zijn_meerdere_base_encodings&#125;</p>
      </div>
    </details>
  </div>
</details>

En een laatste oefening op het herkennen van encodings voor wie een wat moeilijkere wil:
```
NzggMTA2IDc3IDEwMyA3OCAxMjIgODEgMTAzIDc4IDEwNiA4OSAxMDMgNzggNTAgNzMgMTAzIDc3IDEyMiA3NyAxMDMgNzggMTA5IDg1IDEwMyA3OCAxMDYgNzcgMTAzIDc3IDEyMiA2NSAxMDMgNzggMTA2IDgxIDEwMyA3NyAxMjIgNzcgMTAzIDc4IDEwNiA4MSAxMDMgNzggODcgODkgMTAzIDc4IDEwNiA4MSAxMDMgNzcgMTIyIDc3IDEwMyA3OCA4NyA4OSAxMDMgNzcgMTIyIDc3IDEwMyA3OCAxMDkgODUgMTAzIDc4IDEwNiA3NyAxMDMgNzcgMTIyIDY1IDEwMyA3OCAxMDYgODEgMTAzIDc3IDEyMiA2OSAxMDMgNzggMTA5IDg1IDEwMyA3OCAxMDYgOTkgMTAzIDc4IDUwIDgxIDYx
```

<TrialFlags flagNumber="3" />

<details>
    <summary>Hint:</summary>
    <div>
        <div>Niemand zegt dat je iets dat al ge??ncodeerd is niet opnieuw can encoderen :)</div>
        <br/>
        <details>
            <summary>Antwoord:</summary>
            <div>
                <div>De vlag werd ge??ncodeerd met hex, base64, decimal en (opnieuw!) base64, in die volgorde.</div>
                <br/>
                <details>
                <summary>De vlag:</summary>
                <div>
                    <p>ctf&#123;3nc0d3d_d3_3nc0d1ng&#125;</p>
                </div>
                </details>
            </div>
        </details>
  </div>
</details>

## Meer dan enkel encoding
Natuurlijk  zou het ietsje te gemakkelijk zijn moest het enkel ge??ncodeerde tekst zijn in onze challenges. Vandaar dus dat er wat meer te pas komt, namelijk bestandstypes.

Als je ooit al eens een bestandstype zoals een afbeelding hebt geprobeerd te openen als een tekstbestand zal je waarschijnlijk gemerkt hebben dat deze niet al te leesbaar is voor ons.
**Maar** deze hebben altijd een "header". Een stukje tekst helemaal aan de start (bovenaan) dat zegt welk type bestand dit is.

Neem bijvoorbeeld de volgende afbeelding:

import DocusaurusImageUrl from '@site/static/img/Example_image.png';

<img src={DocusaurusImageUrl} />;

Als je deze zou openen als een tekstbestand zal je het volgende zien:
```
.PNG
.
...
IHDR..............????.....IDATx??????.z??(??5
H??.????????????.??????Cb[.??<.AB...??????t.%.Z????b*..r.??.??(G9??Q.r.??|.??????.???0??.B??.*????..>.??G=??3??.,.??..\-??=????Y??.????+??S??q????.}~????????????8.??._..??.??`????a??"=.l??%,#..D. ????.B0{...????M??+.??	???a??O.??STx??\??@??DR-.D>.U ??9??.????..FB??H.y??????...IM.I|??...sz??????vz,.|A??.8.????..agv??..??.????./.????G.??????????..U.??.h.>w????id
??l.K????....Sb??.D????.??.??????.(??????jwb??.??<?[.v??J????$??|2#N????.??}????...??.??.??#.??????^~.U.??_U[??....M|k????????2).~..??.}.??u??.i????4.;??C??O]Rp..??R5??i..????%8kd??[b7r??.*z??..??k.a.????cJ.r??.j.????
??
<enzoverder>
```
Indien je het zelf ook eens wilt zien bij deze afbeelding, [download hem hier.](./assets/Example_image.png)<br/>
Merk op, de header ``.PNG`` verteld dat dit eigenlijk een .png afbeelding is. 

## Handige tool

Een handige tool bij deze oefeningen (en de challenges) is [Cyberchef](https://gchq.github.io/CyberChef/).<br/>Cyberchef laat je tekst maar ook bestanden bekijken & aanpassen. Met o.a. operaties zoals ``From base64``, ``To binary`` & ``Detect File Type`` die zeer handig zijn voor onze oefeningen en challenges.

Er is zelfs een ``Magic`` operation waarbij Cyberchef zelf probeert uit te zoeken wat er met het bestand kan gebeurd zijn!<br/>Probeer deze maar even uit op de laatse oefening op encoderen/decoderen! Mogelijks moet je wel de "Depth" aanpassen van de Magic operatie (van 3 naar 4). Depth (letterlijk: diepte) is hier het max aantal stappen bij iedere poging die Cyberchef probeert. Kijk daarna maar eens naar de mogelijke antwoord snippets die Cyberchef toont, je zal merken dat een paar van hen de vlag tonen! (En de stappen die Cyberchef heeft moeten doornemen om deze te bekomen)

## Einde warmup
Dit zou voldoende moeten zijn om te starten met onze challenges. Op naar de challenges dus!