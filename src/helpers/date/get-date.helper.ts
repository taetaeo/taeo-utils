/**
 * 현재 날짜를 가져와서 "YYYY-MM-DD" 형식으로 포맷팅한 문자열을 반환합니다.
 * @returns {string} "YYYY-MM-DD" 형식으로 포맷팅된 현재 날짜 문자열
 */
export function getDateHelper(): string {
  // 현재 날짜 객체를 생성합니다.
  const currentDate = new Date();

  // 년도
  const year = currentDate.getFullYear();

  // 월을 가져오고, 1을 더한다 ( 월은 0부터 시작하므로 1을 더합니다.)
  const month = currentDate.getMonth() + 1;

  // 일을 가져온다.
  const day = currentDate.getDate();

  // 원하는 형식으로 날짜를 포맷팅합니다. (월과 일이 한 자리 숫자일 경우 0으로 패딩합니다.)
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

  // 포맷팅된 날짜를 반환합니다.
  return formattedDate;
}
