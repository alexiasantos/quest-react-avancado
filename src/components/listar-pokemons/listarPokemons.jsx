import { useEffect, useState } from 'react';
import './listarPokemons.css';
import Paginacao from '../paginacao/paginacao';
import { Link } from 'react-router-dom';
import { ThemeTogglerButton } from "../../components/theme-toggler-button/theme-toggler-button";

const totalPerPage = 10;


const ListarTodosOsPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await response.json();
  return data.count;
}


const ListarPokemons = () => {

  const [pokemons, setPokemons] = useState([]);

  const [pagina, setPagina] = useState(1);

  const [totalPokemons, setTotalPokemons] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPerPage}&offset=${(pagina - 1) * 10}`);
      const data = await response.json();
      setTotalPokemons(await ListarTodosOsPokemons());

      const detalhes = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
      setPokemons(detalhes);
    };

    fetchPokemons();
  }, [pagina]);

  return (
    <section>
       < ThemeTogglerButton/>
      <h2>Pokémons</h2>
      
      <ul>
        {pokemons.map((pokemon) => (
           <Link to={`/detalhes/${pokemon.id}`}>
              <li className='pokemonHome' key={pokemon.id}>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
              </li>
           </Link>
        ))}
      </ul>

      <Paginacao totalPokemons={totalPokemons} totalPerPage={totalPerPage} setPagina={setPagina} />
    </section>

  );
};

export default ListarPokemons;