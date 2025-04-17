import 'dotenv/config';
import app from '#config/app.config.js';

const port = process.env.PORT

process.on("uncaughtException", (err) => {
    console.error("Uncaught exception: ", err.message);
    process.exit(1);
})

app.listen(port, () => {
    console.log(`\nApp listening @ http://localhost:${port}\n`);
});