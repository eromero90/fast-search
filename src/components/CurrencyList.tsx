function CurrencyList({
  list,
  isStale,
}: {
  list: [string, string][];
  isStale: boolean;
}) {
  return (
    <ul style={{ opacity: isStale ? 0.5 : 1 }}>
      {list.map(([symbol, name]) => (
        <li key={symbol + name}>
          {symbol}: {name}
        </li>
      ))}
    </ul>
  );
}

export { CurrencyList };
