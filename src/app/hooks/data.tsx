import { useEffect, useState } from "react";
import data from "./apps";
import contacts from "./contact";

const useHookData = () => {
    const [ currentTime, setCurrentTime ] = useState("");
    const [ appsData ] = useState(data)
    const [ contactsData, setContactsData ] = useState(contacts)

    const appendContact = (contact:{name:string, numero:string}) => {
        contactsData.push(contact)
        setContactsData(contactsData)
    }

    // Obtencion del string de la hora
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleDateString(
            'es-ES',
            {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true, // Opcional si no quieres AM/PM
            }
        )
        .slice(9,20));
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }, []);

    return {
        currentTime,
        appsData,
        contactsData,
        appendContact
    }
}


export default useHookData