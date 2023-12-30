import path from 'path';
import express from 'express';
import { DIST_DIR } from '_webpack/constants';
import { SERVER_PORT } from 'server/constants';

const { PORT = SERVER_PORT } = process.env;

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(DIST_DIR)));

app.get('/*', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'server.js'));
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});