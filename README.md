# Pokédex React

Este projeto é uma Pokédex desenvolvida em React, consumindo a [PokeAPI](https://pokeapi.co/). O objetivo é listar, detalhar e paginar pokémons, além de aplicar um tema visual inspirado no universo Pokémon.

---

## Funcionalidades

- **Listagem de Pokémons:**  
  Exibe uma lista paginada de pokémons, mostrando nome e imagem.
- **Detalhes do Pokémon:**  
  Ao clicar em um pokémon, exibe uma tela com detalhes como tipos, habilidades e movimentos.
- **Paginação customizada:**  
  Navegação entre páginas com botões de 4 em 4, incluindo setas para avançar e voltar blocos de páginas.
- **Tema visual Pokémon:**  
  Layout colorido, inspirado nas cores e estilo da franquia.
- **Responsividade:**  
  Layout adaptado para diferentes tamanhos de tela, incluindo celulares.
- **Troca de tema:**  
  Estrutura preparada para alternar entre tema claro e escuro.

---

## Tecnologias utilizadas

- React
- JavaScript (ES6+)
- Styled-components
- [PokeAPI](https://pokeapi.co/)

---

## Estrutura do Projeto

```
src/
  components/
    listar-pokemons/
    detalhes-pokemons/
    paginacao/
    ...
  contexts/
    theme-context.jsx
  pages/
    routes.jsx
  App.jsx
  index.jsx
  ...
```

---

## Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone git@github.com:alexiasantos/quest-react-avancado.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o projeto:
   ```bash
   npm start
   ```
4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Como funciona

- **Listagem:**  
  O componente de listagem faz uma requisição para a PokeAPI, busca os pokémons e renderiza em cards.
- **Detalhes:**  
  Ao clicar em um card, o app busca os detalhes do pokémon e exibe em uma tela dedicada.
- **Paginação:**  
  Os botões de paginação mostram blocos de 4 páginas, com setas para navegar entre blocos.
- **Tema:**  
  O tema é aplicado globalmente via contexto, permitindo fácil troca para tema escuro futuramente.
- **Responsividade:**  
  Media queries garantem boa visualização em qualquer dispositivo.

---

## Créditos

- [PokeAPI](https://pokeapi.co/)
- Layout inspirado no universo Pokémon

---

Desenvolvido por Aléxia de Oliveira Santos de Sousa