/**
 *
 * 첫 번째 매개변수와 두 번째 매개변수가 서로 같은지 확인하는 기능을 하는 함수
 *
 * @template T - data와 compareData의 타입
 * @param {T} data - 비교하길 원하는 데이터
 * @param compareData - 비교군 데이터
 * @returns {boolean} true / false - 비교 결과 불린(boolean)값으로 반환이 된다.
 */
export function isDataCompareCheckerHelper<T>(data: T, compareData: T): boolean {
  const result = data === compareData;

  console.assert(result, `isVariantCheckerHelper에서의 결과 실패 : data는 ${data}이며, compareData는 ${compareData} 서로 같지 않습니다.`);

  return result;
}
