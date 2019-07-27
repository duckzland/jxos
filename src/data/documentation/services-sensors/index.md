---
category: Service Configuration
title: Sensors Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is for blacklisting linux kernel sensors that is not supported by jxminer

This file is for only blacklisting the kernel sensors module, some of the kernel sensors module is not supported by jxminer.
Example of generic sensors that should be blacklisted:

```bash
[blacklisted]
acpitz
coretemp
amdgpu
```

[Back to service file listing](/jxminer-config#services)





