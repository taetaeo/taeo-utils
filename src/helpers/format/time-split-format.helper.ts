/**
 * 시간 데이터를 input으로 받게 되면 분할된 시간을 나타내주도록 해주는 포멧팅 함수
 * @param {stirng} inputTime ex) 2023-01-01 00:00:00
 * @returns {Array<string>} 첫 번째에 위치한 [0]은 '년' 두 번쨰에 위치한 [1]은 '시간' 을 출력한다.
 *
 * ex) input = 2023-01-01 00:00:00 / output = [2023-01-01, 00:00:00]은 시간
 */
export type InputType = string | undefined | null;

export type OutPutType = string | [string, string];

export function timeSplitFormat(inputTime: InputType): OutPutType {
  if (!inputTime) {
    console.assert(false, "timeSplitFormatHelper에 비어있는 값이 전달되었습니다.");
    return "";
  }
  if (!inputTime.split || !Array.isArray(inputTime.split(" "))) {
    console.assert(false, "timeSplitFormatHelper에 올바르지 않은 형식의 값이 전달되었습니다.");
    return inputTime;
  }

  const [date, time] = inputTime.split(" ");
  return [date, time];
}
