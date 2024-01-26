"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  datePlusYearHelper: () => datePlusYearHelper,
  dateToKoreanStringHelper: () => dateToKoreanStringHelper,
  equalValueCheckerHelper: () => equalValueCheckerHelper,
  extractionOnlyAlpahbetHelper: () => extractionOnlyAlpahbetHelper,
  extractionOnlyKoreanHelper: () => extractionOnlyKoreanHelper,
  extractionOnlyNumber: () => extractionOnlyNumber,
  extractionOnlyStringHelper: () => extractionOnlyStringHelper,
  isAlpahbetCheckerHelper: () => isAlpahbetCheckerHelper,
  isDataCompareCheckerHelper: () => isDataCompareCheckerHelper,
  isRefCheckerHelper: () => isRefCheckerHelper,
  koreanSubjectParticleModifyer: () => koreanSubjectParticleModifyer,
  onlyNumberValidateHelper: () => onlyNumberValidateHelper,
  phoneNumberToArrayHelper: () => phoneNumberToArrayHelper,
  timeSplitFormatHelper: () => timeSplitFormatHelper,
  timeToKoreanStringHelper: () => timeToKoreanStringHelper
});
module.exports = __toCommonJS(src_exports);

// src/helpers/checker/is-alpahbet-checker.helper.ts
function isAlpahbetCheckerHelper(alpahbet) {
  const isValid = /^[a-zA-Z\s]+$/.test(alpahbet);
  console.assert(typeof isValid === "boolean", `\uACB0\uACFC : ${alpahbet} \uD655\uC778\uC774 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.`);
  return isValid;
}

// src/helpers/checker/equal-value-checker.helper.ts
function equalValueCheckerHelper(value1, value2) {
  if (value1 !== value2)
    return false;
  return true;
}

// src/helpers/checker/is-ref-checker.helper.ts
function isRefCheckerHelper(ref) {
  console.assert(ref, `isRefCheckerHelper\uC5D0\uC11C \uC798\uBABB\uB41C \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC785\uB825 :  ${ref}`);
  if (ref && typeof ref === "object" && "current" in ref) {
    const refObject = ref;
    console.assert(refObject.current !== void 0 && refObject.current !== null, "isRefCheckerHelper\uC5D0\uC11C \uC5D0\uB7EC \uBC1C\uC0DD : current property is undefined or null");
    if (!refObject.current)
      return false;
    return true;
  }
  return false;
}

// src/helpers/checker/is-data-compare-checker.helper.ts
function isDataCompareCheckerHelper(data, compareData) {
  const result = data === compareData;
  console.assert(result, `isVariantCheckerHelper\uC5D0\uC11C\uC758 \uACB0\uACFC \uC2E4\uD328 : data\uB294 ${data}\uC774\uBA70, compareData\uB294 ${compareData} \uC11C\uB85C \uAC19\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`);
  return result;
}

