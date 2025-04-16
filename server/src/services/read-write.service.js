import fs from 'node:fs/promises';

export const writeToFile = async (payload) => {
    try {
        return await fs.writeFile(process.env.DATA_PATH, JSON.stringify(payload, null, 4));
    } catch (err) {
        throw new Error('Error writing to file: ', err);
    }
}

export const readFromFile = async () => {
    try {
        const data = await fs.readFile(process.env.DATA_PATH, { encoding: 'utf-8' });
        return JSON.parse(data);
    } catch (err) {
        throw new Error('Error reading from file: ', err);
    }
}