/**
 *
 * 시간 데이터를 입력 받으면, '시 분 초'로 표출해주는 함수
 *
 * @param {string} inputTime ex) 00:00:00
 * @returns 00시 00분 00초
 */
export function timeToKoreanString(inputTime: string) {
  const [hour, minute, seconds] = inputTime.split(":");

  const notValidCondition = !hour && !minute && !seconds;

  if (notValidCondition) {
    console.assert(notValidCondition, `timeToKoreanStringHelper에서 유효하지 않은 시간 형식입니다. 입력값 : ${inputTime}`);
    return "올바른 시간 형식이 아닙니다.";
  }

  let result: string;

  if (typeof seconds === "undefined" && typeof minute === "undefined") {
    result = `${hour}시`;
    return hour ? result : result.replace(/ /g, "");
  }

  if (typeof seconds === "undefined") {
    result = `${hour}시 ${minute && minute + "분"}`;
    return minute ? result : result.replace(/ /g, "");
  }

  return `${hour}시 ${minute && minute + "분"} ${seconds && seconds + "초"}`;
}
