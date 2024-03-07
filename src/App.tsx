import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootInterface from './app/pages/root'
import SettingsInterface from './app/pages/settings'
import ContactInterface from './app/pages/contactos'
import { MemoryContextProvider } from './app/contexts/memory'
import { IconsContextProvider } from './app/contexts/icons'
import { NextUIProvider } from '@nextui-org/react'

export default function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
      <IconsContextProvider>
      <MemoryContextProvider>

        <Routes>
          <Route path='/' element={<RootInterface />}/>
          <Route path='/settings' element={<SettingsInterface />}/>
          <Route path='/contactos' element={<ContactInterface />}/>
        </Routes>

      </MemoryContextProvider>
      </IconsContextProvider>
      </NextUIProvider>
    </BrowserRouter>
  )
}