import React, { useDeferredValue, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import "./App.css";
import { createWorkerResource, currencies, searchWorker } from "./lib";
import { CurrencySearch } from "./components";

function App() {
  console.time("render app");
  const defaultValue = "";
  const [workerResource, setWorkerResource] = useState<
    ReturnType<typeof createWorkerResource>
  >(() => createWorkerResource(searchWorker.search(currencies, defaultValue)));

  const deferredResource = useDeferredValue(workerResource);
  const isStale = workerResource !== deferredResource;

  const debounced = useDebouncedCallback((value: string) => {
    setWorkerResource(
      createWorkerResource(searchWorker.search(currencies, value))
    );
  }, 300);

  const UI = (
    <div>
      <p>Find currency:</p>
      <input
        defaultValue={defaultValue}
        onChange={(e) => debounced(e.target.value)}
      />
      <React.Suspense fallback={<>Loading...</>}>
        <CurrencySearch workerResoure={deferredResource} isStale={isStale} />
      </React.Suspense>
    </div>
  );
  console.timeEnd("render app");

  return UI;
}

export default App;
