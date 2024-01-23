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
  equalValueCheckerHelper: () => equalValueCheckerHelper,
  isAlpahbetCheckerHelper: () => isAlpahbetCheckerHelper
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
//# sourceMappingURL=index.cjs.map
