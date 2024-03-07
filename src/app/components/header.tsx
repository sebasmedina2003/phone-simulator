import { WifiSVG } from "../../assets/wifi"
import { SilenceSVG } from "../../assets/silence"
import SoundSVG from "../../assets/sound"
import { Battery100SVG } from "../../assets/battery100"
import { Battery50SVG } from "../../assets/battery50"
import { SignalBarSVG } from "../../assets/signal"
import { useIconsContext } from "../contexts/icons"
import useHookPage from "../hooks/data"
import { useMemoryContext } from "../contexts/memory"

function Header () {
    const { currentTime } = useHookPage()
    const { wifi, sound } = useIconsContext()
    const { contBattery } = useMemoryContext()

    return(
        <header className="flex flex-row justify-between items-center h-[40px] m-[10px]">
            <div className="flex flex-row">
                <span>
                    { currentTime? currentTime: 'getting data...' }
                </span>
            </div>

            <div className="flex flex-row flex-nowrap gap-[5px]">
                {sound? <SoundSVG />: <SilenceSVG />}
                <SignalBarSVG />
                { wifi? <WifiSVG />:null}
                {contBattery>=15? <Battery50SVG /> : <Battery100SVG />}
            </div>
                
        </header>
    )
}

export default Header