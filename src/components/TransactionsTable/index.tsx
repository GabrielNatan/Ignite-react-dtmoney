import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction{
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: number;
    type: string;
}

export function TransactionsTable() {
    const [data, setData] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('transitions')
            .then(response => setData(response.data.transitions))
    }, [])
    return (
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
                    {data.map(d => {
                        return (
                            <tr key={d.id}>
                                <td className="title">{d.title}</td>
                                <td className={d.type}>{new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(d.amount)}</td>
                                <td>{d.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(d.createdAt))}
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </Container>
    )

}