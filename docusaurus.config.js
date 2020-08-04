const path = require('path');

module.exports = {
  plugins: [require.resolve('docusaurus-lunr-search')],

  title: 'Leaf Agriculture',
  tagline: 'The easiest way to connect agriculture data across platforms.',
  url: 'https://leaf-agriculture.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'leaf-agriculture', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  themeConfig: {
    navbar: {
      title: 'Leaf',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'https://medium.com/leaf-agriculture',
          label: 'Medium',
          position: 'left'
        },
        {
          href: 'https://github.com/leaf-agriculture',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: '000-introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
}
