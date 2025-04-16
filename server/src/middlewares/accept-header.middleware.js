export const apiVersion = (target) => (req, res, next) => {
    const regex = /.+(?<version>v\d).+/
    const header = req.headers.accept;
    const match = header.match(regex) ?? { groups: {} };

    const { version } = match.groups;
    if (!version) return res.status(400).json({ message: 'API version not specified!' });
    if (version != target) return res.status(406).json({ message: 'Unsupported API version!' });

    next();
}