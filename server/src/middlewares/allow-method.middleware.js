/**
 * 
 * @param {string[]} methods - Table of allowed methods
 * @returns
 */

export const allowMethods = (methods = ['GET']) => (req, res, next) => {
    if (methods.includes(req.method)) { next(); return };
    res.status(405).send({ message: `${req.method} method not allowed!` });
}