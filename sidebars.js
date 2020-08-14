// introduction
// auth
// sat
// field
// operations
// converters
// get credentials


module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting_started_overview', 'getting_started_endpoints',
      ]
    },
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
    },
    // {
    //   type: 'category',
    //   label: 'Guide',
    //   items: [
    //     'operations_endpoints',
    //   ],
    // }
    // {
    //   type: 'category',
    //   label: 'API Reference',
    //   items: [
    //     '500-converter',
    //     '501-operations',
    //     '502-satellite',
    //   ],
    // },
  ],
}
