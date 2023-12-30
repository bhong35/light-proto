import { RuleSetRule } from 'webpack';
import { TLoader } from '../types';

const universalLoader: RuleSetRule = {
    use: [
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }
    ]
}

export const tsLoader: TLoader = {
    server: universalLoader
};