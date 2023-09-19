---
draft: true
tags: 
- seed
---

# Printserver

created at: [[2022-10-01]]

---

Reference: https://howchoo.com/pi/wireless-printer-raspberry-pi#install-raspberry-pi-os

## 1. Setup pi

Have a look at the [[Setup]] guide I made.

## 2. Install and configure cups

```Bash
sudo apt-get install cups
```

### Set permission

```Bash
sudo cupsctl --remote-any
```

### Start cups

```Bash
sudo /etc/init.d/cups start
```

## 3. Set static IP-adress

Because we don't want the Ip-Adress of our printserver (raspberry pi) to change every now and then. We will set a static IP-Adress for the printserver

Follow this guide: https://howchoo.com/pi/configure-static-ip-address-raspberry-pi

## 4.
