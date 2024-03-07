import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

// Define the context interface
interface contextProps {
  wifi: boolean;
  setWifi: Dispatch<SetStateAction<boolean>>
  sound: boolean;
  setSound: Dispatch<SetStateAction<boolean>>
}

// Create the context
const iconsContext = createContext<contextProps>({
  wifi: true,
  setWifi: (): boolean => true,
  sound: true,
  setSound: (): boolean => true
});

// Define the memoryContextProvider component (PascalCase)
export const IconsContextProvider = ({ children }: { children: ReactNode }) => {
  const [ wifi, setWifi ] = useState<boolean>(true);
  const [ sound, setSound ] = useState<boolean>(true)

  return (
    <iconsContext.Provider value={{ wifi, setWifi, sound, setSound }}>
      {children}
    </iconsContext.Provider>
  );
};

// Hook to access context within components
export const useIconsContext = () => useContext(iconsContext);