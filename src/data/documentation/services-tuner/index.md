---
category: Service Configuration
title: Tuner Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is for tuning GPU power, core and memory level

Example of tuner.ini content:

```bash

[settings]
enable: true
mode: static
maxHour: 7
minHour: 21
tick: 5

[core]
enable: true
target: 56
max: 70
min: 0
up: 10
down: 5

[memory]
enable: true
target: 56
max: 70
min: 0
up: 70
down: 5

[power]
enable: true
target: 60
max: 70
min: 50
up: 5
down: 2
```


| Options | Value | Description |
|:--------|:------|:------------|
|`[core|memory|power]` | `[{core|memory|power}|{index}|{coin}]` | the type of the settings for, it can be core, memory or power. it can also used to target gpu with specific order id `{index}` or gpu for specific coin `{coin}` |
|`enable` | `true|false` | disable the the feature per settings block |
|`mode` | `dynamic|static|time` | the processing mode, `dynamic` will process gpu periodically based on `tick` setting, `static` will only process the settings once when miner start or restarting and `time` will process the settings based on time value using `maxHour` and `minHour` value |
[`maxHour`| `0-24` | the starting hour in 24 hour format for setting the gpu to maximum settings using the `max` value |
[`minHour`| `0-24` | the starting hour in 24 hour format for setting the gpu to minimum settings using the `min` value |
|`tick` | `number` | the number in seconds delay to reprocess the setting (only used when on `dynamic` mode |
|`target` | `50 - 70` | the target temperature to reach |
|`max` | `1 - 100` | the maximum setting level in percentage |
|`min` | `1 - 100` | the minimum setting level percentage |
|`up` | `1 - 100` | the value to use when we need to increase setting level |
|`down` | `1 - 100` | the value to use when we need to decrease setting level |
|`tick` | `number` | the number in seconds delay to recalculate the speed |


Limitation:
- AMD GPU can only step up and down core, memory and power level to predetermined level set by BIOS
- AMD GPU must have power level set at BIOS level before we can increase or decrease the GPU power level value
- GPU core clock settings might cause GPU crash on Nvidia GPU if level value set too high or too low
- NVidia GPU has core level limit of -200 (level 0) to +200 (level 100) and no change (level 50)
- NVidia GPU has memory level limit of -2000 (level 0) to +2000 (level 100) and no change (level 50)
- NVidia GPU has limit of 100% TDP watt that varies from one model to another and hardcoded minimum of 50% of TDP watt


[Back to service file listing](/jxminer-config#services)





