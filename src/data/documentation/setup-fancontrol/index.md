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


###Specific Motherboard

These specific motherboards cannot be detected by `sensors-detect`, manual configuration is needed.

You need to edit `/etc/modules` and append the right kernel module as the table below.

example for MSI Z270 GamingPro motherboard entry :
```bash
nct6775 force_id=0xd120
```

or use `modprobe nct6775 force_id=0xd120` to load the module and place it on `/etc/rc.local` file.

If you are using rc.local file, don't forget to :
1. Make it executable using `sudo chmod +x /etc/rc.local`
2. use `systemctl enable rc.local` to start the script during booting process
3. always ends rc.local with `exit 0`


| Motherboard            | Modules |
|:-----------------------|:--------------------------------------------------|
| MSI Z270 GamingPro     | modprobe nct6775 force_id=0xd120  |


