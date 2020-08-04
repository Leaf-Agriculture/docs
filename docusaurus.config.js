const path = require('path');

module.exports = {
  title: 'Leaf',
  tagline: 'The easiest way to connect agriculture data across platforms',

  organizationName: 'leaf-agriculture',
  projectName: 'docs',

  baseUrl: '/',
  url: 'https://leaf-agriculture.github.io/docs',
  favicon: 'img/favicon.ico',

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },

      items: [
        {
          to: 'docs/',
          activeBasePath: './docs',
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
          homePageId: '000-introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Leaf-Agriculture/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Leaf-Agriculture/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
}
