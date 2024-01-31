const isServer = typeof window === "undefined";

function get<T>(key: string): T | null {
  if (isServer) {
    console.warn("현재 브라우저 환경이 아닙니다.");
    return null;
  }

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error(`실패 : 스토리지의 데이터를 불러오는데 실패하였습니다. '${key}':`, error);
    return null;
  }
}

function set<T>(key: string, value: T): void | null {
  if (isServer) {
    console.warn("현재 브라우저 환경이 아닙니다.");
    return null;
  }

  if (typeof key === "object") {
    return null;
  }
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.warn("실패 : 스토리지에 데이터를 저장하는데 실패하였습니다.");
    return null;
  }
}

function remove(key: string): void | null {
  if (isServer) {
    console.warn("현재 브라우저 환경이 아닙니다.");
    return null;
  }
  try {
    return window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`실패 : 스토리지에서 항목을 삭제하는데 실패하였습니다. 키 : ${key} `);
  }
}

const localStorageModule = {
  get: get,
  set: set,
  remove: remove,
};
export default localStorageModule;
