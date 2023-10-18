

export const useLocalStorage = (key) => {
    const storage = window.localStorage;

    const get = () => {
        const value = storage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return null;
    };

    const set = (value) => {
        storage.setItem(key, JSON.stringify(value));
    };

    const remove = () => {
        storage.removeItem(key);
    };

    return {
        get,
        set,
        remove,
    };
}


