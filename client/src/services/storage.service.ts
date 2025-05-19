export class StorageService {
    private storage: Storage;

    constructor() {
        if (typeof window === 'undefined' || !window.localStorage) {
            throw new Error('StorageService is not available on the client');
        }

        this.storage = localStorage;
    }

    get(key: string): string | null {
        return this.storage.getItem(key);
    }

    set(key: string, value: string): void {
        return this.storage.setItem(key, value);
    }
};