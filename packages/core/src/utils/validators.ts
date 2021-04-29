/**
 * http://arduino.ru/Reference/ASCIIchart
 * first 32
 */
export const checkASCIIchart = (query: string): boolean => {
  const symbols = query.split('');
  const blackSymbols = symbols.filter((symbol) => symbol.charCodeAt(0) < 32);
  if (blackSymbols.length) {
    return false;
  }
  return true;
};

export const checkResctrictedSymbolds = (
  query: string,
  restrictedSymbolds: string[]
): boolean => {
  const symbols = query.split('');
  const blackSymbols = symbols.filter((symbol: string) =>
    restrictedSymbolds.includes(symbol)
  );
  if (blackSymbols.length) {
    return false;
  }
  return true;
};

export const checkWhiteCommand = (
  query: string,
  whiteCommandsList: string[]
): boolean => {
  const regexp = /(\w*\()/gm;
  const queryCommands = [...query.matchAll(regexp)]
    .map((item) => item[0].replace('(', ''))
    .filter((item) => item.trim());

  const blackCommands = queryCommands.filter(
    (command) => !whiteCommandsList.includes(command)
  );

  if (blackCommands.length) {
    return false;
  }
  return true;
};

export const checkPair = (query: string, pair: [string, string]): boolean => {
  const stack = [];
  const [start, stop] = pair;
  // eslint-disable-next-line no-restricted-syntax
  for (const symbol of query) {
    if (symbol === start) {
      stack.push(symbol);
    }
    if (symbol === stop) {
      stack.pop();
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};
