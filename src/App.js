import "./styles.css"
import { Route, Routes } from 'react-router-dom'
import Currencies from "./pages/Currencies"
import Main from "./pages/Main"
import Price from "./pages/Price"
import Nav from "./components/Nav"

export default function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  )
}