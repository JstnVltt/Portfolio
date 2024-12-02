---
title: Learning IDS / IPS Tools with Suricata
excerpt: Learning offensive cybersecurity is great, but developping skills in defensive cybersecurity could also be interesting. Let's give it a try!
publishDate: 'Dec 1 2024'
featureImage:
  src: '/Portfolio/camera.jpg'
  alt: Camera
isFeatured: true
seo:
  image:
    src: '/Portfolio/docker.avif'
---

**Technologies** : Suricata, VirtualBox

Intrusion Detection Systems / Intrusion Prevention System (IDS / IPS) are widely used tools in the context of defensive cybercurity. And because a lot of companies are using it, why not become more
familiar with this by practising one of the top used IDS / IPS, Suricata, on a personal project ? 

The attack scenario I created is the following : the attacker would ping the server, then proceed to lauch an Nmap scan to discover open ports and finally, he will discover an open SSH port 
(port 22), which he will bruteforce with Hydra.

# Setup
## Environment
To setup this project, I created with VirtualBox two machines :

- one Ubuntu to be the server.
- one Kali Linux to serve in the role of attacker. 

The two machines were updated and put on a bridge network setup to be able to communicate to each other. I installed Suricata on the Ubuntu server and configured some alert rules to detect unusual activity.

## Rules
The rules are located in the repertory **/etc/suricata/rules/**. We created a file **local.rules** that contains verifications regarding the pings, the scans through Nmap and repetitive connections through SSH.

**local.rules**

	# Ping
	drop icmp any any -> any any (msg:"Ping detected"; itype:8; sid:2; classtype:icmp-event; rev:1;)

	# Nmap connection
	alert tcp any any -> any any (msg:"Nmap SYN Scan"; flags:S; classtype:intrusion-low; threshold, track by_src, count 20, seconds 3; sid:1000002;)

	# SSH
	## Multiple unsuccessful attempts
	alert tcp any any -> any 22 (msg: "Potential SSH Brute"; classtype:attempted-recon; flow:to_server; flags:S,12; threshold:type both, track by_src, count 3, seconds 2; sid:1000009; rev:1;)
	alert tcp any any -> any 22 (msg: "Potential SSH Brute"; classtype:attempted-recon; flow:to_server; flags:S,12; threshold:type both, track by_src, count 3, seconds 5; sid:1000009; rev:1;)
	alert tcp any any -> any 22 (msg: "Potential SSH Brute"; classtype:attempted-recon; flow:to_server; flags:S,12; threshold:type both, track by_src, count 3, seconds 5; sid:1000009; rev:1;)

I also added a classification in **/etc/suricata/classification.config** to personnalize the handling of priority.

	config classification: intrusion-low, Nmap or other attempt to gain information, 2

# Results

## Ping

The attacker is, at first, pinging the Ubuntu server to see if it's available.

<img src="/Portfolio/ping_attacker.PNG" alt="ping" style="width: 100%; height: 20%; margin-right: 10px;">

We correctly receive alerts on the file **/var/log/suricata/fast.log** by performing the command **tail -f /var/log/suricata/fast.log** : "Ping detected". As it's "just" pings, we evaluate 
these requests as low-importance priority (Priority 3).

<img src="/Portfolio/ping.PNG" alt="ping" style="width: 100%; height: 20%; margin-right: 10px;">


## Nmap
The attacker wants now to know more about open ports and proceed to an Nmap with various parameters.

<img src="/Portfolio/nmap_attacker.PNG" alt="nmap" style="width: 100%; height: 20%; margin-right: 10px;">

The defender correctly receives the attempt of discovering open ports with "Nmap SYN scan" messages, with medium-importance priority (Priority 2).

<img src="/Portfolio/nmap.PNG" alt="nmap" style="width: 100%; height: 20%; margin-right: 10px;">

## Bruteforce with Hydra
Finally, the attacker wants to perform a bruteforce of the ssh connexion for the user "admin".

<img src="/Portfolio/hydra_attacker.PNG" alt="hydra" style="width: 100%; height: 20%; margin-right: 10px;">

This bruteforce is correctly received as well by the server on several occasions, with medium-importance priority.

<img src="/Portfolio/hydra.PNG" alt="hydra" style="width: 100%; height: 20%; margin-right: 10px;">


# Improvements
On the SSH attemps, I didn't really found how to consistently detect bruteforce every seconde or couple of secondes so I had to add manually multiple lines to have multiple detections.

However, overall, this project was fun and very instructive on how an IDS / IPS works based on a possible scenario attack.




