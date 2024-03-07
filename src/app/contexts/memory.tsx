import { ReactNode, createContext, useContext, useState } from "react";

// Define the context interface
interface contextProps {
  memory: number;
  openApplication: (memoryApplication: number) => boolean;
  closeApplication: (memoryApplication: number) => boolean;
  freeMemory: () => void;
  contBattery: number;
}

// Create the context
const memoryContext = createContext<contextProps>({
  memory: 8,
  openApplication: (): boolean => false,
  closeApplication: (): boolean => false,
  freeMemory: (): null => null,
  contBattery: 0
});

// Define the memoryContextProvider component (PascalCase)
export const MemoryContextProvider = ({ children }: { children: ReactNode }) => {
  const [ memory, setMemory ] = useState<number>(8);
  const [ contBattery, setContBattery ] = useState<number>(0)

  function openApplication(memoryApplication: number) {
    setContBattery(contBattery+1)

    if (memory - memoryApplication <= 0) {
      return false;
    }
    setMemory(memory - memoryApplication);
    return true;
  }

  function closeApplication(memoryApplication: number) {
    setContBattery(contBattery+1)
    setMemory(memory + memoryApplication);
    return true;
  }

  function freeMemory(){
    setContBattery(contBattery+1)
    setMemory(8)
  }

  return (
    <memoryContext.Provider value={{ openApplication, closeApplication, freeMemory, memory, contBattery }}>
      {children}
    </memoryContext.Provider>
  );
};

// Hook to access context within components
export const useMemoryContext = () => useContext(memoryContext);