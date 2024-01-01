import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import {
    ALIAS,
    DIST_DIR,
    SERVER_BUNDLE_NAME,
    SERVER_SRC_DIR,
} from './constants';
import * as Loaders from './loaders';

const serverConfig: Configuration = {
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: path.join(SERVER_SRC_DIR, '/server'),
    module: {
        rules: Object.values(Loaders).map((el) => el.server)
    },
    output: {
        filename: `${SERVER_BUNDLE_NAME}.js`,
        path: DIST_DIR,
        publicPath: '/'
    },
    resolve: {
        alias: ALIAS,
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    externals: [nodeExternals()]
};

export { serverConfig };