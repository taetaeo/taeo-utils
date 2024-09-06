/**
 *
 * 배열 또는 객체가 비어있는지 확인하기 위한 함수
 * @param {T} obj - 비어있는지 확인하기 위한 객체 또는 배열
 * @returns {boolean} - 비어있으면 true, 그렇지 않으면 false
 */

export function isEmptyObjectChecker<T>(obj: T): boolean {
  if (typeof obj !== "object" || obj === null) return true; // 객체가 아니거나 null일 경우 비어있는 것으로 간주
  return Object.entries(obj).length === 0; // 객체의 프로퍼티 개수가 0이면 비어있는 것으로 간주
}
