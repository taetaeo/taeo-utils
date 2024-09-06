/**
 * 알파벳일 경우 예외 처리하도록 도와주는 함수
 * @param {*} alphabet
 * @returns
 */

export type AlphabetType = string;

export function isAlphabetCheckerHelper(alphabet: AlphabetType) {
  const isValid = /^[a-zA-Z\s]+$/.test(alphabet);
  console.assert(typeof isValid === "boolean", `결과 : ${alphabet} 확인이 실패하였습니다.`);
  return isValid;
}
