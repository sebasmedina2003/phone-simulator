import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useIconsContext } from "../contexts/icons";
import usePageHook from "../hooks/page";
import Header from "../components/header"
import SalirSVG from "../../assets/salir";

function SettingsInterface(){
    const { setWifi, wifi, setSound, sound } = useIconsContext()
    const { handlerClickRoot } = usePageHook()

    return(
        <main className="flex flex-col w-screen h-screen bg-gradient-to-r from-red-500 to-orange-500">
            <Header />

            <div className="flex flex-col gap-[10px] ml-[20px]">
                <Button isIconOnly onClick={() => handlerClickRoot()}>
                    <SalirSVG />
                </Button>

                <h1 className="text-4xl font-bold text-center mb-4 text-indigo-600">
                    Ajustes del dispositivo
                </h1>

                <Switch color="primary" isSelected={wifi} onValueChange={setWifi}>
                    Wifi
                </Switch>

                <Switch color="primary" isSelected={sound} onValueChange={setSound}>
                    Sonido
                </Switch>
            </div>
        </main>
    )
}

export default SettingsInterface