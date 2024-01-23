/**
 * 알파벳일 경우 예외 처리하도록 도와주는 함수
 * @param {*} alpahbet
 * @returns
 */
function isAlpahbetCheckerHelper(alpahbet) {
  const isValid = /^[a-zA-Z\s]+$/.test(alpahbet);
  console.assert(typeof isValid === "boolean", `결과 : ${alpahbet} 확인이 실패하였습니다.`);
  return isValid;
}
module.exports = { isAlpahbetCheckerHelper };
