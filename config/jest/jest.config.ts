import path from "path";

export default {
  globals: {
    __IS_DEV__: true,
    __API__: "",
    __PROJECT__: "jest",
  },
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  rootDir: "../..",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  coveragePathIgnorePatterns: ["/node_modules/"],
};
