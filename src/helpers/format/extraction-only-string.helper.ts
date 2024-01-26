/**
 * 숫자를 포함한 문자열중 문자(character)만 추출하길 원하는 기능을 하는 함수
 * @template T - inputText의 타입
 * @param {T} inputText - 추출하고자 하는 입력된 값
 * @returns {string} 정규식을 거쳐 추출된 결과 숫자를 포함한 문자열에서 오직 문자(character)만 추출한다.
 */

export function extractionOnlyStringHelper<T>(inputText: T): string {
  console.assert(typeof inputText === "string", `결과 실패 : 입력값(${inputText})`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString에서 에러 발생했습니다. 오직 문자열 타입만 허락됩니다.`);
  }
  const result = inputText.replace(/\d+/g, ""); // 숫자를 제외한 문자의 형태
  return result;
}
