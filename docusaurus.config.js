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
    googleAnalytics: {
     trackingID: 'UA-151987025-2',
     // Optional fields.
     // anonymizeIP: true, // Should IPs be anonymized?
     },
    // prism: {
    //   theme: require('prism-react-renderer/themes/leaf'),
    // },
    navbar: {
      logo: {
        alt: 'logo',
        src: leaf_logo,
        srcDark: leaf_logo_dark,
        href: '/docs/docs'
        // href: 'https://withleaf.io'
      },

      items: [
        // begin workaround to center navigation items
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // end workaround to center navigation items
        // {
        //   to: 'https://withleaf.io/register/',
        //   activeBasePath: './',
        //   label: 'Products',
        //   position: 'left',
        // },
        {
          to: 'https://withleaf.io',
          activeBasePath: './',
          label: 'Website',
          position: 'left',
        },
        // {
        //   to: 'https://withleaf.io/pricing/',
        //   activeBasePath: './',
        //   label: 'Pricing',
        //   position: 'left',
        // },
        {
          to: 'https://withleaf.io/company/careers/',
          activeBasePath: './',
          label: 'Work with us',
          position: 'left',
        },
        {
          to: 'https://withleaf.io/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'https://withleaf.io/account/quickstart',
          activeBasePath: './',
          label: 'Register',
          position: 'left',
        },
        {
          href: 'https://github.com/Leaf-Agriculture/docs',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/leaf-agriculture',
        //   label: 'Log in',
        //   position: 'right',
        // },
        // {
        //   href: 'https://github.com/leaf-agriculture',
        //   label: 'Get API keys',
        //   position: 'right',
        // },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'welcome',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Leaf-Agriculture/docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://youtu.be/gXVfKrud49c?t=73',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
}
