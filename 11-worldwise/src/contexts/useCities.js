import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext is used outside the CitiesProvider");
  return context;
}

export default useCities;
