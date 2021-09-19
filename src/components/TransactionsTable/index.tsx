import { useContext } from "react";
import {  useTransections } from "../../hooks/useTransections";
import { Container } from "./styles";


export function TransactionsTable() {
    const {transitions} = useTransections();
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
                    {transitions.map(d => {
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