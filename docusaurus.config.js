// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    ('@docusaurus/theme-live-codeblock'),
    
  ],
  title: 'Infrastructure as code',
  tagline: 'workshop',
  url: 'https://ikdoeict.gitlab.io',
  baseUrl: '/docenten/2122_infrastructure_as_code/iac-projecten-git/iac-project-git-team8/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ikdoeict.png',
  organizationName: 'ikdoeict', // Usually your GitHub org/user name.
  projectName: 'proejct-iac', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitlab.com/ikdoeict/docenten/2122_infrastructure_as_code/iac-projecten-git/iac-project-git-team8/',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Infrastructure as code',
        logo: {
          alt: 'ikdoeict',
          src: 'img/ikdoeict.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'left',
            label: 'Mini-CTF Workshop',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Workshop',
                to: '/',
              },
            ],
          },
          
          {
            title: 'More',
            items: [
              {
                label: 'website',
                to: 'https://www.odisee.be',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/ikdoeict',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Odisee-opleiding Elektronica-ict, built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['markdown', 'java', 'csharp']

      },
    }),
};

module.exports= config