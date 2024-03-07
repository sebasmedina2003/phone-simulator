import { useNavigate } from "react-router-dom";
import { useMemoryContext } from "../contexts/memory";
import { useIconsContext } from "../contexts/icons";
import useHookData from "../hooks/data"

interface Data {
    name: string;
    image: string;
    navigate: string | null;
    memory: number;
    wifi: boolean;
}

function Buttons(){
    const navigation = useNavigate()
    const { appsData } = useHookData()
    const { openApplication } = useMemoryContext()
    const { wifi } = useIconsContext()
    
    const handlerClickButton = (data:Data) => {
        
        if(!data.wifi){
            const can_open = openApplication(data.memory)
            if(can_open && data.navigate) navigation(data.navigate)
            if(can_open) alert(`Aplicación abierta`)
            else alert(`Falta memoria disponible`)

        } else {
            if(wifi){
                const can_open = openApplication(data.memory)
                if(can_open && data.navigate) navigation(data.navigate)
                if(can_open) alert(`Aplicación abierta`)
                else alert(`Falta memoria disponible`)
            }
            else alert('La aplicacion requiere wifi')
        }
        
    }

    return(
        <>
        {
            appsData.map((data, index) => (
                <button onClick={() => handlerClickButton(data) }>
                    <div className="flex flex-col items-center">
                        <img 
                            className="w-[50px] h-[50px]"
                            key={index} src={data.image}
                            alt={`imagen ${data.name}`}
                        />
                        <span key={index}>
                            {data.name}
                        </span>
                    </div>
                </button>
            ))
        }
        </>
    )
}

export default Buttons