import { CurrencyList } from "./CurrencyList";

function CurrencySearch({
  workerResoure,
  isStale,
}: {
  workerResoure: {
    read(): [string, string][];
  };
  isStale: boolean;
}) {
  const list = workerResoure.read();
  return <CurrencyList list={list} isStale={isStale} />;
}

export { CurrencySearch };
