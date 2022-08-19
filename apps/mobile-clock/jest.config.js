const workspacePreset = require('../../jest.preset');
module.exports = {
  ...workspacePreset,
  displayName: 'mobile-clock',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "node_modules/variables/.+\\.(j|t)sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|@rootstrap/redux-tools)"
  ],
};
