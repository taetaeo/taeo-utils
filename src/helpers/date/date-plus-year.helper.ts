/**
 * 특정시점 기준 이후의 시간을 알려주는 함수
 *
 * 첫 번째 파라미터 : 고정 시점 날짜 형식 (2023-11-09 14:33:51)
 * 두 번째 파라미터 : 원하는 이후의 년도 시점 (숫자 타입)
 * @param {string} inputDate
 * @param {number} plusYear
 * @returns {string} yyyy-mm-dd hh:mm:ss
 */
export function datePlusYearHelper(inputDate: string, plusYear: number = 2) {
  try {
    console.assert(!inputDate, `결과 : datePlusYearHelper에서 ${inputDate} 확인이 실패하였습니다.`);

    if (!inputDate) return;

    let currentDate: Date = new Date(inputDate);

    if (typeof currentDate === "number" && isNaN(currentDate)) throw new Error("올바른 날짜 형식이 아닙니다.");

    currentDate.setFullYear(currentDate.getFullYear() + plusYear);

    const needToKnowafterYears = currentDate.toLocaleString("ko-KR");

    return needToKnowafterYears;
  } catch (error) {
    if (error instanceof Error) {
      console.error("날짜를 처리하는 동안 오류가 발생했습니다:", error.message);
    } else {
      console.error("날짜를 처리하는 동안 알 수 없는 오류가 발생했습니다.");
    }
    return "0000-00-00";
  }
}
