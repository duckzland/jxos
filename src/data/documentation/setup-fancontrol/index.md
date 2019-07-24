---
category: Configuration
title: Fan Control
---

> The sensors is required for JXMiner casing and cpu fan management only. You can skip this process if you don't have any casing fans attached to the motherboard

JXOS will try to automatically detect the correct Linux PWM sensors module in the motherboard but in most cases, a manual detection and setup
is required to get the right kernel module loaded.

In case you need a manual detection, at the machine `Terminal` you can invoke :

```bash
sudo sensors-detect
```

and follow the script instruction to copy the correct module name to rc.local where it will be loaded automatically at the next boot.





