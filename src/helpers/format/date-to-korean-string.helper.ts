/**
 * 적절한 형식의 date를 입력받을 경우 '년/월/일' 의 형태로 포멧팅 해주는 함수
 * @param {string} date
 * @returns {string}
 */

type UnitsType = {
  year: string;
  month: string;
  day: string;
};
export function dateToKoreanStringHelper(date: string, units: UnitsType = { year: "년", month: "일", day: "월" }) {
  try {
    if (!date) {
      throw new Error("dateToStringHelper's Error 1 : 날짜가 제공되지 않았습니다.");
    }

    const newDate: Date = new Date(date);

    console.assert(!isNaN(Number(newDate)), `dateToStringHelper에서 유효하지 않은 날짜 형식입니다. 입력값: ${date}`);

    if (isNaN(Number(newDate))) {
      throw new Error("유효하지 않은 날짜 형식입니다.");
    }

    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    return `${year}${units.year} ${month}${units.month} ${day}${units.day}`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`dateToStringHelper's Error 2 :  ${error.message}`);
    } else {
      console.error(`dateToStringHelper's Error 3 :  알수없는 오류가 발생했습니다.`);
    }
    throw error;
  }
}
