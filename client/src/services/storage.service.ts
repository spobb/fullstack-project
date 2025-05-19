class StorageService {
    private storage: Storage;

    constructor() {
        if (typeof window === 'undefined' || !window.localStorage) {
            throw new Error('StorageService is not available on the client');
        }

        this.storage = localStorage;
    }

    get<T>(key: string): T | null {
        try {
            const item = this.storage.getItem(key)
            return item ? JSON.parse(item) as T : null;
        } catch (err) {
            console.error(`Error getting ${key} from local storage`, err);
            return null;
        }
    }

    set<T>(key: string, value: T): void {
        try {
            const parsedValue = JSON.stringify(value);
            localStorage.setItem(key, parsedValue);
            return;
        } catch (err) {
            console.error(`Error setting ${key} to local storage`, err);
            return;
        }
    }

    remove(key: string): void {
        try {
            return localStorage.removeItem(key);
        } catch (err) {
            console.error(`Error removing ${key} from local storage`, err)
        }
    }
};

export default new StorageService();