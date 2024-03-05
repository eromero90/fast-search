import { matchSorter } from "match-sorter";

const search = (currencies: [string, string][], value: string) =>
  matchSorter(currencies, value, { keys: ["0"] });

export { search };
