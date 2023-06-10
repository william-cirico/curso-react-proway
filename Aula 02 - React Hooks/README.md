# Aula 02 - React Hooks

O objetivo dessa aula é aprender o que são os hooks e como 
utilizá-los dentro dos componentes.

## Assuntos que serão abordados nessa aula
- [ ] useState
- [ ] useEffect
  - [ ] ciclo de vida do componente 
- [ ] useRef
- [ ] useContext
- [ ] useReducer
- [ ] useCallback
- [ ] useMemo
- [ ] custom hooks

## Conceitos

### UseState
O hook useState é uma funcionalidade fornecida pela biblioteca React que permite que componentes funcionais do React tenham um estado interno. O estado é um objeto que armazena dados que podem ser atualizados e refletidos na interface do usuário.

Ao usar o useState, você pode declarar uma variável de estado dentro de um componente funcional. Essa variável de estado é geralmente definida como um parâmetro de desestruturação que retorna dois valores: o estado atual e uma função para atualizá-lo. A função de atualização pode ser chamada para modificar o estado.

A sintaxe básica para usar o useState é a seguinte:

```javascript
const [state, setState] = useState(initialState);
```

O parâmetro initialState é o valor inicial para o estado. Pode ser um valor primitivo, como uma string, número ou booleano, ou um objeto mais complexo.

### UseEffect
O hook useEffect é uma funcionalidade fornecida pela biblioteca React que permite que componentes funcionais do React executem efeitos colaterais, como buscar dados em uma API, modificar o DOM ou adicionar eventos, durante diferentes fases do ciclo de vida do componente.

O useEffect é usado para lidar com a lógica que precisa ser executada após a renderização do componente, ou em resposta a mudanças específicas no estado do componente. Ele substitui o uso de métodos de ciclo de vida, como componentDidMount, componentDidUpdate e componentWillUnmount, que são usados em componentes de classe.

A sintaxe básica para usar o useEffect é a seguinte:

```javascript
useEffect(() => {
  // Lógica a ser executada
}, [dependencies]);
```

A função de callback fornecida ao useEffect é executada após a renderização do componente e em qualquer momento em que uma das dependências listadas no array de dependências (dependencies) é atualizada. Se o array de dependências estiver vazio, a função de callback será executada apenas após a primeira renderização do componente.

Dentro da função de callback do useEffect, você pode executar qualquer lógica desejada, como buscar dados, atualizar o estado do componente, modificar o DOM ou adicionar e remover eventos. Além disso, você pode retornar uma função de limpeza opcional, que será executada quando o componente for desmontado ou quando as dependências forem atualizadas.

#### Ciclo de vida dos componentes funcionais
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Os componentes de função, também conhecidos como componentes funcionais, não possuíam um ciclo de vida próprio antes da introdução dos hooks no React 16.8. No entanto, com os hooks, como o useEffect, é possível replicar funcionalidades semelhantes ao ciclo de vida em componentes funcionais.

Aqui está uma descrição do ciclo de vida dos componentes de função usando hooks:

**Montagem (Mounting):**

useState(): É usado para adicionar um estado interno ao componente. Pode ser usado para definir e atualizar o estado do componente.
useEffect(() => {}, []): É usado para executar efeitos colaterais após a renderização inicial do componente. Pode ser usado para buscar dados, adicionar eventos ou executar qualquer lógica necessária. Quando o array de dependências é passado como um segundo argumento vazio, a função de callback será executada apenas após a primeira renderização do componente.

**Atualização (Updating):**

useState(): Permite definir e atualizar o estado do componente.
useEffect(() => {}, [dependencies]): É usado para executar efeitos colaterais em resposta a mudanças específicas nas dependências listadas no array. A função de callback será executada após a renderização inicial e sempre que as dependências forem atualizadas.
useEffect(() => { return () => {} }, []): É usado para retornar uma função de limpeza opcional que será executada antes da próxima renderização do componente ou quando as dependências forem atualizadas. Pode ser usado para limpar recursos, cancelar assinaturas de eventos ou cancelar temporizadores.