// src/helpers/date/date-plus-year.helper.ts
function datePlusYearHelper(inputDate, plusYear = 2) {
  try {
    console.assert(!inputDate, `\uACB0\uACFC : datePlusYearHelper\uC5D0\uC11C ${inputDate} \uD655\uC778\uC774 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.`);
    if (!inputDate)
      return;
    let currentDate = new Date(inputDate);
    if (typeof currentDate === "number" && isNaN(currentDate))
      throw new Error("\uC62C\uBC14\uB978 \uB0A0\uC9DC \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
    currentDate.setFullYear(currentDate.getFullYear() + plusYear);
    const needToKnowafterYears = currentDate.toLocaleString("ko-KR");
    return needToKnowafterYears;
  } catch (error) {
    if (error instanceof Error) {
      console.error("\uB0A0\uC9DC\uB97C \uCC98\uB9AC\uD558\uB294 \uB3D9\uC548 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4:", error.message);
    } else {
      console.error("\uB0A0\uC9DC\uB97C \uCC98\uB9AC\uD558\uB294 \uB3D9\uC548 \uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
    }
    return "0000-00-00";
  }
}

// src/helpers/form/phone-number-to-array.helper.ts
function phoneNumberToArrayHelper(phoneNumber = "") {
  console.assert(typeof phoneNumber === "string", `\uACB0\uACFC: phoneNumberToArrayHelper\uC5D0\uC11C \uBB38\uC790\uC5F4\uC774 \uC544\uB2CC \uAC12(${phoneNumber})\uC774 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  const isNumeric = /^[0-9]+$/.test(phoneNumber);
  console.assert(isNumeric, `\uACB0\uACFC: phoneNumberToArrayHelper\uC5D0\uC11C \uC22B\uC790 \uC774\uC678\uC758 \uBB38\uC790\uAC00 \uD3EC\uD568\uB41C \uC804\uD654\uBC88\uD638(${phoneNumber})\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  const phoneLength = phoneNumber.length;
  console.assert(phoneLength === 10 || phoneLength === 11, `\uACB0\uACFC: phoneNumberToArrayHelper\uC5D0\uC11C \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC804\uD654\uBC88\uD638 \uAE38\uC774(${phoneLength})\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  let phoneNumberArray = [];
  if (phoneLength === 10) {
    phoneNumberArray = [phoneNumber.slice(0, 3), phoneNumber.slice(3, 6), phoneNumber.slice(6)];
  } else if (phoneLength === 11) {
    phoneNumberArray = [phoneNumber.slice(0, 3), phoneNumber.slice(3, 7), phoneNumber.slice(7)];
  }
  return phoneNumberArray;
}

// src/helpers/validate/only-number-validate.helper.ts
function onlyNumberValidateHelper(input) {
  const result = input.replace(/[^0-9]/g, "");
  console.assert(result, `\uACB0\uACFC: onlyNumberValidate\uC5D0\uC11C ${input}\uC774 \uC785\uB825\uB418\uC5C8\uACE0, \uBE48\uBB38\uC790\uC5F4\uC774 \uBC18\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  return result;
}

// src/helpers/format/time-split-format.helper.ts
function timeSplitFormatHelper(inputTime) {
  if (!inputTime) {
    console.assert(false, "timeSplitFormatHelper\uC5D0 \uBE44\uC5B4\uC788\uB294 \uAC12\uC774 \uC804\uB2EC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    return "";
  }
  if (!inputTime.split || !Array.isArray(inputTime.split(" "))) {
    console.assert(false, "timeSplitFormatHelper\uC5D0 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC740 \uD615\uC2DD\uC758 \uAC12\uC774 \uC804\uB2EC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    return inputTime;
  }
  const [date, time] = inputTime.split(" ");
  return [date, time];
}

// src/helpers/format/date-to-korean-string.helper.ts
function dateToKoreanStringHelper(date, units = { year: "\uB144", month: "\uC77C", day: "\uC6D4" }) {
  try {
    if (!date) {
      throw new Error("dateToStringHelper's Error 1 : \uB0A0\uC9DC\uAC00 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
    }
    const newDate = new Date(date);
    console.assert(!isNaN(Number(newDate)), `dateToStringHelper\uC5D0\uC11C \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB0A0\uC9DC \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC785\uB825\uAC12: ${date}`);
    if (isNaN(Number(newDate))) {
      throw new Error("\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB0A0\uC9DC \uD615\uC2DD\uC785\uB2C8\uB2E4.");
    }
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}${units.year} ${month}${units.month} ${day}${units.day}`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`dateToStringHelper's Error 2 :  ${error.message}`);
    } else {
      console.error(`dateToStringHelper's Error 3 :  \uC54C\uC218\uC5C6\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.`);
    }
    throw error;
  }
}

// src/helpers/format/time-to-korean-string.helper.ts
function timeToKoreanStringHelper(inputTime) {
  const [hour, minute, seconds] = inputTime.split(":");
  const notValidCondition = !hour && !minute && !seconds;
  if (notValidCondition) {
    console.assert(notValidCondition, `timeToKoreanStringHelper\uC5D0\uC11C \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC2DC\uAC04 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC785\uB825\uAC12 : ${inputTime}`);
    return "\uC62C\uBC14\uB978 \uC2DC\uAC04 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.";
  }
  let result;
  if (typeof seconds === "undefined" && typeof minute === "undefined") {
    result = `${hour}\uC2DC`;
    return hour ? result : result.replace(/ /g, "");
  }
  if (typeof seconds === "undefined") {
    result = `${hour}\uC2DC ${minute && minute + "\uBD84"}`;
    return minute ? result : result.replace(/ /g, "");
  }
  return `${hour}\uC2DC ${minute && minute + "\uBD84"} ${seconds && seconds + "\uCD08"}`;
}

// src/helpers/format/extraction-only-string.helper.ts
function extractionOnlyStringHelper(inputText) {
  console.assert(typeof inputText === "string", `\uACB0\uACFC \uC2E4\uD328 : \uC785\uB825\uAC12(${inputText})`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString\uC5D0\uC11C \uC5D0\uB7EC \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC624\uC9C1 \uBB38\uC790\uC5F4 \uD0C0\uC785\uB9CC \uD5C8\uB77D\uB429\uB2C8\uB2E4.`);
  }
  const result = inputText.replace(/\d+/g, "");
  return result;
}

// src/helpers/format/extraction-only-number.helper.ts
function extractionOnlyNumber(inputText) {
  let result;
  console.assert(typeof inputText === "string", `\uACB0\uACFC \uC2E4\uD328 : \uC785\uB825\uAC12( ${inputText} )`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString\uC5D0\uC11C \uC5D0\uB7EC \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC624\uC9C1 \uBB38\uC790\uC5F4 \uD0C0\uC785\uB9CC \uD5C8\uB77D\uB429\uB2C8\uB2E4.`);
  }
  result = [inputText.replace(/[^0-9]/g, ""), +inputText.replace(/[^0-9]/g, "")];
  return result;
}

// src/helpers/format/extraction-only-alpahbet.helper.ts
function extractionOnlyAlpahbetHelper(inputText) {
  let result;
  console.assert(typeof inputText === "string", `\uACB0\uACFC \uC2E4\uD328 : \uC785\uB825\uAC12( ${inputText} )`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString\uC5D0\uC11C \uC5D0\uB7EC \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC624\uC9C1 \uBB38\uC790\uC5F4 \uD0C0\uC785\uB9CC \uD5C8\uB77D\uB429\uB2C8\uB2E4.`);
  }
  result = inputText.replace(/[^a-zA-Z]/g, "");
  return result;
}

// src/helpers/format/extraction-only-korean.helper.ts
function extractionOnlyKoreanHelper(inputText) {
  let result;
  console.assert(typeof inputText === "string", `\uACB0\uACFC \uC2E4\uD328 : \uC785\uB825\uAC12( ${inputText} )`);
  if (typeof inputText !== "string") {
    throw new Error(`extractionOnlyString\uC5D0\uC11C \uC5D0\uB7EC \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC624\uC9C1 \uBB38\uC790\uC5F4 \uD0C0\uC785\uB9CC \uD5C8\uB77D\uB429\uB2C8\uB2E4.`);
  }
  result = inputText.replace(/[^가-힣]/g, "");
  return result;
}

// src/helpers/language/korean-subject-particle-modify.helper.ts
function koreanSubjectParticleModifyer(korean) {
  const charCode = korean.charCodeAt(korean.length - 1);
  const consonantCode = (charCode - 44032) % 28;
  let particle;
  if (consonantCode === 0) {
    particle = "\uAC00";
  } else {
    particle = "\uC774";
  }
  const result = `${korean}${particle}`;
  console.assert(result === koreanSubjectParticleModifyer(korean), `\uACB0\uACFC \uC2E4\uD328: \uD55C\uAD6D\uC5B4(${korean}) \uAC00 \uC785\uB825\uB418\uC5B4 \uC608\uC0C1\uCE58 \uBABB\uD55C \uACB0\uACFC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.`);
  return result;
}
//# sourceMappingURL=index.cjs.map
