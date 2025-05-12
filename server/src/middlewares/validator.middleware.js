/**
 * 
 * @param {JSON} schema 
 * @returns {void}
 */
import { ClientError } from '#errors';

export const validate = (schema) => (req, res, next) => {
    // Assumes all keys are required
    // Checks the lengths of the schema and the request body, them being equal indicates the request contains all the necessary keys
    if (Object.keys(schema.properties).length != Object.keys(req.body).length) {
        throw new ClientError('Invalid request body')
    };

    for (const key in req.body) {
        // Checking every key given in the request against the schema, returning false if the request body contains an unexpected key
        if (!schema.properties[key]) {
            throw new ClientError('Invalid property name');
        }

        if (schema.properties[key].type != typeof req.body[key]) {
            console.log(schema.properties[key].type, typeof req.body[key])
            throw new ClientError('Invalid property type');
        }
    }
    // if all return true, next
    next();
}