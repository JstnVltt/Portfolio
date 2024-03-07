---
title: A New Series of Capture The Flag using Docker
excerpt: I wanted to learn how to use Docker since it's an important tool in nowadays IT environment. Since my goal is to work in cybersecurity, I was thinking "Why not doing so by creating some CTFs ?".
publishDate: 'Mar 5 2024'
featureImage:
  src: '/bateau.jpg'
  alt: Boat
isFeatured: true
seo:
  image:
    src: '/docker.avif'
---

**Technologies** : Docker

I wanted to learn how to use Docker since it's an important tool in nowadays IT environment. Since my goal is to work in cybersecurity, I was thinking : "Why not doing so by creating some CTFs ?".

## CTF (Capture The Flag)

You can find my CTFs on my GitHub : https://github.com/JstnVltt/ctf. 

The concept is quite simple. I made a base machine where I install all the packages needed for every CTF called **ctf_base**. This is meant to add modularity and reduce time of creating each CTF image.

Then, each CTF is named **ctf_1**, **ctf_2**, ... and import my base to be operational. I just need to change, for each of them, how I configure the machine regarding the challenge I want to input.

## What did I learn ?
The hardest part on this project was to understand how Docker *really* works.<br>
Learning the basics was like every other subject. You have to focus and learn new terminology. You try and it starts to work.

But I had a hard time to understand how I could use the base to build the other CTF, even though I knew theorically. In addition, it was the first time I used DockerHub and I also wanted to use GitHub so I needed to figure out how to make my CTF the most easy for the user to play.

After knowing this, adding new CTF is much easier, as it only asks from you to have ideas about a specific challenge you want to incorporate in the CTF.

Finally, I think I learned a lot about Docker, DockerHub and how to package my CTFs into GitHub.

If you have any recommendations about my CTFs or about the way I did, email me at [justin.valette@bordeaux-inp.fr](mailto:justin.valette@bordeaux-inp.fr) and I will happy to see how you would do it!


