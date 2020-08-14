const path = require('path');

var leaf_logo = 'img/logo4light_mode.png'
var leaf_favicon_light = 'img/icon4dark_mode.png'

var leaf_logo_dark = 'img/logo4dark_mode.png'
var leaf_favicon_dark = 'img/icon4light_mode.png'


module.exports = {
  title: 'Leaf',
  tagline: 'The easiest way to connect agriculture data across platforms',

  organizationName: 'leaf-agriculture',
  projectName: 'docs',

  baseUrl: '/docs/',
  url: 'https://leaf-agriculture.github.io',
  favicon: leaf_favicon_light,

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'logo',
        src: leaf_logo,
        srcDark: leaf_logo_dark,
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
          homePageId: 'getting_started_overview',
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
