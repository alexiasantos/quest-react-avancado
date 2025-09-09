import { useEffect, useState } from 'react';
import './listarPokemons.css';
import Paginacao from '../paginacao/paginacao';
import { Link } from 'react-router-dom';
import { ThemeTogglerButton } from "../../components/theme-toggler-button/theme-toggler-button";
import Pesquisa from '../pesquisa/pesquisa';
const totalPerPage = 10;

const ListarPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [typeFilter, setTypeFilter] = useState(""); 

  useEffect(() => {
    const fetchPokemons = async () => {
      if (typeFilter) {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${typeFilter}`);
        if (!response.ok) {
          setPokemons([]);
          setTotalPokemons(0);
          return;
        }
        const data = await response.json();
        const pokemonsDoTipo = data.pokemon.map(p => p.pokemon);
        setTotalPokemons(pokemonsDoTipo.length);

        const start = (pagina - 1) * totalPerPage;
        const end = start + totalPerPage;
        const pagePokemons = pokemonsDoTipo.slice(start, end);

        const detalhes = await Promise.all(
          pagePokemons.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(detalhes);
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPerPage}&offset=${(pagina - 1) * 10}`);
        const data = await response.json();
        const totalResponse = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const totalData = await totalResponse.json();
        setTotalPokemons(totalData.count);

        const detalhes = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(detalhes);
      }
    };

    fetchPokemons();
  }, [pagina, typeFilter]);

  const handleSearch = (type) => {
    setTypeFilter(type);
    setPagina(1);
  };

  return (
    <section>
      <div className="controls">
        <Pesquisa onSearch={handleSearch} /> <ThemeTogglerButton />
      </div>
      <h2>Pokémons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <Link to={`/detalhes/${pokemon.id}`} key={pokemon.id}>
            <li className='pokemonHome'>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p className='pokemonName'>{pokemon.name}</p>
            </li>
          </Link>
        ))}
      </ul>
      <Paginacao totalPokemons={totalPokemons} totalPerPage={totalPerPage} setPagina={setPagina} />
    </section>
  );
};

export default ListarPokemons;