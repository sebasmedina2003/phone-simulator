import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input
} from "@nextui-org/react"
import Header from "../components/header"
import usePageHook from "../hooks/page"
import useHookData from "../hooks/data"
import SalirSVG from "../../assets/salir"
import AddSVG from "../../assets/add"
import { useState } from "react"

export default function ContactInterface(){
    const { handlerClickRoot } = usePageHook()
    const { contactsData, appendContact } = useHookData()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [ name, setName ] = useState('')
    const [ numero, setNumero ] = useState('')
    
    return(
        <main className="flex flex-col w-screen h-screen bg-gradient-to-r from-red-500 to-orange-500">
            <Header />

            <div className="flex flex-col gap-[10px] ml-[20px]">
                <Button isIconOnly onClick={() => handlerClickRoot()}>
                    <SalirSVG />
                </Button>

                <h1 className="text-4xl font-bold text-center mb-4 text-indigo-600">
                    Contactos
                </h1>

                {
                    contactsData.map((contact) => (
                        <span> {contact.name} - {contact.numero} </span>
                    ))
                }
                
                <Button isIconOnly onPress={onOpen}>
                    <AddSVG />
                </Button>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader>
                                <h1>Agregar Usuario</h1>
                            </ModalHeader>

                            <ModalBody>
                                <Input value={name} onValueChange={setName} label='Nombre' />
                                <Input value={numero} onValueChange={setNumero} label='Numero' />
                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={() => {appendContact({name:name, numero:numero})}}>
                                    Save
                                </Button>
                            </ModalFooter>
                            </>
                        )}

                    </ModalContent>
                </Modal>
            </div>


        </main>
    )
}