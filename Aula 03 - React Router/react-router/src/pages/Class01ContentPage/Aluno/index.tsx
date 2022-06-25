interface IProps {
    nome: string;
    notas: number[];
    // notas: Array<number> || number[];
}

const { media, nome } = { media: 10, nome: "William" };
console.log(media, nome);

const numeros = [1, 2, 3];
const numerosEmDobro = numeros.map((numero, indice, vetor) => numero * 2);
console.log(numerosEmDobro);

export function Aluno({ nome, notas }: IProps) {   
    const calculaMedia = (notas: number[]) => notas.reduce((prevValue, currentValue) => prevValue + currentValue) / notas.length;
    // function calculaMedia(notas: number[]) {
    //     return notas.reduce((prevValue, currentValue) => prevValue + currentValue) / notas.length;
    // }
    // const alunos = [
    //     {
    //         id: "219775f5-a4d2-44c2-bf58-6559b3653542",
    //         nome: "William",
    //         email: "william@email.com", 
    //         whatsapp: "(99) 9 9999-9999"
    //     },
    //     {
    //         id: "219775f5-a4d2-44c2-bf58-6559b3653540",
    //         nome: "Marcos",
    //         email: "marcos@email.com", 
    //         whatsapp: "(99) 9 9997-9999"
    //     },
    //     {
    //         id: "219775f5-a4d2-44c2-bf58-6559b3653541",
    //         nome: "Pedro",
    //         email: "pedro@email.com", 
    //         whatsapp: "(99) 9 9949-9999"
    //     },
    // ];
    
    return (
        <>
            <h3 style={{ color: "red", backgroundColor: "black" }}>Nome do aluno: {nome}</h3>
            {
                // Renderizando uma lista de elementos
                notas.map((nota, indice) => <h4 key={indice}>Nota {indice + 1}: {nota.toFixed(2)}</h4>)
            } 
            {
                // alunos.map((aluno) => <h4 key={aluno.id}>Nome: {aluno.nome}</h4>)
            }           
            <h4>Média do aluno: {calculaMedia(notas).toFixed(2) || "0.00"}</h4>
        </>
    );
}