var ghpages = require('gh-pages');

ghpages.publish('build',{
    branch: 'gh-pages',
  }, function(err) {});