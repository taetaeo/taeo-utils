/**
 *
 * 배열의 합을 나타내주는 함수 기능
 * @param {number[]} list - 숫자가 담긴 배열
 * @returns
 */

export function sumArrayHelper(list: number[]): number {
  try {
    if (!Array.isArray(list) || list.length === 0) {
      console.assert(list.length !== 0, "빈배열이 입력되었습니다.");
      throw new Error("빈배열이 입력되었습니다.");
    }

    let total: number = Number.MIN_SAFE_INTEGER;

    total = list.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);

    return total;
  } catch (error) {
    console.error("sumArrayHelper에서 에러가 발생했습니다. :", error.message);
    return -1; // 또는 다른 값을 반환하거나, throw를 다시 사용할 수 있습니다.
  }
}
