export const errorLogger = (err) => {
    process.stdout.write(`[\u001b[90m${new Date().toISOString()}\u001b[0m] `)
    process.stdout.write(`\u001b[37;41m${err.statusCode} ${err.constructor.name}\u001b[0m: ${err.message}\n`);
}