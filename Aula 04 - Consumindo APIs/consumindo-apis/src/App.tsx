import { useEffect, useState } from 'react';
import './App.css';
import { catsApi } from "./services/api";
import { ICat } from "./types/Cat";

function App() {
  const [cats, setCats] = useState<ICat[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  async function getCatsFromPage(page: number) {
    try {
      const cats = (await catsApi.get<ICat[]>(`/search?limit=10&page=${page}`)).data;
      setCats(cats);
    } catch (error) {
      console.log(error);
      alert("Falha ao obter os gatos");
    }
  }

  useEffect(() => {
    getCatsFromPage(currentPage);
  }, [currentPage]);

  return (
    <div className="App">
      <h1>Consumindo APIS</h1>
      <div className="images-container">
        {
          cats.map(cat => (
            <div className="cat-container">
              <img key={cat.id} src={cat.url} height={cat.height} width={cat.width} />
            </div>
          ))
        }
      </div>
      <button onClick={() => setCurrentPage(0)}>1</button>
      <button onClick={() => setCurrentPage(1)}>2</button>
      <button onClick={() => setCurrentPage(2)}>3</button>
    </div>
  );
}

export default App;
