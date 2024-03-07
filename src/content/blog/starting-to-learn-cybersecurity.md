---
title: Starting to Learn Cybersecurity
excerpt: Learning cybersecurity is one of my top goals. To achieve it, I wanted to get ahead of my formation by starting learning and practicing pentesting knowledge. There are a lot of ressources on the Internet but here, I will go through every website and tool that I tried and wanted to share as a good start in cybersecurity.
publishDate: 'Mar 6 2024'
featureImage:
  src: '/hacking.jpg'
  alt: padlock and keys from keyboard
seo:
  image:
    src: '/hacking.jpg'
--- 

Learning cybersecurity is one of my top goals. To achieve it, I wanted to get ahead of my formation by starting learning and practicing pentesting knowledge in a safe and legal environment.
There are a lot of ressources on the Internet but here, I will go through every website and tool that I tried and wanted to share as a good start in cybersecurity.

## TryHackMe
TryHackMe was my very first foot to the world of cybersecurity : https://tryhackme.com/.

In this website, I learned necessary knowledge to properly start with the Complete Beginner path. It includes knowledge such as Computer Networks, Web Hacking Fundamentals and Linux Privilage Escalation.

### Tools learned
1. **Burp Suite Community Edition** 
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.tryhackme.com%2Fimg%2Fmodules%2Fburp-suite.png&f=1&nofb=1&ipt=b621011e77bd94309d4cb1b91db3223526bb838f50f9794235dbc1ac888d8a24&ipo=images" alt="Burp Suite" style="width: 20%; height: 20%; margin-right: 10px;">
An excellent tool to find flaws on websites and modifying requests.



2. **Wireshark:** 
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F209%2F414%2F543%2Fwireshark-packet-analyzer-computer-icons-network-packet-communication-protocol-shark-head.jpg&f=1&nofb=1&ipt=0069ed72d0c282558e1940ff2190c5b3254b4c72001d60bd88b6fa53b07c2c9d&ipo=images" alt="Wireshark" style="width: 20%; height: 20%; margin-right: 10px;">

Useful to analyse exchanges on your network and seeing in live how TCP and other protocols work.


3. **Metasploit:** 
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Fdetail%2F24-249625_metasploit-logo.png&f=1&nofb=1&ipt=549c09a20bf9d8b267d4861414f5e5c0e1d02a086fbac621be5a6a2adfd6ae81&ipo=images" alt="Metasploit" style="width: 20%; height: 20%; margin-right: 10px;">
To provide payloads and performe solid pentesting access.

4. **Pentesting tools:** 
<div style="display: flex;">
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Flwgatsby%2Ff_auto%2Fwww%2Fuploads%2F2020%2F04%2Fnmap-logo-256x256-1.png&f=1&nofb=1&ipt=0ee4763a476ac7dc3fcf7d5bf60615da92b970e242eabc9275d1b81f9d2757e4&ipo=images" alt="Nmap" style="width: 20%; height: 20%; margin-right: 10px;">

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.arsouyes.org%2Fblog%2F2019%2F55_BruteForce_IP8815_Hydra%2FHydra_Logo.png&f=1&nofb=1&ipt=51d4b58eb763c2dbdf74d765bfa12149cf5cc54749c3bed316b8092d6d839fe5&ipo=images" alt="Hydra" style="width: 20%; height: 20%; margin-right: 10px;">

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftzusec.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fjohn-279x300.png&f=1&nofb=1&ipt=112b3111b850bda2e60d02b55b0f28d52c696b6d84f4b8dd144a7bfd07b86e1c&ipo=images" alt="John The Ripper" style="width: 20%; height: 20%; margin-right: 10px;">
</div>

Enumerating ports with nmap, Brute-forcing with Hydra, password cracking with John The Ripper and more.

I also completed some CTFs rooms that gave me some experience of conducting a pentesting attack. <br>

To find more about what I did, you can check my profile on TryHackMe [here](https://tryhackme.com/p/bypasscat).

## PortSwigger

As I crawled to download Burp Suite, I found these incredible ressources from its creators : https://portswigger.net/web-security/all-topics.

There are a lot of labs and learning material in all that concern web attacks, such as SQL Injection, Cross-site scripting (XSS) or file upload vulnerabilities. <br>
I only took a part of SQL injection and XSS but I will definitely check this website out for learning more about web security.


## OWASP Top 10 and OWASP Juice Shop

While I was learning about web attacks on TryHackMe, there was a specific section about OWASP Top 10 attacks.

To practice them, OWASP made a web application full of flaws so you can install locally on your computer and test your knowledge on these web-based attacks. You can find it on their GitHub : https://github.com/juice-shop/juice-shop.

I installed it and started to practice around these attacks on small flaws of the application.

There is also a leaderboard hidden that list every flaw of the application, sorted by level of difficulty. I made all the challenges of level 1 and 2, and thought about some level 3 challenges but I found myself still lacking some knowledge.

I would highly recommand this OWASP Juice Shop to anyone who wants to practice web security and already has some medium knowledge, for example from PortSwigger website.

## What's next ?

As I started to gather knowledge about some kind of attacks, I would need some more experience in the field. So, I'm looking forward to doing more CTFs on TryHackMe and trying to complete every difficulty.

To continue my learning path, I am considering three majors roads:
- Starting free modules on [HackTheBox Academy](https://academy.hackthebox.com/modules).
- Increase my web exploitation skill by doing labs on [PortSwigger](https://portswigger.net/web-security/all-topics).
- Aim for the [eJPT certification](https://security.ine.com/certifications/ejpt-certification/). 

For now, I'm mostly interested on becoming an ethical pentester but the sector is broad and I might be interested in another cybersecurity-related job in the future.


