import { isEmailValidate } from "../../helpers";

describe("isEmailValidate", () => {
  it(`입력 -> 'abc@email.com' 
        결과 -> true`, () => {
    const input = "abc@email.com";
    const result = isEmailValidate(input);
    expect(result).toBeTruthy();
  });

  it(`입력 -> '@email.com'
       결과 ->  false`, () => {
    const input = "@email.com";
    const result = isEmailValidate(input);
    expect(result).toBeFalsy();
  });
});
