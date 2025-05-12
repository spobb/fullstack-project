/**
 * 
 * @param {string[]} methods - Table of allowed methods
 * @returns
 */

import { ClientError } from "#errors";

export const allowMethods = (methods = ['GET']) => (req, res, next) => {
    if (methods.includes(req.method)) {
        return next();
    };

    throw new ClientError(`${req.method} method not allowed!`, 405);
}