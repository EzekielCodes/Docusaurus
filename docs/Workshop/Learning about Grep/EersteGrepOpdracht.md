---
id: docs-grepForensics
title: Eerste Opdracht
description: Oefening GREP
sidebar_position: 4
hide_table_of_contents: true
---

## Opdracht

Er staat hier onder een network dump file en hierin staat een picoCTF flag het is de bedoeling dat jullie het flag vinden met de hulp van de GREP command.
Er zijn inderdaad verschillende manieren om het flag te vinden.

[Download Network dump file](./assets/network-dump.flag.pcap)

### Oplossing
:::tip
:warning: **Het oplossing staat hieronder. Probeer het zelf eerst te cracking**:
<details>
  <summary>SPOILER</summary>
  <p>strings network-dump.flag.pcap | grep "p i c o" | tr -d " "</p>
</details>
:::





