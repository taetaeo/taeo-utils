/**
 * 특정시점 기준 이후의 시간을 알려주는 함수
 *
 * 첫 번째 파라미터 : 고정 시점 날짜 형식 (2023-11-09 14:33:51)
 * 두 번째 파라미터 : 원하는 이후의 년도 시점 (숫자 타입)
 * @param {string} inputDate
 * @param {number} plusYear
 * @returns {string} yyyy-mm-dd hh:mm:ss
 */
export declare function datePlusYearHelper(inputDate: string, plusYear?: number): string | undefined;
