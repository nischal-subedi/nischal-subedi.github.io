import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Nischal's Site",
  tagline: 'Computers are fun~',
  favicon: 'img/favicon.ico',

  url: 'https://nischals.com.np',

  baseUrl: '/',
  
  organizationName: 'nischal',
  projectName: 'nischal-subedi.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Nischal's Site",
      logo: {
        alt: "Nischal's Site Logo",
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://blog.yarsalabs.com/author/nischal',
          label: 'More Blogs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Writings',
          items: [
            {
              label: 'Notes',
              to: '/docs/intro',
            },
            {
              label: 'Blogs',
              to: '/blog',
            },
            {
              label: 'More Blogs',
              href: 'https://blog.yarsalabs.com/author/nischal',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/nischal-subedi',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nischal Subedi, Built with Docusaurus, hosting courtesy of Github (Pages).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
