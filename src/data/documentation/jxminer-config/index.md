---
category: Configuration
title: Configuring JXMiner
---

If you need to manually edit the configuration files, you can edit the files under `/home/jxminer/.jxminer` directory.

  

> It is not recommended to edit files from `/etc/jxminer` as it will get overwritten when updating JXMiner.  

      
***
    

#### SERVICES CONFIGURATION

The service configuration files is located at `/home/jxminer/.jxminer/config` folder   



| Files                  | Description                                       |
|:-----------------------|:--------------------------------------------------|
| **coins.ini**          | library of coins, wallet addresses and algorithm  |
| **fans.ini**           | casing and CPU fan speed and curve config file    |
| **machine.ini**        | main file for configuring what coins to mine      |
| **notification.ini**   | reserved for future notification service          |
| **sensors.ini**        | file for blacklisting pwm sensors module          |
| **slack.ini**          | slack notification information                    |
| **systemd.ini**        | watchdog via systemd notification                 |
| **tuner.ini**          | GPU tuning configuration file                     |
| **watchdog.ini**       | watchdog configuration file                       |
    
    
***
    
#### MINERS CONFIGURATION

The miners configuration files is located at `/home/jxminer/.jxminer/miners` folder


| Files                  | Description                                       |
|:-----------------------|:--------------------------------------------------|
| **amdxmrig.ini**       |                                                   |
| **avermore.ini**       |                                                   |
| **castxmr.ini**        |                                                   |
| **ccminer.ini**        |                                                   |
| **cpuxmrig.ini**       |                                                   |
| **cryptodrege.ini**    |                                                   |
| **ethminer.ini**       |                                                   |
| **ewbf.ini**           |                                                   |
| **nvidiaxmrig.ini**    |                                                   |
| **phoenixminer.ini**   |                                                   |
| **sgminer.ini**        |                                                   |
| **teamredminer.ini**   |                                                   |
| **trex.ini**           |                                                   |
| **wildrig.ini**        |                                                   |
    

    
***    
    
    
#### POOLS CONFIGURATION


The pools configuration files is located at `/home/jxminer/.jxminer/pools` folder


| Files                  | Description                                       |
|:-----------------------|:--------------------------------------------------|
| **2miners.ini**        |                                                   |
| **blockcruncher.ini**  |                                                   |
| **coinmine.ini**       |                                                   |
| **dwarfpool.ini**      |                                                   |
| **flypool.ini**        |                                                   |
| **lethean.ini**        |                                                   |
| **minepool.ini**       |                                                   |
| **minermore.ini**      |                                                   |
| **nanopool.ini**       |                                                   |
| **pickaxe.ini**        |                                                   |
| **ravenminer.ini**     |                                                   |
| **turtlepool.ini**     |                                                   |

    
 



