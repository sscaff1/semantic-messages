Package.describe({
  name: 'sscaff1:semantic-messages',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple package to display flash messages using semantic-ui',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'semantic:semantic-ui',
    'minimongo',
    'mongo-livedata',
    'templating'
  ], 'client');

  api.addFiles([
    'messages.js',
    'messages.css',
    'semantic-messages.html',
    'semantic-messages.js',
  ], 'client');

  if (api.export) {
    api.export('Messages')
  }
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sscaff1:semantic-messages');
  api.addFiles('semantic-messages-tests.js');
});
