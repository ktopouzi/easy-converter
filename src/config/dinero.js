import Dinero from "dinero.js";

Dinero.globalExchangeRatesApi = {
  endpoint: "https://api.exchangeratesapi.io/latest?base={{from}}",
  propertyPath: "rates.{{to}}",
};
