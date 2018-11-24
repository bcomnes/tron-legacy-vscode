const { generateTheme, IColorSet } = require('vscode-theme-generator')
const path = require('path')

const colors = {
  red: '#FF410D',
  green: '#95CC5E',
  greenLight: '#C7F026',
  yellow: '#FFB20D',
  blue: '#267fb5',
  blueLight: '#748aa6',
  background: '#14191f',
  foreground: '#aec2e0'
}

const colorSet = {
  base: {
    background: colors.background,
    foreground: colors.foreground,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  },
  syntax: {
    identifier: colors.blueLight,
    string: colors.red
  },
  ui: {
    cursor: '#FFFFFF'
  },
  terminal: {
    blue: colors.blue,
    brightBlue: colors.blueLight
  },
  overrides: {
    'editorGutter.modifiedBackground': colors.green,
    'editorGutter.addedBackground': colors.blue,
    'editorGutter.deletedBackground': colors.red
  }
};

generateTheme('My Theme', colorSet, path.join(__dirname, 'theme.json'));
