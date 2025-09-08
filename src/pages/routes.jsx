import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Listagem} from './listarPokemons';
import {Detalhes} from './detalhesPokemons';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listagem />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
};
export { Rotas };