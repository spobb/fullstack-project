export const logger = (req, res, next) => {
    console.log(`[\u001b[90m${new Date().toISOString()}\u001b[0m] \u001b[31m${req.method} \u001b[37m${req.url}\u001b[0m`);
    next();
}