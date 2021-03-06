---
category: Installation
title: Image Disk File Installation
---

>An empty space of 8GB minimum with recommended of 10GB empty space is required for installing this image file

### File Decompression

Image media is a disk image created using linux dd tools and compressed with xz compression tools.

In order to install it, you must extract the file using xz decompression tools such as :

| Operating System       | Software                                          |
|:-----------------------|:--------------------------------------------------|
| **Windows OS**         | [Open XZ](http://www.unziplite.com/open-xz/)      |
| **OSX**                | [Unarchiver](https://theunarchiver.com/)          |
| **Ubuntu**             | `sudo apt install xz-utils`                       |

    
***

### Write File to SSD

>It is highly recommended to use SSD as the target source instead of USB flash disk for this installation method, use the LiveISO method if you must use USB Flash disk.

When the decompression complete, you should receive an .img file which then can be written to SSD via tool such as :

| Operating System       | Software                                          |
|:-----------------------|:--------------------------------------------------|
| **Windows OS**         | [Rufus](https://rufus.ie/)                        |
| **OSX**                | [Etcher](https://www.balena.io/etcher/)           |
| **Ubuntu**             | `sudo dd if=/path/to/iso of=/dev/sdx`             |


Rufus provides a straight forward process for writing the iso file content to the target disk, you just need to 
select the SSD drive and the Iso source file and begin the imaging process.


Under Linux, you can invoke dd command such as :

```bash
sudo dd if=/path/to/iso of=/dev/sdx
```
where sdx is the SSD target listed in linux `/dev/` folder


***

### Increase root partition

Upon installation completion, you may need to enlarge the root partition for more space storage by using tool such as `parted`



