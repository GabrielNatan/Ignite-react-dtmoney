import {useContext} from 'react'
import { Container } from "./style";
import IncomeImg from "../../assets/income.svg"
import Outcome from "../../assets/outcome.svg"
import Total from "../../assets/total.svg"
import { TransactionsContext } from "../../TransectionsContext";


export function Summary(){
    const {transitions} = useContext(TransactionsContext)

    

    const summary = transitions.reduce((acc,transition)=>{
        if(transition.type === 'deposit'){
            acc.deposits += transition.amount;
            acc.total += transition.amount;
        }else{
            acc.withdraw += transition.amount;
            acc.total -= transition.amount;

        }

        return acc
    },{
        deposits:0,
        withdraw:0,
        total:0,
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas"/>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saidas"/>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.withdraw)}</strong>
            </div>
            <div className="hig-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Entradas"/>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
} 