**Desmontagem (Unmounting):**

useEffect(() => { return () => {} }, []): A função de limpeza retornada pelo useEffect é executada quando o componente é desmontado. Isso pode ser usado para limpar recursos ou cancelar assinaturas de eventos antes da remoção do componente do DOM.

Essa abordagem com hooks permite que os componentes de função tenham funcionalidades semelhantes ao ciclo de vida dos componentes de classe, como montagem, atualização e desmontagem. O useEffect é o principal hook usado para lidar com essas funcionalidades, permitindo que a lógica de efeitos colaterais seja executada em momentos específicos durante o ciclo de vida do componente funcional.

### UseRef

O hook useRef é uma funcionalidade fornecida pela biblioteca React que permite a criação de uma referência mutável em componentes funcionais. A referência pode ser usada para armazenar valores que persistem entre renderizações do componente e podem ser acessados ou atualizados de forma imperativa.

Ao contrário das variáveis de estado criadas com o useState, as referências criadas com o useRef não causam uma nova renderização do componente quando o valor é atualizado. Isso significa que as alterações feitas em uma referência não afetam diretamente o fluxo de renderização do componente.

A sintaxe básica para usar o useRef é a seguinte:

```javascript
const refContainer = useRef(initialValue);
```

O parâmetro initialValue é opcional e define o valor inicial da referência. Você pode atribuir qualquer valor a uma referência, seja um objeto, uma função ou qualquer outro tipo de dado.

Depois de criar a referência usando o useRef, você pode acessar seu valor usando refContainer.current.

### UseContext
O hook useContext é uma funcionalidade fornecida pela biblioteca React que permite o acesso e a utilização de um contexto em componentes funcionais. O contexto é uma forma de compartilhar dados entre componentes sem precisar passar props manualmente por toda a árvore de componentes.

O useContext é usado para acessar o valor do contexto definido por um Provider em qualquer nível da árvore de componentes, sem a necessidade de componentes intermediários consumindo o contexto por meio do Consumer.

A sintaxe básica para usar o useContext é a seguinte:

```javascript
const value = useContext(Context);
```


O Context é o objeto de contexto retornado pelo createContext, que é criado quando definimos o contexto usando a função createContext.

### UseReducer
O hook useReducer é uma funcionalidade fornecida pela biblioteca React que permite o gerenciamento de estados complexos em componentes funcionais através da utilização do padrão Reducer. Ele oferece uma alternativa ao useState para lidar com estados mais complexos e com lógica mais elaborada.

O useReducer recebe duas entradas: uma função reducer e um estado inicial. O reducer é uma função que especifica como o estado deve ser atualizado com base em uma ação recebida. O estado inicial é o valor inicial do estado.

A sintaxe básica para usar o useReducer é a seguinte:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

O state representa o estado atual gerenciado pelo useReducer, e dispatch é uma função usada para despachar uma ação que irá atualizar o estado com base na lógica definida no reducer.

O reducer é uma função que recebe dois parâmetros: o estado atual e a ação a ser executada. Ele retorna o novo estado com base na ação recebida. O reducer é responsável por definir como o estado deve ser atualizado em resposta a cada tipo de ação.

### UseCallback
O hook useCallback é uma funcionalidade fornecida pela biblioteca React que permite a memorização de uma função em componentes funcionais. Ele é útil para evitar a criação desnecessária de novas instâncias de funções em cada renderização do componente, otimizando o desempenho em casos em que a função é passada como propriedade para componentes filhos.

Quando uma função é criada dentro do corpo de um componente funcional, ela é recriada em cada renderização desse componente. Isso pode causar problemas de desempenho, especialmente quando essa função é passada como propriedade para componentes filhos, pois os componentes filhos podem ser re-renderizados desnecessariamente.

