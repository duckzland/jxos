---
category: Service Configuration
title: Fans Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is used for configuring fans speed.

Example for fans speed configuration:

```bash
[casing]
enable: true
strategy: highest
target: 64
max: 100
min: 20
tick: 20
up: 10
down: 5
curve_enable: false
curve: 10|20, 30|25, 50|60, 60|90, 80|100, 100|100
```

| Options | Value | Description |
|:--------|:------|:------------|
|`[casing]` | `[{gpu|cpu}|{index}|{coin}]` | the type of the device for, it can be casing for casing or gpu. it can also used to target gpu with specific order id `{index}` or gpu for specific coin `{coin}` |
|`enable` | `true|false` | disable the fan control for its block
|`strategy` | `highest|average` | this only applicable to casing fans, where it will calculate the fan speed based on gpu `highest` temperature or its total `average` temperature |
|`target` | `50 - 70` | the target temperature to reach |
|`max` | `1 - 100` | the maximum fan speed in percentage |
|`min` | `1 - 100` | the minimum fan speed in percentage |
|`up` | `1 - 100` | the value to use when we need to increase fan speed |
|`down` | `1 - 100` | the value to use when we need to decrease the fan speed |
|`tick` | `number` | the number in seconds delay to recalculate the speed |
|`curve_enable` | `true|false` | enable curve mode, where the fan speed will be calcuated based on curve points |
|`curve` | `temp|speed, temp|speed` | multiple curve point using `temp|speed` as value and separated by comma |


[Back to service file listing](/jxminer-config#services)





