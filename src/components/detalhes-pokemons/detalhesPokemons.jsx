import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './detalhesPokemons.css';

const getPokemonDetails = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

const getDescricaoAbility = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
    const data = await response.json();
    const index_en = data.flavor_text_entries.findIndex(entry => entry.language.name === 'en');
    if (index_en !== -1) {
        return data.flavor_text_entries[index_en].flavor_text;
    }
    return 'Descrição não disponível em inglês';
}

const DetalhesPokemons = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getPokemonDetails(id);
            const abilitiesWithDescription = await Promise.all(
                data.abilities.map(async (abilityInfo) => {
                    const descricao = await getDescricaoAbility(abilityInfo.ability.name);
                    return { ...abilityInfo, descricao };
                })
            );
            setPokemon({ ...data, abilities: abilitiesWithDescription });
        };

        fetchPokemon();
    }, [id]);

  return (
    <div >
      <div className="pokemon-details">
        <div className="resumo">
          <div className="resumo-descricao">
            <Link className='link' to="/">Voltar</Link>
            <p className='pokemon-name'>{pokemon?.name}</p>
          </div>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <p><span className="pokemon-type">Tipo: </span>{pokemon?.types?.map((typeInfo) => (
            <span key={typeInfo.type.name} >{typeInfo.type.name}</span>
          ))}</p>
          <ul className='ul-details'>
            <p className="pokemon-ability-title">Habilidades:</p>
            {pokemon?.abilities?.map((abilityInfo) => (
              <li  key={abilityInfo.ability.name}>
                <span className='pokemon-ability-name'>{abilityInfo.ability.name}</span> : {abilityInfo.descricao}
              </li>
            ))}
          </ul> 
        </div>
        <div className="detalhes">
          <h2>Detalhes do Pokémon</h2>
          <p className="pokemon-move-title">Movimentos:</p>
          <ul className='ul-details pokemon-move-name'>
            {pokemon?.moves?.map((moveInfo) => (
              <li  key={moveInfo.move.name}>{moveInfo.move.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default DetalhesPokemons;