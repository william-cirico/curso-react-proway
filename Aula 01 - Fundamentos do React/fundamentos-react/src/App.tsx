import './App.css';
import { Aluno } from './components/Aluno';
import { Card } from './components/Card';
import { Contador } from './components/Contador';
import { PrimeiroComponenteClasse } from './components/PrimeiroComponenteClasse';
import { PrimeiroComponenteFuncao } from './components/PrimeiroComponenteFuncao';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <Card titulo="Componente de classe">
        <PrimeiroComponenteClasse />
      </Card>
      <Card titulo="Componente de Função">
        <PrimeiroComponenteFuncao />
      </Card>
      <Card titulo="Props e Renderização de Listas">
        <Aluno nome="William" notas={[8, 10, 9]} />
        <Aluno nome="Marcos" notas={[8, 5, 9]} />
        <Aluno nome="Bruno" notas={[5, 4, 3]} />
      </Card>
      <Card titulo="State e Eventos">
        <Contador valorInicial={10} />
      </Card>
    </div>
  );
}

export default App;
