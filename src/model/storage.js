//用于封装localstorage

var storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));

    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        localStorage.removeItem(key);

    }
}

module.exports = storage;