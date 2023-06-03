# Aula 01 - Fundamentos do React

O objetivo dessa aula é entender o que é o React e aprender os principais fundamentos
dessa biblioteca.

## Assuntos que serão abordados nessa aula
- [ ] O que é o React
- [ ] O que é um SPA
- [ ] O que é um PWA
- [ ] Criação de um projeto React com TypeScript utilizando Create-React-App X Vite
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

## Conceitos

### Introdução
O React é uma biblioteca JavaScript popular e amplamente adotada para o desenvolvimento de interfaces de usuário modernas. Criado pelo Facebook, o React revolucionou a forma como construímos aplicativos web ao introduzir um novo paradigma de programação baseado em componentes.

Diferente das abordagens tradicionais, em que as páginas web eram construídas usando manipulação direta do DOM (Modelo de Objeto de Documento), o React utiliza uma abordagem declarativa, na qual os desenvolvedores descrevem como a interface de usuário deve ser exibida para um determinado estado de aplicativo.

Um dos principais benefícios do React é a capacidade de criar componentes reutilizáveis. Os componentes são unidades independentes que encapsulam lógica e visualização, permitindo a construção de interfaces complexas divididas em partes menores e mais gerenciáveis. Isso facilita a manutenção, o teste e o desenvolvimento colaborativo de aplicativos.

Outro aspecto importante do React é o Virtual DOM (DOM virtual), um conceito-chave por trás do seu desempenho e eficiência. O React cria uma representação virtual da estrutura do DOM em memória e, em seguida, realiza comparações eficientes entre o estado atual e o estado anterior para atualizar somente as partes que foram alteradas. Isso minimiza a manipulação direta do DOM e melhora o desempenho geral da aplicação.

Além disso, o React possui uma comunidade ativa e um ecossistema rico, que inclui uma variedade de bibliotecas e ferramentas adicionais. O React Router permite a construção de aplicativos de várias páginas, o Redux facilita o gerenciamento do estado global do aplicativo e o Styled Components oferece uma abordagem poderosa para estilizar componentes.

Ao aprender React, você estará equipado com habilidades essenciais para desenvolver aplicativos web modernos, escaláveis e de alto desempenho. Com uma curva de aprendizado relativamente suave e documentação abrangente, o React se tornou uma escolha popular para desenvolvedores em todo o mundo.

### JSX
JSX é uma extensão da linguagem JavaScript que é usada pelo React para criar interfaces de usuário. Ele permite que você misture código JavaScript com sintaxe de HTML, o que torna mais fácil escrever componentes de interface de usuário em um único arquivo de código.

Exemplo:
```javascript
function Botao(props) {
  return (
    <button onClick={props.onClick}>
      {props.texto}
    </button>
  );
}
```

### Componentes
Um dos conceitos fundamentais no React é a ideia de componentes. Os componentes são blocos de construção reutilizáveis que permitem a criação de interfaces de usuário complexas e interativas de forma modular. Com o React, podemos dividir a interface em componentes independentes e combiná-los para formar uma aplicação completa.

Cada componente é responsável por renderizar uma parte específica da interface, encapsulando tanto a lógica quanto a visualização relacionadas a essa parte. Essa abordagem torna o código mais organizado, legível e facilita a manutenção e a reutilização.

Vamos ver um exemplo de um componente simples chamado "Card":

```javascript
import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
```

### Props
No exemplo acima, o componente "Card" recebe algumas propriedades (props) como parâmetros. As propriedades são informações passadas para o componente de fora, permitindo que ele seja personalizado e reutilizado de várias maneiras.

O componente "Card" renderiza uma estrutura HTML que representa um cartão com uma imagem, um título e uma descrição. As propriedades são usadas para preencher essas informações dinamicamente. Por exemplo, podemos usar o componente "Card" várias vezes em diferentes partes de nossa aplicação, passando propriedades diferentes para cada instância:

```javascript
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card
        image="imagem-1.jpg"
        title="Título do Cartão 1"
        description="Descrição do Cartão 1"
      />
      <Card
        image="imagem-2.jpg"
        title="Título do Cartão 2"
        description="Descrição do Cartão 2"
      />
      <Card
        image="imagem-3.jpg"
        title="Título do Cartão 3"
        description="Descrição do Cartão 3"
      />
    </div>
  );
};

export default App;
```
### Children

Em React, a propriedade especial "children" refere-se ao conteúdo inserido entre as tags de abertura e fechamento de um componente. Ela permite que você passe elementos, componentes ou até mesmo texto como filho de um componente pai.

Quando você utiliza o componente pai em seu código JSX e insere conteúdo entre as tags, esse conteúdo é acessado por meio da propriedade "children" no componente pai. O valor da propriedade "children" pode variar dependendo do que é passado entre as tags do componente pai.

