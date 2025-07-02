import type { Config } from "jest";

const config: Config = {
  verbose: true,
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    ".+\\.(png|jpg)$": "identity-obj-proxy",
    "^@root(.*)$": "<rootDir>/app$1",
    "^@(.*)$": "<rootDir>/app/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
};
export default config;
