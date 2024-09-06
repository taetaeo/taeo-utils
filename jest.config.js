export default {
  verbose: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1", // tsconfig의 경로 별칭을 Jest에 매핑
  },
  testMatch: ["<rootDir>/**/*.test.(js|jsx|ts|tsx)", "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  preset: "ts-jest",
};
