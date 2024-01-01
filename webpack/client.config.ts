import path from 'path';
import { Configuration, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ALIAS, DIST_DIR, SRC_DIR } from './constants';
import * as Loaders from './loaders';

const entry: string[] = [path.resolve(SRC_DIR, 'index.tsx')];

const plugins: WebpackPluginInstance[] = [
    ...[
        new HtmlWebpackPlugin({
            title: 'Light Proto',
            template: './src/assets/index.html'
        })
    ]
];

const clientConfig: Configuration = {
    name: 'client',
    entry,
    plugins,
    module: {
        rules: Object.values(Loaders).map((el) => el.client),
    },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        alias: ALIAS,
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
        fallback: {
            url: false,
            path: false
        }
    },
};

export { clientConfig };