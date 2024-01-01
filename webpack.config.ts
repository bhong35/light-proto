import { clientConfig } from './webpack/client.config';
import { serverConfig } from './webpack/server.config';

const configs = [];

configs.push(serverConfig);
configs.push(clientConfig);

module.exports = configs;