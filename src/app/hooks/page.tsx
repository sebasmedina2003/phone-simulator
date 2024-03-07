import { useNavigate } from "react-router-dom"


const usePageHook = () => {
    const navigation = useNavigate()

    const handlerClickRoot = () => {
        navigation('/')
    }

    return {
        handlerClickRoot
    }
}

export default usePageHook