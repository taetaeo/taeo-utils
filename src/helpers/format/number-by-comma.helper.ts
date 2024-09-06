/**
 * 숫자 입력시 천(세자리) 단위마다 콤마(,)를 찍는 기능의 함수
 * @param {number} number -
 * @returns
 */

export function numberByComma(number: number) {
  try {
    // 숫자를 쉼표로 구분된 문자열로 변환
    const formattedNumber = typeof number === "number" ? number.toLocaleString() : number;

    console.log(typeof formattedNumber !== "string");
    // 문자열이 아닌 경우 에러 메시지 출력
    console.assert(typeof formattedNumber !== "string", "입력된 매개변수의 타입이 맞지 않습니다. [입력 => string]");
    console.assert(typeof formattedNumber !== "object", "입력된 매개변수의 타입이 맞지 않습니다. [입력 => object]");
    console.assert(typeof formattedNumber !== "undefined", "입력된 매개변수의 타입이 맞지 않습니다. [입력 => undefined]");

    return formattedNumber;
  } catch (error) {
    // 에러 처리: 숫자 변환 중에 오류가 발생한 경우
    console.error("Error formatting number:", error);
    return { error: "Error formatting number" };
  }
}
