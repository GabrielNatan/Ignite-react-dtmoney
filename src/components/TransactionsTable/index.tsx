import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() =>{
        api.get('transitions')
        .then(response => console.log(response.data))
    },[])
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de Site</td>
                        <td className="deposit">R$1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/10/2020</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento de Site</td>
                        <td className="withdraw">- R$1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/10/2020</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
    
}