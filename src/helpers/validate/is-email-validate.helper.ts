const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

/**
 * 이메일을 검증해주는 함수
 * @param {string} email - 이메일
 * @returns {boolean} - 이메일 검증 여부 (true / false)
 */
export function isEmailValidate(email: string) {
  if (!pattern.test(email)) return false;
  return true;
}
