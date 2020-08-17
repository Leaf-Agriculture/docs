const path = require('path');

const leaf_logo = 'img/logo4light_mode.png'
const leaf_favicon_light = 'img/icon4dark_mode.png'

const leaf_logo_dark = 'img/logo4dark_mode.png'
const leaf_favicon_dark = 'img/icon4light_mode.png'


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
    // prism: {
    //   theme: require('prism-react-renderer/themes/leaf'),
    // },
    navbar: {
      logo: {
        alt: 'logo',
        src: leaf_logo,
        srcDark: leaf_logo_dark,
      },

      items: [
        // begin workaround to center navigation items
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // end workaround to center navigation items
        {
          to: 'docs/',
          activeBasePath: './',
          label: 'Products',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: './',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: './',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: './',
          label: 'Company',
          position: 'left',
        },
        // {
        //   to: 'https://medium.com/leaf-agriculture',
        //   label: 'Medium',
        //   position: 'left'
        // },
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
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Leaf-Agriculture',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Leaf-Agriculture',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
}
