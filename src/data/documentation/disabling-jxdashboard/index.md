---
category: Tweaks
title: Disabling JXDashboard
---

You can stop the JXDashboard from being loaded at X startup by editing `/home/jxminer/.config/awesome/rc.lua` and commenting out the invoking code:

```bash
#awful.spawn("jxdashboard", {
#    tag= t,
#    screen = s,
#})
```


to completely remove JXDashboard you can use apt to remove it :

```bash
apt remove jxdashboard
```







