---
id: docs-grepForensicsDerde
title: Opdracht 3
description: Oefening GREP
sidebar_position: 6
hide_table_of_contents: true
---

## Opdracht
We hebben een raar programma gevonden dat op een van onze servers draait en hebben een geheugendump gemaakt. Kun je erachter komen wat het doet?

[Download Network dump file](./assets/csc-strings.exe_200213_232412.dmp)

csc-strings.exe_200213_232412.dmp is de procesgeheugendump (procdump.exe -mp) van een draaiend C-programma (Windows, .exe) dat een aantal willekeurige tekenreeksen bevat die op een vlag lijken en op een geldige vlag staan.Het is weer mogelijk om met grep de vlag te vinden.GREP command(CSC)

### Oplossing
:::tip
:warning: **Het oplossing staat hieronder. Probeer het zelf eerst te cracking**:
<details>
  <summary>Het verkrijgen van de vlag is eenvoudig:</summary> 
  <p>strings csc-strings.exe_200213_232412.dmp | grep -v ThisIsNot | grep CSC</p>
</details>
:::
