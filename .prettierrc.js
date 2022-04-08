module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.sol',
      options: {
        tabWidth: 4,
        printWidth: 120,
        singleQuote: false,
        explicitTypes: 'always',
      },
    },
  ],
};
