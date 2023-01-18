/**
 * Route.ts
 * @author HU JIAJUN <e0556371@u.nus.edu>
 * @file Handles requests and responses
 */

import { Router, json, urlencoded } from 'express';

import { BuildConfig } from './core';

export const MOCK_ENDPOINT: boolean = BuildConfig.getFeatureFlag(
  'FEATURE_MOCK_ENDPOINT',
);

const Route = () => {
  const client = './src/client';
  const router: Router = Router();

  router.use(
    urlencoded({
      extended: true,
    }),
  );
  router.use(json());
  router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
  });

  router.get('/css/*', (req, res) => {
    res.sendFile(req.originalUrl, {
      root: client,
    });
  });

  router.get('/js/*', (req, res) => {
    res.sendFile(req.originalUrl, {
      root: client,
    });
  });

  router.get('/assets/*', (req, res) => {
    res.sendFile(req.originalUrl, {
      root: client,
    });
  });

  router.get('/', (_req, res) => {
    res.sendFile('view/index.html', {
      root: client,
    });
  });

  router.get('/index', (_req, res) => {
    res.sendFile('/view/index.html', {
      root: client,
    });
  });

  router.get('*', (_req, res) => {
    res.sendStatus(404);
  });

  return router;
};

export { Route };
