module.exports = {
  docs: [
    'welcome',
    'quickstart',
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'introduction',
        'authentication',
        {
          type: 'category',
          label: 'Leaf User',
          items: ['user_management_overview', 'user_management_endpoints']
        },
        {
          type: 'category',
          label: 'Configurations',
          items: ['configurations_overview', 'configurations_endpoints']
        },
        {
          type: 'category',
          label: 'Field Boundaries',
          items: ['field_boundaries_overview', 'field_boundaries_endpoints']
        },
        {
          type: 'category',
          label: 'Machine Operation Data',
          items: ['operations_overview', 'operations_endpoints']
        },
        {
          type: 'category',
          label: 'Satellite',
          items: ['satellite_overview', 'satellite_endpoints']
        },
        {
          type: 'category',
          label: 'File Converters',
          items: ['converters_overview', 'converters_endpoints']
        },
      ],
    }
  ]
}
