import Header from "../components/header"
import Buttons from "../components/buttons"
import { useMemoryContext } from "../contexts/memory"
import free_memory from '../../public/free_memory.png'


export default function RootInterface() {
  const { memory, freeMemory } = useMemoryContext()
    return (
        <>
          <main className="flex flex-col w-screen h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            {/* Barra superior del telefono */}
            <Header />

            {/* Botones de las aplicaciones */}
            <div className="flex flex-row flex-wrap gap-[20px] justify-center">
                <Buttons />
            </div>

            {/* Vista de la gestion de memoria */}
            <div className="flex flex-col gap-[10px] bg-gray-300">
              <div className="flex flex-col items-center">
                <span> Memoria Total 8gb</span>
              </div>

              <div className="flex flex-col items-center">
                <span> Memoria Disponible {`${memory}gb`} </span>
              </div>

              <div className="flex flex-col items-center">
                <span> Memoria en uso {`${8-memory}gb`}</span>
              </div>
            </div>

            <button onClick={() => freeMemory() }>
              <div className="flex flex-col items-center">
                <img 
                  className="w-[50px] h-[50px]"
                  src={free_memory}
                  alt={`imagen liberar espacio`}
                />
                <span>
                  Liberar Espacio
                </span>
              </div>
            </button>

          </main>
        </>
    )
}