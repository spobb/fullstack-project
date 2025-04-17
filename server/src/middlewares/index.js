import { getApiVersion } from "./api-version.middleware.js";
import { allowMethods } from "./allow-method.middleware.js";
import { errorHandler } from './error-handler.middleware.js';
import { logger } from "./logger.middleware.js";
import { multerParser } from "./multer-parser.middleware.js";
import { validate } from "./validator.middleware.js";

export {
    getApiVersion,
    allowMethods,
    errorHandler,
    logger,
    multerParser,
    validate
}