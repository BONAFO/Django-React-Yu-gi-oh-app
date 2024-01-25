import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";

export const cardTypeFilterContext = createContext();
export const useCardTypeFilterContext = () => {
  return useContext(cardTypeFilterContext);
};

const CardTypeFilterContextProvider = ({ children }) => {
  const [isLink, setLink] = useState(false);
  const [isSpell, setSpell] = useState(false);
  const [isTrap, setTrap] = useState(false);
  const [isPendulum, setPendulum] = useState(false);

  return (
    <cardTypeFilterContext.Provider
      value={{
        isLink: isLink,
        setLink: setLink,
        isSpell: isSpell,
        setSpell: setSpell,
        isTrap: isTrap,
        setTrap: setTrap,
        isPendulum: isPendulum,
        setPendulum: setPendulum,
      }}
    >
      {children}
    </cardTypeFilterContext.Provider>
  );
};

export default CardTypeFilterContextProvider;
