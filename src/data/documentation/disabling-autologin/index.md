---
category: Tweaks
title: Disable AutoLogin
---

You can disable the automatic login process and force JXOS to display the login message at terminal by disabling the `NoDM` systemd service:

```bash
sudo systemctl disable nodm
```

and to re-enable it again :

```bash
sudo systemctl enable nodm
```

to completely remove it :

```
sudo apt remove nodm
```








