/**
 * 두 개의 파라미터 값이 같은지 아닌지 확인하는 함수
 * @param {*} value1
 * @param {*} value2
 * @returns
 */

type ValueType = string | string[] | number | number[] | boolean | undefined;

export function equalValueCheckerHelper(value1: ValueType, value2: ValueType) {
  if (value1 !== value2) return false;
  return true;
}
