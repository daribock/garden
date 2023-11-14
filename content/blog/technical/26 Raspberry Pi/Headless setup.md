---
title: Headless setup
date: "2022-10-01"
draft: false
tags:
  - seed
---

## Just install Raspberry Pi Imager

https://www.raspberrypi.com/software/

## Long tutorial

### 1. Flash drive

### 2. Configure WLAN and SSH

#### WLAN

For the Wlan configuration to automatically take place you need to add a file
called `wpa_supplicant.conf` to the root of the `boot` folder and add to it
following lines:

```Vim
country=DE
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
network={
    ssid="WLAN_Name"
    psk="WLAN_Password"
    key_mgmt=WPA-PSK
}
```

#### SSH

To connect to the pi by SSH you have to an empty file called `SSH` to root of
the `boot` folder

https://stackoverflow.com/questions/71804429/raspberry-pi-ssh-access-denied

- Add `userconf`
- with these lines:

```Vim

```

### 3. Start and connect to pi

default via 192.168.2.1 dev wlan0 proto dhcp src 192.168.2.199 metric 303
