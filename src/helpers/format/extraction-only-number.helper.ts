/**
 * 숫자를 포함한 문자열중 숫자형태만 추출하길 원하는 기능을 하는 함수
 * @template T - inputText의 타입
 * @param {T} inputText - 추출하고자 하는 입력된 값
 * @returns {(string | number)[]} 정규식을 거쳐 추출된 결과 숫자를 포함한 문자열에서 오직 숫자형태만 추출한다. 이때 문자열과 숫자를 포함한 배열이 반환된다.
 * 첫 번째 자리의 타입은 '문자(string)'형 두 번째 자리의 타입은 '숫자(number)'
 *
 */

export function extractionOnlyNumber<T>(inputText: T): (string | number)[] {
  let result: (string | number)[];
  console.assert(typeof inputText === "string", `결과 실패 : 입력값( ${inputText} )`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString에서 에러 발생했습니다. 오직 문자열 타입만 허락됩니다.`);
  }
  result = [inputText.replace(/[^0-9]/g, ""), +inputText.replace(/[^0-9]/g, "")]; // [0] 문자 타입(string) / [1] 숫자 타입(number)
  return result;
}
