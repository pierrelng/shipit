module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/prod',
      repositoryUrl: 'git@github.com:pierrelng/shipit.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: '~/.ssh/config',
      shallowClone: true
    },
    staging: {
      servers: 'pedro@ftp.haruapp.fr'
    }
  });
};
