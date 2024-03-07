import appMensaje from '../../public/app_message.png'
import appLlamada from '../../public/app_calls.png'
import appAjustes from '../../public/app_settings.png'
import appNavegador from '../../public/app_navegador.png'
import appCoC from '../../public/app_coc.png'
import appShadow from '../../public/app_shadow.png'
import appContactos from '../../public/app_contactos.png'

interface dataInterface{
    name: string,
    image: string,
    navigate: null | string,
    memory: number,
    wifi: boolean
}

const data: dataInterface[] = [
    {
        name: 'Ajustes',
        image: appAjustes,
        navigate: 'settings',
        memory: 1,
        wifi: false
    },
    {
        name: 'Mensajes',
        image: appMensaje,
        navigate: null,
        memory: 1,
        wifi: false
    },
    {
        name: 'Llamadas',
        image: appLlamada,
        navigate: null,
        memory: 1,
        wifi: false
    },
    {
        name: 'Navegador',
        image: appNavegador,
        navigate: null,
        memory: 1,
        wifi: true
    },
    {
        name: 'Contactos',
        image: appContactos,
        navigate: 'contactos',
        memory: 1,
        wifi: false
    },
    {
        name: 'Clash Of Clans',
        image: appCoC,
        navigate: null,
        memory: 2,
        wifi: true
    },
    {
        name: 'Shadow Fight',
        image: appShadow,
        navigate: null,
        memory: 3,
        wifi: false
    }  
]

export default data