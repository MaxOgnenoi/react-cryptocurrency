import "./styles.css"
import { Rouse, Routes } from 'react-router-dom'
import Currencies from "./pages/Currencies"
import Main from "./pages/Main"
import Price from "./pages/Price"

export default function App(props) {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price' element={<Price />} />
      </Routes> </div>
  )
}