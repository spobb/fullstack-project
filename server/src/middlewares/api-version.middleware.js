import { ClientError } from "#errors";

export const getApiVersion = (target) => (req, res, next) => {
    const regex = /.+(?<version>v\d).+/
    const header = req.headers.accept;
    const match = header.match(regex) ?? { groups: {} };

    const { version } = match.groups;
    if (!version) {
        throw new ClientError('API version not specified')
    }
    if (version != target) {
        throw new ClientError('API version not supported', 406);
    };

    next();
}