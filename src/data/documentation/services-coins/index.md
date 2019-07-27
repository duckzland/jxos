---
category: Service Configuration
title: Coin Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is used for registering all available coins for the miner usage.

Example for registering new coin to this file:

```bash
[eth]
name: Ethereum
algo: ethash
wallet: 0x5071Dab2948b596981158a301df05XXXXXXXXXXX
```

| Options               | Description                                       |
|:-----------------------|:--------------------------------------------------|
|`[eth]` | the coin ticker name, in this example ethereum coin ticker name is eth |
|`name`    | the coin human name |
|`algo`    | the coin algorithm, jxminer will match miner and coin by their algorithm value. |
|`wallet`  | the wallet address to use for this coin |


[Back to service file listing](/jxminer-config#services)





