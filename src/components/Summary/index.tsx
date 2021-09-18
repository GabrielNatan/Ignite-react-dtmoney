import { Container } from "./style";
import IncomeImg from "../../assets/income.svg"
import Outcome from "../../assets/outcome.svg"
import Total from "../../assets/total.svg"
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas"/>
                </header>
                <strong>R$1803,90</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saidas"/>
                </header>
                <strong>R$1003,90</strong>
            </div>
            <div className="hig-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Entradas"/>
                </header>
                <strong>R$12803,90</strong>
            </div>
        </Container>
    )
} 