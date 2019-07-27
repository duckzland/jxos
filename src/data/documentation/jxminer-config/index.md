---
category: Configuration
title: Configuring JXMiner
---

If you need to manually edit the configuration files, you can edit the files under `/home/jxminer/.jxminer` directory.

  

> It is not recommended to edit files from `/etc/jxminer` as it will get overwritten when updating JXMiner.  


***
    

#### SERVICES CONFIGURATION
[](#services)
The service configuration files is located at `/home/jxminer/.jxminer/config` folder   


| Files                  | Description                                       |
|:-----------------------|:--------------------------------------------------|
| [coins.ini](/services-coins)          | library of coins, wallet addresses and algorithm  |
| [fans.ini](/services-fans)           | casing and CPU fan speed and curve config file    |
| [machine.ini](/services-machine)        | main file for configuring what coins to mine      |
| **notification.ini**   | reserved for future notification service          |
| [sensors.ini](/services-sensors)        | file for blacklisting pwm sensors module          |
| [slack.ini](/services-slack)          | slack notification information                    |
| [systemd.ini](/services-systemd)        | watchdog via systemd notification                 |
| [tuner.ini](/services-tuner)          | GPU tuning configuration file                     |
| [watchdog.ini](/services-watchdog)       | watchdog configuration file                       |
    

***


    
#### MINERS CONFIGURATION

The miners configuration files is located at `/home/jxminer/.jxminer/miners` folder


| Files                  | Description                                       |
|:-----------------------|:--------------------------------------------------|
| **amdxmrig.ini**       | XMRig AMD GPU configuration file                  |
| **avermore.ini**       | avermore miner configuration file                 |
| **castxmr.ini**        | castxmr configuration file                        |
| **ccminer.ini**        | ccminer configuration file                        |
| **cpuxmrig.ini**       | XMRig CPU configuration file                      |
| **cryptodrege.ini**    | CryptoDredge configuration file                   |
| **ethminer.ini**       | ethminer configuration file                       |
| **ewbf.ini**           | ewbf miner configuration file                     |
| **nvidiaxmrig.ini**    | XMRig Nvidia GPU configuration file               |
| **phoenixminer.ini**   | PhoenixMiner configuration file                   |
| **sgminer.ini**        | Sgminer configuration file                        |
| **teamredminer.ini**   | teamredminer configuration file                   |
| **trex.ini**           | T-Rex configuration file                          |
| **wildrig.ini**        | wildrig configuration file                        |
    
    
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




