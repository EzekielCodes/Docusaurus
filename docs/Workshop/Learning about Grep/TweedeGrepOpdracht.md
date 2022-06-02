---
id: docs-grepForensicsTweede
title: Tweede Opdracht
description: Oefening GREP
sidebar_position: 5
hide_table_of_contents: true
---

## Opdracht

Er staat hier onder een network dump file en hierin staat een picoCTF flag het is de bedoeling dat jullie het flag vinden met de hulp van de GREP command(picoCTF{}).
Er zijn inderdaad verschillende manieren om het flag te vinden. Kan ook met wireshark(Wireshark is een network analysis tool)

[Download Network dump file](./assets/Network-dump.pcapng)


## Wireshark

Het is mogelijk om de flag met wireshark te vinden. Indien uw met wireshark wilt proberen staast hieronder meer uitleg.
<details>
  <summary>UITLEG</summary>
  <p>Gisteren avond surfte een klant naar een russiche site.Waardoor zijn PC geinfecteerd is met een virus. Het ip idres van het site is 10.10.10.10(source IP). </p>
</details>

### Oplossing Met Wireshark
> :warning: **Het oplossing staat hieronder. Probeer het zelf eerste te vinden**: 
TIP: 
<details>
    <summary>SPOILER</summary>
    <p>Het is ook mogelijk om virus te krijgen via een ping request :))</p>
    <details>
    <summary>More Tips</summary>
    <p>Zet een filter die uw alleen icmp request toont en controleer de packet bytes van elke request die van 10.10.10.10 komt:))</p>
</details>
</details>


<details>
    <summary>Een andere oplossing Met wireshark</summary>
    <p>Klik op Edit > FInd Pakket > Kies voor String en Packet bytes laat Case Sensotive unchecked. In search string zet "picoCTF" en Klik op find </p>
</details>


### Oplossing Met Grep
> :warning: **Het oplossing staat hieronder. Probeer het zelf eerst te vinden**: 
TIP: 
<details>
  <summary>SPOILER</summary>
  <p>strings Network-dump.pcapng | grep "picoCTF"</p>
</details>


