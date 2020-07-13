
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/leaf/',
  component: ComponentCreator('/leaf/'),
  exact: true,
  
},
{
  path: '/leaf/blog',
  component: ComponentCreator('/leaf/blog'),
  exact: true,
  
},
{
  path: '/leaf/blog/hello-world',
  component: ComponentCreator('/leaf/blog/hello-world'),
  exact: true,
  
},
{
  path: '/leaf/blog/hola',
  component: ComponentCreator('/leaf/blog/hola'),
  exact: true,
  
},
{
  path: '/leaf/blog/tags',
  component: ComponentCreator('/leaf/blog/tags'),
  exact: true,
  
},
{
  path: '/leaf/blog/tags/docusaurus',
  component: ComponentCreator('/leaf/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/leaf/blog/tags/facebook',
  component: ComponentCreator('/leaf/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/leaf/blog/tags/hello',
  component: ComponentCreator('/leaf/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/leaf/blog/tags/hola',
  component: ComponentCreator('/leaf/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/leaf/blog/welcome',
  component: ComponentCreator('/leaf/blog/welcome'),
  exact: true,
  
},
{
  path: '/leaf/docs',
  component: ComponentCreator('/leaf/docs'),
  exact: true,
  
},
{
  path: '/leaf/docs/:route',
  component: ComponentCreator('/leaf/docs/:route'),
  
  routes: [
{
  path: '/leaf/docs/auth',
  component: ComponentCreator('/leaf/docs/auth'),
  exact: true,
  
},
{
  path: '/leaf/docs/converter',
  component: ComponentCreator('/leaf/docs/converter'),
  exact: true,
  
},
{
  path: '/leaf/docs/intro',
  component: ComponentCreator('/leaf/docs/intro'),
  exact: true,
  
},
{
  path: '/leaf/docs/satellite',
  component: ComponentCreator('/leaf/docs/satellite'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
