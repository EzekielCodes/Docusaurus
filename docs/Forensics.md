---
id: docs-grepForensics
title: Opdracht
description: Oefening GREP
hide_table_of_contents: true
---

## Opdracht

Er staat hier onder een network dump file en hierin staat een picoCTF flag het is de bedoeling dat jullie het flag vinden met de hulp van de GREP command.
Er zijn inderdaad verschillende manieren om het flag te vinden. Kan ook met wireshark(Wireshark is een network analysis tool)

[Download Network dump file](./assets/network-dump.flag.pcap)

> :warning: **Het oplossing staat hieronder**: 
TIP: 
```js
strings network-dump.flag.pcap | grep "p i c o" |tr -d " "!
```

| WARNING: be careful to baz the quux before initializing the retro encabulator! |
| --- |


