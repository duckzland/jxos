---
category: Service Configuration
title: Watchdog Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is used for configuring watchdog service.

The watchdog service will also use configuration from `machine.ini minimum_hashrate` value to determine the minimum hashrate for GPU or CPU miner. 

Example for watchdog configuration:


```bash
[settings]
enable: true
tick: 180
delay: 180
reboot_delay: 10
maximum_retry: 3
```

| Options | Value | Description |
|:--------|:------|:------------|
|`enable` | `true|false` | disable the the feature per settings block |
|`tick` | `number` | Delay in seconds to check if miner has produced new shares and reboot if no new share found |
|`delay` | `number` | Thread initialization delay, this is for delaying the watchdog until the miners has enough time to generate shares and speed |
|`reboot_delay` | `number` | Delay in seconds before invoking reboot action |
|`maximum_retry` | `number` | the maximum retry for soft miner rebooting by killing the process and restart it again before going to full machine reboot forcefully |


[Back to service file listing](/jxminer-config#services)





