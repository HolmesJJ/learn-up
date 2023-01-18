/**
 * App.ts
 * @author HU JIAJUN <e0556371@u.nus.edu>
 * @file Node.js Application Base
 */

import { Server } from './server/Server';

const App = () => {
  Server.startServer();
};

export { App };
App();
