const methodColors = { GET: '35', POST: '32', PUT: '34', PATCH: '33', DELETE: '31' }

export const logger = (req, res, next) => {
    // date
    process.stdout.write(`[\u001b[90m${new Date().toISOString()}\u001b[0m] `)
    // method
    process.stdout.write(`\u001b[${methodColors[req.method]}m${req.method} `);
    // url
    process.stdout.write(`\u001b[37m${req.path}\u001b[0m\n`);

    // query params
    req.query && Object.keys(req.query)
        .forEach(q => process.stdout.write(` ${q}: ${req.query[q]}\n`));
    return next();
}