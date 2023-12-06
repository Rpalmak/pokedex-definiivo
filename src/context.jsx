// context.jsx
import { createContext, useState } from "react";

const PokeContext = createContext();

const Provider = ({ children }) => {
  const [region, setRegion] = useState("");

  const contextValue = {
    region,
    setRegion,
  }

  return (
    <PokeContext.Provider value={contextValue}>
      {children}
    </PokeContext.Provider>
  );
};

export { Provider, PokeContext };
