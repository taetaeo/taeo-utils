import * as Cookies from "js-cookie";

export interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

/**
 * 쿠키 값을 가져오는 메서드
 * @param name - 가져오려는 쿠키의 이름
 * @returns 쿠키의 값 (없을 경우 null 반환)
 */

function getCookie(name: string): string | null {
  return Cookies.get(name) || null;
}

/**
 * 쿠키를 설정하는 메서드
 * @param name - 설정할 쿠키의 이름
 * @param value - 설정할 쿠키의 값
 * @param options - 쿠키 설정에 사용할 옵션
 */
function setCookie(name: string, value: string, options?: CookieOptions): void {
  Cookies.set(name, value, options);
}

/**
 * 쿠키를 삭제하는 메서드
 * @param name - 삭제할 쿠키의 이름
 * @param options - 쿠키 삭제에 사용할 옵션
 */
function deleteCookie(name: string, options?: CookieOptions): void {
  Cookies.remove(name, options);
}

export default (function () {
  return {
    get: getCookie,
    SET: setCookie,
    delete: deleteCookie,
  };
})();
