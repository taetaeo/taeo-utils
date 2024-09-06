/**
 * 핸드폰 번호에 대해 배열로 출력해주는 함수
 * @param {string} phoneNumber
 * @returns {Array<string>}
 *  10 자리 미만인 경우 : 번호가 제대로 입력이 되지 않았으므로, '' 빈문자 배열로 출력
 *  10 자리인 경우 : 010-123-4567 로 나타내도록 하기 위해 ['010','123','4567']로 출력
 *  11 자리인 경우 : 010-1234-5678로 나타내도록 하기 위해 ['010','1234','5678']로 출력
 */

export function phoneNumberToArray(phoneNumber: string = "") {
  // 입력값이 문자열인지 확인
  console.assert(typeof phoneNumber === "string", `결과: phoneNumberToArrayHelper에서 문자열이 아닌 값(${phoneNumber})이 입력되었습니다.`);

  // 입력값이 숫자로만 이루어져 있는지 확인
  const isNumeric = /^[0-9]+$/.test(phoneNumber);
  console.assert(isNumeric, `결과: phoneNumberToArrayHelper에서 숫자 이외의 문자가 포함된 전화번호(${phoneNumber})가 입력되었습니다.`);

  // 입력값의 길이 확인
  const phoneLength = phoneNumber.length;
  console.assert(phoneLength === 10 || phoneLength === 11, `결과: phoneNumberToArrayHelper에서 유효하지 않은 전화번호 길이(${phoneLength})가 입력되었습니다.`);

  let phoneNumberArray: string[] = [];

  if (phoneLength === 10) {
    phoneNumberArray = [phoneNumber.slice(0, 3), phoneNumber.slice(3, 6), phoneNumber.slice(6)];
  } else if (phoneLength === 11) {
    phoneNumberArray = [phoneNumber.slice(0, 3), phoneNumber.slice(3, 7), phoneNumber.slice(7)];
  }

  return phoneNumberArray;
}
