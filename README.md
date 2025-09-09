# Pokédex React

Este projeto é uma Pokédex desenvolvida em React, consumindo a [PokeAPI](https://pokeapi.co/). O objetivo é listar, detalhar e paginar pokémons, além de aplicar um tema visual inspirado no universo Pokémon.

---

## Propósito da aplicação

A aplicação foi criada para servir como uma Pokédex digital, permitindo ao usuário pesquisar, visualizar detalhes e navegar entre diferentes pokémons de forma fácil, rápida e visualmente agradável. O projeto também visa exercitar conceitos avançados de React, consumo de APIs públicas e estilização dinâmica.

---

## Funcionalidades

- **Listagem de Pokémons:**  
  Exibe uma lista paginada de pokémons, mostrando nome e imagem.
- **Pesquisa por tipo:**  
  Permite filtrar pokémons pelo tipo (ex: fire, water, grass).
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

## Ferramentas utilizadas

- **React:** Biblioteca principal para construção da interface.
- **JavaScript (ES6+):** Linguagem de programação utilizada.
- **Styled-components:** Para estilização dinâmica e baseada em tema, facilitando a implementação de temas claro/escuro.
- **PokeAPI:** API pública para obtenção dos dados dos pokémons.

**Por que essas ferramentas?**  
O React foi escolhido pela sua flexibilidade e popularidade no desenvolvimento de SPAs. Styled-components permite um controle mais granular e dinâmico dos estilos, essencial para temas. A PokeAPI é uma API pública, gratuita e completa para o universo Pokémon.

---

## Decisões de planejamento e execução

- **Paginação customizada:**  
  Optei por mostrar blocos de 4 páginas para facilitar a navegação em dispositivos móveis e evitar poluição visual.
- **Styled-components:**  
  Escolhi styled-components para facilitar a troca de tema e manter o CSS modularizado junto aos componentes.
- **Responsividade:**  
  Desde o início, o layout foi pensado para funcionar bem em qualquer tamanho de tela, usando media queries e flexbox.
- **Pesquisa por tipo:**  
  A pesquisa por tipo foi implementada para enriquecer a experiência do usuário e demonstrar manipulação de filtros com React e APIs.
- **Contexto de tema:**  
  Usei Context API para gerenciar o tema globalmente, facilitando futuras expansões como modo escuro.

---

## Estrutura do Projeto

```
src/
  components/
    listar-pokemons/
    detalhes-pokemons/
    paginacao/
    pesquisa/
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
- **Pesquisa:**  
  O usuário pode pesquisar pokémons por tipo, e a lista é atualizada dinamicamente.
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