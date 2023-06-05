import { createContext, useState } from "react";
import jobsdata from "./jobs.json";
import data from "./products.json";

//skapa context-objekt
const MyContext = createContext();

//skapa provider-komponent
export function ContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  const [jobs, setJobs] = useState(jobsdata);
  console.log(data);

  //definiera funktioner eller metoder som uppdaterar state
  const updateData = (newData) => {
    setProducts(newData);
  };

  return (
    <MyContext.Provider value={{ products, updateData, jobs }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
