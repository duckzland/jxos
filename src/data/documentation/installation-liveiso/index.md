---
category: Installation
title: LiveISO Installation
---

> Minimum 2GB of USB flash is required and for fast performance and USB3 capability is recommended.

LiveISO method will provide you with .iso file that can be written to USB flash disk via tools such as :

| Operating System       | Software                                          |
|:-----------------------|:--------------------------------------------------|
| **Windows OS**         | [Rufus](https://rufus.ie/)                        |
| **OSX**                | [Etcher](https://www.balena.io/etcher/)           |

    
Under Rufus the process to write the iso to the flash disk is straight forward, you just need to select 
the iso file as the source and the USB flash disk as the target.


***

### Persistent state

Additional step is needed to create a persistent state of the LiveUSB, the persistent state will keep any
changes made while using the LiveUSB which is important for saving the miner configuration state.

To create the persistent state, after the flashing process using Rufus or Etcher completes, download the 
[Pendrive Casper RW Creator for Window OS](https://www.pendrivelinux.com/downloads/Casper-RW-Creator/PDL-Casper-RW-Creator.exe).

Upon download completed, open the exe file and choose the right size for the persistent file storage. 

> To Avoid overwritten by mistake, only use the space left after the iso image as the maximum file size available.







