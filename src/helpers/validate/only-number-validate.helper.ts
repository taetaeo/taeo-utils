/**
 * 숫자형식을 포함한 input의 문자열 중 오직 숫자형만 출력이 되도록하는 함수
 * @param {string} input ex) '12ads3'
 * @returns {string} '123'
 */

export function onlyNumberValidate(input: string) {
  const result = input.replace(/[^0-9]/g, "");

  console.assert(result, `결과: onlyNumberValidate에서 ${input}이 입력되었고, 빈문자열이 반환되었습니다.`);

  return result;
}
