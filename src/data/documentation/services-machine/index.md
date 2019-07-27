---
category: Service Configuration
title: Machine Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is the main configuration for jxminer.

Example for machine configuration:

```bash
[settings]
email: your_email@example.com
box_name: jxmining_machine
worker: jxmining_machine
hard_reboot: false
executable_location: /usr/local/
gpu_strict_power_mode: true

[gpu_check_total]
enable: false
reboot_when_failed: true
amd: 0
nvidia: 0

[gpu_miner]
enable: true
coin: eth
pool: nanopool
dual: false
second_coin: dcr
second_pool: coinmine
minimum_hashrate: false

[cpu_miner]
enable: true
coin: lthn
pool: lethean
thread: 2
priority: 2
minimum_hashrate: false
```


| Options | Value | Description |
|:--------|:------|:------------|
|`enable` | `true|false` | enable or disable the settings block |
|`email` | `email address` | the email address for connecting to pools |
|`box_name` | `string` | box name to identify the machine |
|`worker` | `string without space` | the string for identifying the machine for the pools |
|`hard_reboot` | `true|false` | when enabled, the machine will use magic sysreq for rebooting, use this if the miner causing gpu crash and cannot be rebooted using normal linux rebooting process |
|`executable_location` | `linux path` | the path where miner program is located at, the default JXOS miner packagaes will always use `/usr/local/bin` location |
|`gpu_strict_power_mode` | `true|false` | some GPU (mostly Nvidia) need to have this set to true for displaying the correct power usage |
|`reboot_when_failed` | `true|false` | when enabled, jxminer will try to detect the total number of gpu found in the system and reboot if the number of gpu found doesn't match the settings. Warning: enabling this can cause infinite reboot. don't enable this while building / debugging your hardware |
|`amd` | `number` | the number of AMD gpu expected to be found at the machine, this is related to `reboot_when_failed` option |
|`nvidia` | `number` | the number of Nvidia gpu expected to be found at the machine, this is related to `reboot_when_failed` option |
|`coin` | `string` | the coin for mining, must be a valid coin registered at `coins.ini` |
|`pool` | `string` | the pool for mining, must be a valid coin registered at `pools` folder and the pool file must support target `coin` algorithm |
|`dual` | `true|false` | enable or disable the dual gpu mining feature, not all miner support dual mining |
|`second_coin` | `string` | the coin used for the secondary coin when dual mining |
|`second_pool` | `string` | the pool used for the secondary pool when dual mining |
|`minimum_hashrate` | `string` | the minimum hashrate that will be checked periodically and if fallen under that minimum hashrate, the machine will be rebooted by watchdog service |
|`thread` | `number` | the number of thread used for CPU mining only, setting this too high can cause the machine to lockup |
|`priority` | `string` | the CPU priority for the CPU miner program, only for CPU miner. setting this too high can cause the machine to lockup |



[Back to service file listing](/jxminer-config#services)





