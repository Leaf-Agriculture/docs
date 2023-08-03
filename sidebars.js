module.exports = {
  docs: [
    'welcome',
    'quickstart',
    'release_notes',
    'glossary',
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'introduction',
        'authentication',
        'setup_information',
        {
          type: 'category',
          label: 'Configurations',
          items: ['configurations_overview', 'configurations_endpoints']
        },
        {
          type: 'category',
          label: 'Alerts',
          items: ['alerts_overview', 'alerts_endpoints', 'alerts_events', 'alerts_authentication']
        },
        {
          type: 'category',
          label: 'Leaf User',
          items: [
            'user_management_overview',
            'user_management_endpoints',
          ]
        },
        {
          type: 'category',
          label: 'Provider Authentication',
          items: [
            'provider-authentication-overview',
            {
              type: 'category',
              label: 'Providers credentials',
              items: [
                'credentials_john_deere',
                'credentials_cfv',
                'credentials_cnhi',
                'credentials_trimble',
                'credentials_raven',
                'credentials_raven_slingshot',
                'credentials_agleader',
                'credentials_stara',
                'credentials_sentera',
                'credentials_agvance'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Field Boundary Management',
          items: ['field_boundary_management_overview', 'field_boundary_management_endpoints']
        },
        {
          type: 'category',
          label: 'Machine File Conversion',
          items: ['machine_file_conversion_overview', 'machine_file_conversion_endpoints', 'machine_file_conversion_sample_output', 'machine_file_conversion_crops_table']
        },
        {
          type: 'category',
          label: 'Field Operations',
          items: ['operations_overview', 'operations_endpoints', 'operations_sample_output']
        },
        {
          type: 'category',
          label: 'Manual File Upload',
          items: ['converters_overview', 'converters_endpoints']
        },
        {
          type: 'category',
          label: 'Crop Monitoring',
          items: ['crop_monitoring_overview', 'crop_monitoring_sentinel_overview',  'crop_monitoring_planet_overview',  'crop_monitoring_endpoints']
        },
        {
          type: 'category',
          label: 'Weather',
          items: [
            'weather_overview',
            'weather_endpoints',
          ]
        },
        {
          type: 'category',
          label: 'Leaf Connect',
          items: [
            'connect',
          ]
        },
        {
          type: 'category',
          label: 'Beta',
          items: [
            'beta_features_overview',
            {
              type: 'category',
              label: 'Assets',
              items: ['beta_assets_endpoints']
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
            {
              type: 'category',
              label: 'Leaf Link',
              items: [
                'Link_provider_connection',
                'Link_file_upload',
                'Link_endpoints'
              ]
            }
          ]
        },
      ],
    }
  ]
}
