const prettier = require('prettier/standalone');
const parserTypescript = require('prettier/parser-typescript');

/**
 * Runs the given code through the Prettier formatter.
 *
 *    https://prettier.io/
 *    https://prettier.io/docs/en/api.html
 *
 */
export function format(code?: string) {
  if (!code) {
    return code;
  }

  code = prettier.format(code, {
    singleQuote: true,
    trailingComma: 'all',
    parser: 'typescript',
    plugins: [parserTypescript],
  });

  return code;
}
