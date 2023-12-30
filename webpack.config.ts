import { serverConfig } from './webpack/server.config';

const configs = [];

// * SSR
configs.push(serverConfig);
// TODO: Add CSR with clientConfig

module.exports = configs;