const methodColors = { GET: '35', POST: '32', PUT: '34', PATCH: '33', DELETE: '31' }

export const logger = (options = { resTime: false }) => (req, res, next) => {
    // date
    process.stdout.write(`[\u001b[90m${new Date().toISOString()}\u001b[0m] `)
    // method
    process.stdout.write(`\u001b[${methodColors[req.method]}m${req.method} `);
    // url
    process.stdout.write(`\u001b[37m${req.path}\u001b[0m`);

    // query params
    req.query && Object.keys(req.query)
        .forEach(q => process.stdout.write(`\n${q}: ${req.query[q]}\n`));

    // log response
    if (options.resTime) {
        res.on('finish', async () => {
            // await new Promise(resolve => setTimeout(resolve, 200));
            res.finishTime = Date.now() - res.startTime;
            const thresholdColor = res.finishTime < 50 ? '32' : (res.finishTime < 200 ? '33' : '31')
            process.stdout.write(`\n-> \u001b[1;${thresholdColor}m${res.finishTime}\u001b[0m ms\n`);
        })
    } else { process.stdout.write('\n') }


    return next();
}