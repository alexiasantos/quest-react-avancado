import React, { useEffect, useState } from 'react';
import './paginacao.css';

const Paginacao = ({ totalPokemons, totalPerPage, setPagina }) => {
  const qtdPaginas = 4;

    const [totalPaginas, setTotalPaginas] = useState([]);


    const [next,setNext] = useState(qtdPaginas);

      useEffect(() => {
        const fetchPaginacao = async () => {    
          const totalPaginas = Math.ceil(totalPokemons / totalPerPage);
          const totalNumbers = Array.from({ length: totalPaginas }, (_, i) => i + 1);
          setTotalPaginas(totalNumbers);
        };
    
        fetchPaginacao();
      }, [next, totalPokemons]);

      return(
        <ul>
          <li className='buttonPrev' onClick={() => setNext(next - qtdPaginas)} disabled={next === qtdPaginas}>
            <button>
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#2a75bb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          </li>
          {totalPaginas.filter((numero) => (
            numero > next - qtdPaginas  && numero <= next
          )).map((numero) => (
            <li className='buttonPagination' key={numero} onClick={() => setPagina(numero)}>
              <button>{numero}</button>
            </li>
          ))}
          <li className='buttonNext' onClick={() => setNext(next + qtdPaginas)} disabled={next === totalPaginas.length}>
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#2a75bb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </li>
        </ul>
      )
}


export default Paginacao;
