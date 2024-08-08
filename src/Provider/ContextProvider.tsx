import { FC, PropsWithChildren, createContext, useState } from "react";

interface iProps {
  toggle: boolean;
  menu: boolean;
  handleMenu: () => void;
  handleToggle: () => void;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as iProps);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <GlobalContext.Provider
      value={{
        toggle,
        setToggle,
        handleToggle,
        menu,
        setMenu,
        handleMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
