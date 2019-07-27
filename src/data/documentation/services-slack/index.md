---
category: Service Configuration
title: Slack Configuration
---

This file is located at `/home/jxminer/.jxminer` and it is for configuring slack integration to jxminer

In order to use slack integration :
- Register to slack
- create a slack channel
- create a slack apps and attach it to slack channel
- create a slack bot and attach it to slack channel
- activate incoming webhook and point it to slack channel

[more information about creating slack bots](https://api.slack.com/bot-users)

Example of configuration file for connecting to `slack` for reporting miner status:

```bash
[settings]
enable: false
channel: #mining-message
user: jxminer
token: xoxb-xxxxxx
```


| Options | Value | Description |
|:--------|:------|:------------|
|`enable` | `true|false` | enable or disable the slack integration |
|`channel` | `string` | the valid slack channel to use |
|`user` | `string` | the slack bot username |
|`token` | `string` | the token string provided by slack |

[Back to service file listing](/jxminer-config#services)





