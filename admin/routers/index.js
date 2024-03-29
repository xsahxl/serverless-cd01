const router = require('express').Router();
const debug = require('debug')('serverless-cd:root');

const defaultRoutes = [
  {
    path: '/auth',
    route: require('./auth'),
  },
  {
    path: '/user',
    route: require('./user'),
  },
  {
    path: '/org',
    route: require('./org'),
  },
  {
    path: '/application',
    route: require('./application'),
  },
  {
    path: '/task',
    route: require('./task'),
  },
  {
    path: '/dispatch',
    route: require('./dispatch'),
  },
  {
    path: '/github',
    route: require('./code-provider/github'),
  },
  {
    path: '/common',
    route: require('./common'),
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
