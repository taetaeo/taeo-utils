/**
 * 입력된 문자열중 '알파벳'의 형태만 추출하길 원하는 기능을 하는 함수
 * @template T - inputText의 타입
 * @param {T} inputText - 추출하고자 하는 입력된 값
 * @returns {string} 정규식을 거쳐 추출된 결과 숫자를 포함한 문자열에서 오직 '알파벳'의 형태만 추출한다.
 *
 */
export type ResultType = string;
export function extractionOnlyAlphabetHelper<T>(inputText: T): ResultType {
  let result: ResultType;
  console.assert(typeof inputText === "string", `결과 실패 : 입력값( ${inputText} )`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString에서 에러 발생했습니다. 오직 문자열 타입만 허락됩니다.`);
  }
  result = inputText.replace(/[^a-zA-Z]/g, ""); // 알파벳만 추출
  return result;
}
