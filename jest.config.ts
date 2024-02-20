import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
});
 
const config: Config = {
  coverageProvider: 'v8',

  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: [
    './text-encoder.mock.ts',
  
  ],

}

export default createJestConfig(config)



