import { FC, PropsWithChildren, createContext, useState } from "react";

interface iProps {
  toggle: boolean;
  handleToggle: () => void;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as iProps);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <GlobalContext.Provider
      value={{
        toggle,
        setToggle,
        handleToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
