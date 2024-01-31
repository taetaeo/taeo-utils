function get<T>(key: string): T | null {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error(`Error while getting data from localStorage for key '${key}':`, error);
    return null;
  }
}

function set<T>(key: string): T | null {
  try {
    if (typeof key === "object") {
    }

    return null;
  } catch (error) {
    return null;
  }
}

function update() {}

function remove() {}

const localStorageModule = {
  get: get,
  set: set,
  update: update,
  remove: remove,
};
export default localStorageModule;
