/**
 * Server.ts
 * @author HU JIAJUN <e0556371@u.nus.edu>
 * @file Server Configuration
 */

import { createServer } from 'http';
import express from 'express';

import { Route } from './Route';

const app = express();
const httpServer = createServer(app);
const port = 3000;

const Server = {
  getApp: () => {
    return app;
  },
  startServer: () => {
    app.use('/', Route());
    httpServer.listen(port, () =>
      console.log('Server started on port ' + port),
    );
  },
};

export { Server };
