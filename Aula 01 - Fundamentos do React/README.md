# Aula 01 - Fundamentos do React

O objetivo dessa aula é entender o que é o React e aprender os principais fundamentos
dessa biblioteca.

## Assuntos que serão abordados nessa aula
- [ ] O que é o React
- [ ] O que é um SPA
- [ ] O que é um PWA
- [ ] Criação de um projeto React com TypeScript utilizando Create-React-App
- [ ] Estrutura do projeto
- [ ] JSX
- [ ] O que são componentes
  - [ ] Componentes de classe
  - [ ] Componentes de função
- [ ] Incorporando expressões no JSX
- [ ] Adicionando CSS aos componentes
  - [ ] CSS Module
  - [ ] CSS-in-JS
  - [ ] Inline
- [ ] Props
- [ ] Children
- [ ] State
- [ ] Manipulação de eventos
- [ ] Renderização condicional
- [ ] Listas e Chaves
- [ ] Componentes controlados
- [ ] Elevando o State

## Exercícios
1) Construa um página que permita sortear nomes digitados dentro de uma textarea. Cada nome deve ser digitado em uma linha diferente da
textarea. Quando um nome for sorteado ele deve ser removido da textarea de nomes e aparecer dentro de uma div com o título de "Nomes Sorteados". Desafio: salvar os nomes que já foram sorteados 
utilizando localStorage.

2) Construa uma página que contenha uma lista de produtos de acordo com a imagem abaixo:
<img src="https://pt-br.reactjs.org/static/9381f09e609723a8bb6e4ba1a7713b46/90cbd/thinking-in-react-components.png" title="Lista de produtos">
Os números da imagem correspondem aos seguintes componentes:
    1. FilterableProductTable (laranja): contém a totalidade do exemplo
    2. SearchBar (azul): recebe todo input do usuário
    3. ProductTable (verde): exibe e filtra a coleção de dados baseado no input do usuário
    4. ProductCategoryRow (turquesa): exibe um cabeçalho para cada categoria
    5. ProductRow (vermelho): exibe uma linha para cada produto