Por exemplo, considere o seguinte código:

```javascript
const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Card title="Meu Cartão">
      <p>Conteúdo do cartão</p>
      <button>Clique aqui</button>
    </Card>
  );
};
```

No exemplo acima, o componente "Card" recebe duas props: "title" e "children". O valor da propriedade "title" é utilizado para exibir o título do cartão. Já a propriedade "children" é utilizada para renderizar o conteúdo passado entre as tags de abertura e fechamento do componente "Card".

No componente "App", estamos utilizando o componente "Card" e passando como children um parágrafo <p> com o texto "Conteúdo do cartão" e um botão <button>. Esses elementos são acessíveis dentro do componente "Card" por meio da propriedade "children" e são renderizados dentro da div.

Essa abordagem é útil quando você deseja criar componentes reutilizáveis que podem receber conteúdo variável. Os componentes pais podem ter estruturas diferentes, mas o conteúdo entre as tags pode ser personalizado conforme necessário.

A propriedade "children" pode conter qualquer coisa que seja válida em JSX, incluindo texto, elementos, outros componentes, expressões JavaScript e assim por diante. Isso torna o React altamente flexível e adaptável às necessidades de criação de interfaces de usuário complexas e dinâmicas.
  
### State

Em React, o "state" (estado) é um conceito importante que representa o estado interno de um componente. O state permite que os componentes do React mantenham e gerenciem dados que podem ser atualizados ao longo do tempo, influenciando a renderização e o comportamento do componente.

O state é uma propriedade especial de um componente e é definido usando a função "useState" do React. Quando o estado é atualizado, o React reexecuta o componente e atualiza a interface do usuário para refletir essas mudanças.

Vamos ver um exemplo de como utilizar o state em um componente de contador simples:

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
```
  
No exemplo acima, o componente "Counter" utiliza o state para armazenar o valor do contador. Usamos a função "useState" para inicializar o state com o valor inicial de 0. A função "useState" retorna um par de valores: o valor atual do state (neste caso, "count") e uma função para atualizá-lo (neste caso, "setCount").

Em seguida, definimos duas funções, "increment" e "decrement", que são responsáveis por atualizar o estado "count" chamando a função "setCount". Ao chamar "setCount" e passar um novo valor, o React atualiza o estado e reexecuta o componente.

Dentro do retorno do componente, exibimos o valor atual do contador utilizando a interpolação de variáveis ("{count}"). Também adicionamos dois botões, cada um com um evento "onClick" que chama as funções "increment" e "decrement" respectivamente.

Dessa forma, quando os botões são clicados, o estado "count" é atualizado e o componente é reexecutado, resultando na atualização do valor do contador na interface.

O uso do state no React permite que os componentes mantenham informações dinâmicas e respondam a eventos ou interações do usuário. É uma maneira eficaz de criar componentes interativos e controlar o estado da aplicação em tempo real.

## Exercícios
1) Crie um componente chamado "ButtonCounter" que exiba um botão e um contador. Cada vez que o botão for clicado o contador deve ser incrementado em 1.

2) Crie um componente chamado "Toggle" que exiba um botão "On" e "Off". Ao clicar no botão, o texto do botão deve alternar entre "On" e "Off".

3) Crie um componente chamado "Timer" que exiba um cronômetro. O cronômetro deve iniciar em 00:00 e ir incrementando a cada segundo.

4) Crie um componente chamado "ColorPicker" que permita ao usuário selecionar uma cor de uma paleta de cores. Ao selecionar uma cor, a cor de fundo do componente deve ser atualizada. 

## Desafios

### Desafio 01
Construa uma página que contenha uma lista de produtos de acordo com a imagem abaixo:
<img src="https://pt-br.reactjs.org/static/9381f09e609723a8bb6e4ba1a7713b46/90cbd/thinking-in-react-components.png" title="Lista de produtos">

Os números da imagem correspondem aos seguintes componentes:
* FilterableProductTable (laranja): contém a totalidade do exemplo
* SearchBar (azul): recebe todo input do usuário
* ProductTable (verde): exibe e filtra a coleção de dados baseado no input do usuário
* ProductCategoryRow (turquesa): exibe um cabeçalho para cada categoria<br>
* ProductRow (vermelho): exibe uma linha para cada produto
  
### Desafio 02
Construa um página que permita sortear nomes digitados dentro de uma textarea. Cada nome deve ser digitado em uma linha diferente da
textarea. Quando um nome for sorteado ele deve ser removido da textarea de nomes e aparecer dentro de uma div com o título de "Nomes Sorteados". Desafio: salvar os nomes que já foram sorteados 
utilizando localStorage.


