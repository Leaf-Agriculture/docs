module.exports = {
  docs: [
    'welcome',
    'quickstart',
    'release_notes',
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'introduction',
        'authentication',
        'pagination',
        {
          type: 'category',
          label: 'Leaf User',
          items: [
            'user_management_overview',
            'user_management_endpoints',
            {
              type: 'category',
              label: 'Providers credentials',
              items: [
                'credentials_john_deere',
                'credentials_cfv',
                'credentials_cnhi',
                'credentials_trimble'
                'credentials_raven',
                'credentials_raven_slingshot',
                'credentials_agleader',
                'credentials_stara',
                'credentials_sentera'
              ]
            }
          ]
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
          label: 'Field Operations',
          items: ['operations_overview', 'operations_endpoints', 'operations_sample_output']
        },
        {
          type: 'category',
          label: 'Machine Operation Data',
          items: ['files_overview', 'files_endpoints', 'files_sample_output', 'files_density_table']
        },
        {
          type: 'category',
          label: 'Satellite',
          items: ['satellite_overview', 'sentinel_overview',  'planet_overview',  'satellite_endpoints']
        },
        {
          type: 'category',
          label: 'File Converters',
          items: ['converters_overview', 'converters_endpoints']
        },
        {
          type: 'category',
          label: 'Alerts',
          items: ['alerts_overview', 'alerts_endpoints', 'alerts_events', 'alerts_authentication']
        },
        {
          type: 'category',
          label: 'Beta',
          items: [
            'beta_features_overview',
            {
              type: 'category',
              label: 'Machines',
              items: ['beta_machines_endpoints']
            },
            {
              type: 'category',
              label: 'Prescriptions',
              items: ['beta_prescriptions_endpoints']
            },
            {
              type: 'category',
              label: 'Layers',
              items: ['beta_layers_endpoints']
            },
          ]
        },
      ],
    }
  ]
}