O useCallback permite que você memorize uma função e a reutilize entre renderizações, garantindo que a mesma instância da função seja fornecida sempre que a dependência não mudar. Isso significa que a função só será recriada se alguma das dependências listadas no array de dependências for alterada.

A sintaxe básica para usar o useCallback é a seguinte:

```javascript
const memoizedCallback = useCallback(callback, dependencies);
```
O callback é a função que você deseja memorizar, e dependencies é um array de dependências que, quando alteradas, irão atualizar a função memorizada.

### UseMemo
O hook useMemo é uma funcionalidade fornecida pela biblioteca React que permite a memorização de valores computados em componentes funcionais. Ele é útil para evitar o cálculo repetido de valores que são caros computacionalmente ou dependem de dados que não mudam frequentemente.

Em certas situações, é comum que um componente precise realizar cálculos ou processamentos intensivos para obter um valor de retorno. Sem o useMemo, esses cálculos seriam executados em todas as renderizações do componente, mesmo quando os valores de entrada não foram alterados. Isso pode levar a um desempenho ruim e a cálculos desnecessários.

O useMemo resolve esse problema, permitindo que você memorize o resultado de um cálculo e o reutilize entre renderizações, evitando o cálculo repetido sempre que o componente for renderizado. Ele aceita uma função de cálculo e um array de dependências que determina quando o cálculo deve ser executado novamente.

A sintaxe básica para usar o useMemo é a seguinte:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

A função computeExpensiveValue é a função que realiza o cálculo ou processamento intensivo para obter um valor. O a e o b são os valores de entrada para o cálculo. O array [a, b] é a lista de dependências que, quando alteradas, indicam que o cálculo deve ser executado novamente.

## Exercícios
1) Crie um componente que utilize o useRef para criar uma referência a um elemento de input e, ao clicar em um botão, dê o foco a esse input.

2) Crie um componente que utilize o useRef para criar uma referência a um elemento de div e, ao passar o mouse sobre essa div, o texto dentro dela deve ser alterado para "Mouse Over".

3) Utilizando o useEffect, crie um componente que exiba a data e hora atualizada em tempo real na tela.

4) Utilize o useReducer para gerenciar o estado de um formulário com múltiplos campos (nome, email, senha). Crie as ações necessárias para atualizar cada campo individualmente e um botão de "Enviar" que exiba os dados preenchidos no formulário.

5) Crie um custom hook chamado useDebounce que receba um valor e um tempo de debounce como parâmetros. Esse hook deve retornar o valor atualizado após o tempo de debounce ter transcorrido sem novas atualizações. Utilize-o para criar um componente de pesquisa que aguarde um pequeno intervalo de tempo antes de realizar a busca.

6) Crie um custom hook chamado useWindowSize que retorna a largura e a altura da janela do navegador. Utilize esse hook em um componente para exibir as dimensões da janela em tempo real.

7) Crie um contexto utilizando o useContext para compartilhar um tema (por exemplo, tema claro/escuro) entre diferentes componentes. Implemente um botão que alterne o tema ao ser clicado.

8) Crie um componente que utilize o useMemo para calcular e exibir o fatorial de um número digitado pelo usuário. O cálculo do fatorial deve ser feito apenas quando o número digitado for alterado.

9) Crie um custom hook chamado useLocalStorage que permita armazenar e recuperar dados em localStorage. Utilize-o para criar um componente de anotações que permita adicionar e exibir notas em uma lista persistente.

10) Utilize o useReducer e o useEffect para criar um componente de cronômetro. O cronômetro deve ter botões de iniciar, pausar, reiniciar e exibir o tempo decorrido em segundos.

## Desafio
1) Construa um aplicativo de tarefas que permita adicionar novas tarefas, editar tarefas (nome e se já está concluída), remover tarefas e buscar a tarefa por nome. Também inclua uma opção para mostrar apenas as tarefas já concluídas. 
Você pode se basear nesse template:

![image](https://user-images.githubusercontent.com/69127474/175781947-cbaa97ca-76f8-4b6b-96b8-2914b78b62c9.png)

