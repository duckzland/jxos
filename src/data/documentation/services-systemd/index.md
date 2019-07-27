---
category: Service Configuration
title: Systemd Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is for configuring systemd parser.

Jxminer systemd service will continuously parsing systemd log and reboot the machine if any of the configured phrases found.
This is for rebooting the machine when GPU crashes.

```bash
[settings]
enable: true
reboot_phrases: NVRM: A GPU crash dump has been created
                Failed to allocate display engine core DMA push buffer
                [drm] GPU recovery disabled
```


[Back to service file listing](/jxminer-config#services)





