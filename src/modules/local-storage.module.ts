const isServer = typeof window === "undefined";

/**
 * GET - 로컬스토리지에서 데이터 가져오기
 * @param {string} key - 로컬스토리지에서 가져올 데이터의 key-value 중 key 값
 * @returns {T|null} 데이터가 있을 경우 데이터를 반환하고 없거나 실패할 경우 null 반환
 */
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

/**
 * SET - 로컬스토리지에 데이터 저장하기
 * @param {string} key - 저장할 공간의 key 값
 * @param {T} value - 저장할 데이터
 * @returns {()=>{}|null} - 성공시 저장 실행, 실패시 null 반환
 */

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

/**
 * DELETE - 로컬스토리지에서 데이터 삭제
 * @param {string} key - 삭제할 데이터의 key 값
 * @returns {()=>{}|null} - 성공시 삭제 실행, 실패시 null 반환
 */

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

/** 로컬 스토리지 모듈 */
export const localStorageModule = {
  get: get,
  set: set,
  remove: remove,
};
