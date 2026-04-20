import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cardapio from './Pages/Cardapios'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas
