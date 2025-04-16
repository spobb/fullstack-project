import 'dotenv/config';
import app from './config/app.config.js';

const port = process.env.PORT

app.listen(port, () => {
    console.log(`\nApp listening @ http://localhost:${port}\n`);
});