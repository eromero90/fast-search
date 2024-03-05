import data from "../data/currencies.json";

const currencies = Object.entries(data);

const searchWorker = new ComlinkWorker<typeof import("../workers/search")>(
  new URL("../workers/search", import.meta.url)
);

const createWorkerResource = (promise: Promise<[string, string][]>) => {
  let result: [string, string][];

  const resultPromise = promise
    .then((data) => (result = data))
    .catch((error) => console.log(error));

  return {
    read() {
      if (!result) throw resultPromise;
      return result;
    },
  };
};

export { currencies, searchWorker, createWorkerResource };
