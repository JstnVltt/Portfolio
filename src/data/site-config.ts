export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    mailto: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: '/Portfolio/ovidius-preview.jpg',
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/Portfolio/'
        },
        {
            text: 'Projects',
            href: '/Portfolio/blog'
        },
        {
            text: 'About',
            href: '/Portfolio/about'
        },
        {
            text: 'Contact',
            href: '/Portfolio/contact'
        }/* ,
        {
            text: 'Download CV',
            href: ''
        } */
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/Portfolio/about'
        },
        {
            text: 'Terms of Service',
            href: '/Portfolio/terms'
        },
        {
            text: 'Contact',
            href: '/Portfolio/contact'
        }/* ,
        {
            text: 'Download CV',
            href: ''
        } */
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://github.com/JstnVltt',
            icon: 'github'
        },
        {
            text: 'Connect on LinkedIn',
            href: 'https://www.linkedin.com/in/justin-valette-826054252/',
            icon: 'linkedin'
        }
    ],
    hero: {
        title: 'Hello!',
        text: "My name is Justin VALETTE. I'm a computer science student based in Bordeaux, France. It's a pleasure to meet you!",
        avatar: {
            src: '/Portfolio/photo.jpeg',
            alt: 'Justin Case'
        },
        backgroundImage: {
            src: '/Portfolio/hero.webp'
        }
    },
    subscribe: {
        title: 'Let\'s keep in touch!',
        text: 'Tell me about your impressions and recommandations',
        mailto: 'mailto:justin.valette@bordeaux-inp.fr?subject=Subject%20of%20the%20email&body=Hello%20Justin%2C%0A%0AI%20would%20like%20to%20contact%20you%20about ...'
    },
    postsPerPage: 5
};

export default siteConfig;
