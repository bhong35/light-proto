import path from 'path';

const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development'

const SRC_DIR: string = path.join(__dirname, '../src');
const DIST_DIR: string = path.join(__dirname, '../dist');
const SERVER_SRC_DIR: string = path.join(__dirname, '../src/server');

const SERVER_BUNDLE_NAME: string = 'server';

const ALIAS: Record<string, string> = {
    api: `${SRC_DIR}/api`,
    assets: `${SRC_DIR}/assets`,
    components: `${SRC_DIR}/components`,
    constants: `${SRC_DIR}/constants`,
    pages: `${SRC_DIR}/pages`,
    router: `${SRC_DIR}/router`,
    server: `${SRC_DIR}/server`,
    style: `${SRC_DIR}/style`,
    utils: `${SRC_DIR}/utils`,
    _webpack: path.join(__dirname, '../webpack')
};

export {
    ALIAS,
    DIST_DIR,
    IS_DEV,
    SRC_DIR,
    SERVER_BUNDLE_NAME,
    SERVER_SRC_DIR,
};