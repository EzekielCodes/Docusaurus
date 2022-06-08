---
title: Warm-up
description: Een paar simpele oefeningen
sidebar_position: 1
hide_table_of_contents: true
tags:
  - Warmup
---
## Meer dan enkel base64
Zoals de titel zegt is er natuurlijk meer dan alleen base64. Hier zul je een paar andere vormen van encoderingen vinden & wordt je verwacht de naam van de codering te vinden & de originele tekst/vlag. (hint: je zal dus gebruik moeten maken van het internet!)

## Oefeningen
:::caution Als je het niet vind:

Geen paniek! Click gerust op "Antwoord:" om te weten te komen welke soort encodering het was.
Eens je die weet zou het gemakkelijk moeten zijn om de originele tekst/vlag te vinden met de juiste site(s)! Maar indien je het dan nog niet vind, kun je de vlag vinden onder "de vlag:".

:::
Hier is de eerste dan (het gedecodeerde antwoord is in het formaat van de vlaggen van een CTF, namelijk ``ctf{voorbeeld_flag}``)
```
63 74 66 7b 68 33 74 5f 77 34 73 5f 68 33 78 7d
```
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
3B83:0fC./0JXb*1,C%-0JO\)0f1"52'=V/1*A;*2'=V-2BX_/0H`A5+>GQ1+>GQ)+>GQ)+>GT-+>GQ(+>GQ)+>GT-+>GQ)+?;;%3B/-A2]sh02'=V-0d&J6+>GQ)+>GT)+?;G)0ekC*0eb:(0ebI-0ek@)0ebC+0ekO.0etT
```
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
<details>
    <summary>Hint:</summary>
    <div>
        <div>Niemand zegt dat je iets dat al geëncodeerd is niet opnieuw can encoderen :)</div>
        <br/>
        <details>
            <summary>Antwoord:</summary>
            <div>
                <div>De vlag werd geëncodeerd met hex, base64, decimal en (opnieuw!) base64, in die volgorde.</div>
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
Natuurlijk  zou het ietsje te gemakkelijk zijn moest het enkel geëncodeerde tekst zijn in onze challenges. Vandaar dus dat er wat meer te pas komt, namelijk bestandstypes.

Als je ooit al eens een bestandstype zoals een afbeelding hebt geprobeerd te openen als een tekstbestand zal je waarschijnlijk gemerkt hebben dat deze niet al te leesbaar is voor ons.
**Maar* deze hebben altijd een "header". Een stukje tekst helemaal aan de start (bovenaan) dat zegt welk type bestand dit is.

Neem bijvoorbeeld de volgende afbeelding:
+ 
[Download hem hier:](./assets/Example_image.png)

import DocusaurusImageUrl from '@site/static/img/Example_image.png';

<img src={DocusaurusImageUrl} />;

Als je deze zou openen als een tekstbestand zal je het volgende zien:
```
.PNG
.
...
IHDR..............Ì¯.....IDATxÚì½.zë(°5
H².ì¡Ï¹ïÿ.ÿéÞCb[.Ë<.AB...Ïßît.%.Z¬ªb*..r.£.å(G9ÊQ.r.£|.Ò§þ.ù?0ò.BÄ.*ß¦..>.èG=Ì3ó.,.õ..\-Î=ô¸YÍ.âì+øSèqÇò.}~Àòéé¥¹8.À._..Ù.ä`Ë§aË"=.l¹%,#..D. ëß.B0{...ÀòMæ+.ÿ	ó?aëO.ûSTxÙ\ý@¬DR-.D>.U ü9â.¨ò..FBÕH.y Ýû...IM.I|Ý...szÄêßvz,.|AÍ.8.·¶..agvª..é.îî./.¥¯G.ÃÆ²ñ¸..U.¶.h.>wéÅid
½l.K¥©....Sbõ.DÈ¾.ø.°¼«.(·¹¹jwbË.½<?[.vÆJõø$°|2#NæÂ.Ý}½õ...Ô.ý.ì#.Ëü§^~.U.ø_U[á....M|k²ÚÃÝ2).~..¯.}.æu©.i·Ä4.;¯CôO]Rp..ÀR5íi..Ôº%8kdÏ[b7r´.*z»..òk.a.¶ÕcJ.rÁ.j.âÈ
Ë
<enzoverder>
```

Merk op de header ".PNG" die verteld dat dit eigenlijk een .png afbeelding is. 

## Einde warmup
Dit zou voldoende moeten zijn om te starten met onze challenges. Op naar de challenges dus!