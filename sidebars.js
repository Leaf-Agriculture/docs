module.exports = {
  docs: [
    'getting_started',
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'introduction',
        'authentication',
        {
          type: 'category',
          label: 'Satellite',
          items: ['satellite_overview', 'satellite_endpoints']
        },
        {
          type: 'category',
          label: 'Field Boundaries',
          items: ['field_boundaries_overview', 'field_boundaries_endpoints']
        },
        {
          type: 'category',
          label: 'Operations',
          items: ['operations_overview', 'operations_endpoints']
        },
        {
          type: 'category',
          label: 'Converters',
          items: ['converters_overview', 'converters_endpoints']
        },
      ],
    }
  ]
}
